<template>
  <div id="news">
    <Loading/>

    <Header logoColor="dark"/>

    <main id="main" class="site-main">
      <template v-if="userData">
        <div id="page-title">
          <div class="wrapper text-center">
            <div class="d-flex justify-content-center mb-3">
              <app-avatar :user-info="userData" width="50px" height="50px" class="profile-avatar" @update="updateUserData"/>
            </div>
            <div class="title">
              <h2 class="large mb-3">{{userData.full_name}}</h2>
            </div>
            <div class="description spacer">
             <p>{{userData.email}}</p>
            </div>
          </div>
        </div>
      </template>
      <div id="page-content" class="spacer p-top-xl">
        <div class="wrapper">
          <div class="content">
            <div id="blog">
              <div class="row">

                  <GlobalModuleTasksListComponent/>

                <div class="col-3">
                  <h4>Daily tasks</h4>
                  <template v-if="tasks.length">
                    <template v-for="task in tasks">
                      <assigned-task :task="task"/>
                    </template>
                  </template>
                  <template v-else>
                    <p class="mt-3">No tasks</p>
                  </template>
                </div>
                <div class="col-9">
                  <div class="row gutter-width-sm">
                    <div
                      v-for="program in programs"
                      :key="program.id"
                      class="col-xl-4 col-lg-4 col-md-4 col-sm-12"
                    >
                      <div class="card card-post">
                        <div class="card-top position-relative">
                          <nuxt-link
                            :title="program.name"
                            :to="{
                          name: 'follow-program',
                          query: { id: program.id },
                        }"
                          >
                            <div class="img object-fit overflow-hidden" :class="{
                                  'failed-program': program.status===2,
                                  'finished-program': program.status===1,
                                  'running-program': program.status===0,
                                }">
                              <div class="object-fit-cover transform-scale-h">
                                <ImageComponent :src="program.program_image" size="sm" :tenant="false"/>
                              </div>
                            </div>
                          </nuxt-link>
                        </div>
                        <div class="card-body text-center">
                          <h4 class="card-title text-center">
                            <nuxt-link
                              :title="program.status ? (program.status===1 ? 'Finished' : 'Failed') : 'Follow Program'"
                              :to="{
                            name: 'follow-program',
                            query: { id: program.id },
                          }"
                            >{{ program.name }}
                            </nuxt-link
                            >
                          </h4>
                          <nuxt-link
                            class="btn btn-primary"
                            :title="program.status ? (program.status===1 ? 'Finished' : 'Failed') : 'Follow Program'"
                            :to="{
                          name: 'follow-program',
                          query: { id: program.id },
                        }"
                          >
                            {{program.status ? (program.status===1 ? 'Finished' : 'Failed') : 'Follow Program'}}
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Loading from "~/components/Loading/Loading";
import Header from '~/components/blocks/header/Header';
import Footer from "~/components/blocks/footer/Footer";
import AppAvatar from "@/components/blocks/ui/app-avatar.vue";
import AssignedTask from "@/components/blocks/ui/AssignedTask";
import ImageComponent from "@/components/blocks/ui/ImageComponent.vue"
import GlobalModuleTasksListComponent from "@/components/Program/components/GlobalModuleTasksListComponent.vue"
import api from "@/mixins/api";
export default {
  middleware: ['maintenance', 'isGuest'],
  mixins: [api],
  components: {
    GlobalModuleTasksListComponent,
    ImageComponent,
    AppAvatar,
    AssignedTask,
    Loading,
    Header,
    Footer,
  },
  mounted: function () {
    if (process.client) {
      document.body.classList.add("blog");
    }
  },
  beforeDestroy() {
    if (process.client) {
      document.body.classList.remove("blog");
    }
  },
  metaInfo: {
    title: "Programs",
    titleTemplate: "%s",
  },
  data() {
    return {
      programs: [],
      userData: null,
      tasks: [],
    }
  },
  async created() {
    this.programs = await this.get("personal-chain");
    this.userData = await this.get("user/get-data");
    await this.getTasks();
  },
  methods: {
    async updateUserData(){
      this.userData = await this.get("user/get-data");
    },
    async getTasks() {
      this.tasks = await this.get("personal-chain/tasks");
    },
  }
};
</script>
<style>

.running-program {
  box-shadow: 0 0 0 0 rgb(100, 183, 70);
  animation: pulse 2s infinite;
}

.failed-program {
  box-shadow: 0 0 0 3px rgb(236, 11, 53);
}

.finished-program {
  box-shadow: 0 0 0 3px #3B89C9;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(100, 183, 70, 0.7);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(100, 183, 70, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(100, 183, 70, 0);
  }
}
</style>
