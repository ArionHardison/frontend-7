<template>
    <div class="widget widget_tag_cloud">
        <h5 class="widget-title">Tags</h5>

        <div class="tagcloud">
            <router-link v-for="cloudItem in cloudItems" :title="cloudItem.title" :key="cloudItem.id" :to="cloudItem.link" class="tag-cloud-link">{{ cloudItem.title }}</router-link>
        </div>
    </div>
</template>

<script>
    import CloudData from '~/data/sidebar/cloudData.json';

    export default {
        name: 'TagCloud',
        data() {
            return {
                cloudItems: CloudData.cloudData
            }
        }
    }
</script>
