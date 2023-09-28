<template>
    <div class="description clearfix">
      <p>{{program.description}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Description',
        props: {
          program: {
            type: Object,
            default: ()=>{}
          }
        }
    }
</script>
