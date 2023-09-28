<template>
  <section id="news" class="block spacer p-top-xl">
    <template v-if="articles.data.length">
      <div class="wrapper">
        <div class="title">
          <h2>Latest news</h2>
        </div>
        <div class="row gutter-width-md with-pb-lg">
          <div v-for="item in articles.data" :key="item.id" class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div class="card card-post">
              <div class="card-top position-relative">
                <nuxt-link :title="item.title" :to="item.link">
                  <div class="img object-fit overflow-hidden">
                    <div class="object-fit-cover transform-scale-h">
                      <img class="card-top-img" :src="$imageUrl(item.image, 'sm')" :alt="item.title">
                    </div>
                  </div>
                </nuxt-link>
                <div class="card-category">
                  <button :title="item.category"  class="btn btn-secondary btn-sm">{{ item.category }}</button>
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-title">
                  <nuxt-link :title="item.title" :to="item.link">{{ item.title }}</nuxt-link>
                </h4>
                <p class="card-text">{{ item.short_description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>
<script>
import api from "~/mixins/api";
export default {
  name: 'News',
  mixins: [api],
  data() {
    return {
      articles:{
        data: []
      }
    }
  },
  async created(){
    this.articles = await this.get("public/get-news/0");
  },
}
</script>
