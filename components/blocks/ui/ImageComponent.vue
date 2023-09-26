<template>
  <img
    :src="$imageUrl(src, size, tenant)" :alt="alt" :class="classes"
  >
</template>

<script>
export default {
  name: "ImageComponent",
  props: {
    tenant: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "sm"
    },
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "Image",
    },
    classes: {
      type: String,
      default: "",
    }
  },
  computed: {
    tenantId(){
      return this.$store.state.tenant.id
    },
  }
}
</script>

<style scoped>

</style>
