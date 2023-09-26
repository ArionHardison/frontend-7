<template>
    <div class="widget widget_recent_entries">
        <h5 class="widget-title">Recent posts</h5>

        <ul class="list-unstyled items">
            <li v-for="item in items" :key="item.id" class="item">
                <div class="row gutter-width-xs">
                    <div class="col-3">
                        <router-link :to="item.link">
                            <div class="img object-fit overflow-hidden">
                                <div class="object-fit-cover transform-scale-h">
                                    <img :src="item.imgSrc" :alt="item.title">
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <div class="col-9 align-self-center">
                        <p class="item-t-head"><router-link :title="item.title" :to="item.link">{{ item.title }}</router-link></p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import RecentEntriesData from '~/data/sidebar/recentEntriesData.json';

    export default {
        name: 'RecentEntries',
        data() {
            return {
                items: RecentEntriesData.recentEntriesData
            }
        }
    }
</script>
