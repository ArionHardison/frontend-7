<template>
    <div id="projects" class="block">
        <div class="projects-items clearfix type-1">
            <nuxt-link v-for="item in programs.data" :key="item.id" :title="item.name"  class="projects-item" :to="`/program/${$slug(item.id, item.name)}`">
                <div class="projects-item-content">
                    <div class="projects-item-content-sec">
                        <div class="projects-item-date">
                            <p>{{ formattedProgramDate(item.created_at) }}</p>
                        </div>

                        <div class="projects-item-description">
                            <h3 class="projects-item-title">{{ item.name }}</h3>
                        </div>
                    </div>
                </div>

                <div class="img object-fit">
                    <div class="object-fit-cover">
                        <img :src="$imageUrl(item.program_image, 'sm', false)" :alt="item.name">
                    </div>
                </div>

                <div class="img-bg-color"></div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    import api from "~/mixins/api";
    import time from "~/mixins/time";

    export default {
        name: 'Projects',
        mixins: [api, time],
        data() {
          return {
            programs: {
              data: []
            },
          }
        },
        async created(){
          this.programs = await this.get("public/get-recent-programs/4");
        },
    }
</script>
