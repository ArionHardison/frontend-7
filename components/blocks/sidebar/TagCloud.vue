<template>
  <div class="widget widget_tag_cloud">
    <h5 class="widget-title">Tags</h5>

    <div class="tagcloud">
      <template v-for="tag in tags">
        <button :title="tag.tag_name" class="tag-cloud-link" @click="setTag(tag)">{{ tag.tag_name }}</button>
      </template>
    </div>
  </div>
</template>

<script>
import api from "~/mixins/api";
export default {
  name: 'Tags',
  mixins: [api],
  data() {
    return {
      tags: [],
    }
  },
  created() {
    this.getTags();
  },
  methods: {
    async getTags(){
      this.tags = await this.get("public/program-tag/all");
    },
    setTag(tag){
      const cat = this.$route.params.category;
      const search =  this.$route.query.s ? this.$route.query.s : '';
      this.$router.push(`/programs/${cat ? cat : '0-all-categories'}/${tag.id}-${tag.tag_name}${search ? '?s='+search : '' }`);
    }
  }
}
</script>
