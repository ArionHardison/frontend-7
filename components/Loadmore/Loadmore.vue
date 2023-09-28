<template>
  <div class="loadmore text-center mt-5 ">
    <button @click="loadMore" title="Load More" class="btn btn-primary border-0 transform-scale-h mb-3">Load More</button>
  </div>
</template>

<script>
export default {
  name: 'Loadmore',
  methods: {
    loadMore(){
      this.$emit("load");
    }
  }
}
</script>
