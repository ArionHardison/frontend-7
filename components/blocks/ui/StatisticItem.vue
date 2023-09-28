<template>
  <div  class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
    <div class="facts-item">
      <div class="facts-item-content">
        <div class="facts-item-left">
          <div class="facts-item-text">
            <p>{{ new Date().getFullYear() }}</p>
          </div>
        </div>

        <div class="facts-item-right">
          <h3 class="facts-item-title">{{number}}</h3>

          <p class="facts-item-text-1">{{title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticItem',
  props: {
    title: {
      type: String,
      default: "Demo"
    },
    number: {
      type: Number,
      default: 0
    }
  }
}
</script>
