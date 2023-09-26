<template>
    <div class="loadmore spacer m-top-lg">
        <a @click="scrollToSection('#news-index')" title="Load More" class="btn btn-primary" href="#">Load More</a>
    </div>
</template>

<script>
    export default {
        name: 'Loadmore'
    }
</script>
