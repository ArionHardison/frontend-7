<template>
    <div class="widget widget_tag_cloud">
        <h6 class="widget-title">Tags</h6>

        <div class="tagcloud">
            <router-link v-for="cloudItem in cloudItems" :key="cloudItem.id" :title="cloudItem.title" :to="cloudItem.link" class="tag-cloud-link">{{ cloudItem.title }}</router-link>
        </div>
    </div>
</template>

<script>
    import CloudData from '../../data/sidebar/cloudData.json';

    export default {
        name: 'RecentEntries',
        data() {
            return {
                cloudItems: CloudData.cloudData,
            }
        }
    }
</script>
