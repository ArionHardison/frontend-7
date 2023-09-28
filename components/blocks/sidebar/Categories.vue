<template>
  <div id="categories-2" class="widget widget_categories">
    <h5 class="widget-title">Categories</h5>

    <ul>
      <li v-for="category in categories" :key="category.id" class="cat-item">
        <nuxt-link :title="category.category_name" :to="`/programs/${$slug(category.id, category.category_name)}`">{{ category.category_name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "~/mixins/api";
export default {
  name: 'ProgramCategories',
  mixins: [api],
  data() {
    return {
      categories: []
    }
  },
  created() {
    this.getCategories();
  },
  methods: {
    async getCategories(){
      this.categories = await this.get("public/get-program-categories")
    }
  }
}
</script>
