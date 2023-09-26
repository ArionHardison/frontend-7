<template>
    <aside id="aside" class="widget-area">
        <div class="widget widget_search">
            <SearchForm />
        </div>

        <Categories />

        <RecentEntries />

        <RecentComments />

        <TagCloud />
    </aside>
</template>

<script>
    import SearchForm from '~/components/Forms/SearchForm';
    import Categories from '~/components/blocks/sidebar/Categories';
    import RecentEntries from '~/components/blocks/sidebar/RecentEntries';
    import RecentComments from '~/components/blocks/sidebar/RecentComments';
    import TagCloud from '~/components/blocks/sidebar/TagCloud';

    export default {
        name: 'Sidebar',
        components: {
            SearchForm,
            Categories,
            RecentEntries,
            RecentComments,
            TagCloud
        }
    }
</script>
