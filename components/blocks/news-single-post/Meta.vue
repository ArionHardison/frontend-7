<template>
    <div class="meta">
        <p>
            <span><router-link :to="`/programs/${$slug(program.category_id, program.category)}`">{{program.category}}</router-link></span>
            <span>-</span>
            <span>{{program.subCategory}}</span>

        </p>
    </div>
</template>

<script>
    export default {
        name: 'Meta',
        props: {
          program: {
            type: Object,
            default: ()=>{}
          }
        }
    }
</script>
