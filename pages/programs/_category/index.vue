<template>
  <Programs/>
</template>

<script>
import Programs from "@/components/pages/Programs";
export default {
  components: {
    Programs
  },
  middleware: ['maintenance'],
  name: "index"
}
</script>

<style scoped>

</style>
