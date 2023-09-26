<template>
    <div class="widget widget_recent_comments">
        <h5 class="widget-title">Recent Comments</h5>

        <ul id="recentcomments">
            <li v-for="item in items" :key="item.id" class="recentcomments">
                <span class="comment-author-link">{{ item.author }}</span> on
                <router-link :title="item.author" :to="item.link">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import RecentComments from '~/data/sidebar/recentCommentsData.json';

    export default {
        name: 'RecentComments',
        data() {
            return {
                items: RecentComments.recentCommentsData
            }
        }
    }
</script>
