<template>
  <div id="projects" class="block">
    <div class="projects-items clearfix type-1">
      <nuxt-link v-for="item in programItems.data" :key="item.id" :title="item.name"  class="projects-item" :to="`/program/${$slug(item.id, item.name)}`">
        <div class="projects-item-content">
          <div class="projects-item-content-sec">
            <div class="projects-item-date">
              <p>{{ formattedProgramDate(item.created_at) }}</p>
            </div>
            <div class="projects-item-description">
              <h3 class="projects-item-title">{{ item.name }}</h3>
              <p>{{item.description}}</p>
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
    <template v-if="programItems.meta.current_page < programItems.meta.last_page">
      <Loadmore @load="loadMorePrograms"/>
    </template>
  </div>
</template>
<script>
import api from "~/mixins/api";
import time from "~/mixins/time";
import Loadmore from "~/components/Loadmore/Loadmore.vue";

export default {
  name: 'ProgramsPage',
  mixins: [api, time],
  components: {
    Loadmore
  },
  data() {
    return {
      searchQuery: this.$route.query.s ? this.$route.query.s : '',
      programItems: {
        data: [],
        meta: {},
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
        meta: {},
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
