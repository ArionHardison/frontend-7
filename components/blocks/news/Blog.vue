<template>
  <div class="row gutter-width-lg with-pb-lg">
    <template v-if="programItems.data.length">
      <div class="row gutter-width-md with-pb-lg">
        <div v-for="program in programItems.data" :key="program.id" class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div class="card card-post">
            <div class="card-top position-relative">
              <nuxt-link :title="program.name" :to="`/program/${$slug(program.id, program.name)}`">
                <div class="img object-fit overflow-hidden">
                  <div class="object-fit-cover transform-scale-h">
                    <img class="card-top-img" :src="$imageUrl(program.program_image, 'md', false)" :alt="program.name">
                  </div>
                </div>
              </nuxt-link>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                <nuxt-link :title="program.name" :to="`/program/${$slug(program.id, program.name)}`">{{  program.name }}</nuxt-link>
              </h5>
              <p class="card-text">{{ program.description }}</p>
            </div>
          </div>
        </div>
        <template v-if="programItems.meta.current_page < programItems.meta.last_page">
          <div class="col-12 text-center mt-3 mb-3">
            <Loadmore @load="loadMorePrograms"/>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>
<script>
import Loadmore from "~/components/Loadmore/Loadmore.vue";
import api from "~/mixins/api";
import time from "~/mixins/time";
export default {
  name: 'Blog',
  mixins: [api, time],
  components: {
    Loadmore
  },
  data() {
    return {
      searchQuery: this.$route.query.s ? this.$route.query.s : '',
      programItems: {
        data: [],
        meta: null,
      }
    }
  },
  created(){
    this.getPrograms();
  },
  watch: {
    '$route.query'(newQuery) {
      this.searchQuery = newQuery.s;
      this.programItems = {
        data: [],
        meta: null,
      };
      this.getPrograms(1);
    }
  },
  methods: {
    loadMorePrograms(){
      if(this.programItems.current_page < this.programItems.last_page){
        this.getPrograms(this.programItems.meta.current_page+1);
      }
    },
    async getPrograms(page=1){
      const category = this.$getId(this.$route.params.category);
      const tag = this.$getId(this.$route.params.tag);
      const programs  = await this.get(`program-sale/list/${category}/${tag}${this.searchQuery ? '/'+this.searchQuery : ''}?page=${page}`);
      if(programs) {
        if (programs.data.length) {
          this.programItems.data = this.programItems.data.concat(programs.data);
          this.programItems.meta = programs.meta;
        }
      }
    }
  }
}
</script>
