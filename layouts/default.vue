<script>
export default {
  name: "Landing",
  head () {

    return {
      htmlAttrs: {
        style: `--primary-color:${this.$store.state.layout.items.primaryColor};`
      }
    }
  },
  computed: {
    maintenance(){
      return this.$store.state.maintenance;
    },
  },
};
</script>
<template>
  <div>
     <Loading />
    <template v-if="!maintenance || maintenance && this.$route.name==='maintenance'">
      <nuxt></nuxt>
    </template>
  </div>
</template>
