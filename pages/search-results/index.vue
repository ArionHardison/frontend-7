<template>
    <div id="search-results-index">
        <Loading />

        <Header logoColor='dark'/>

        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div class="content">
                        <div class="row gutter-width-md with-pb-lg">
                            <div v-for="item in items" :key="item.id" class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div class="card card-post">
                                    <div class="card-body p-0">
                                        <h4 class="card-title">
                                            <router-link :title="item.title" :to="item.link">{{ item.title }}</router-link>
                                        </h4>

                                        <div class="card-category">
                                            <router-link :title="item.category" :to="item.categoryLink" class="btn btn-secondary btn-sm">{{ item.category }}</router-link>
                                        </div>

                                        <p class="card-text">{{ item.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
    </div>
</template>

<script>
    import Loading from '~/components/Loading/Loading';
    import Header from '~/components/blocks/header/Header';
    import Footer from '~/components/blocks/footer/Footer';

    import PageTitle from '~/components/blocks/search-results/PageTitle';
    import SearchItems from '~/data/search-results/searchItems.json';

    export default {
        data() {
            return {
                items: SearchItems.searchItems
            };
        },
        components: {
            Loading,
            Header,
            PageTitle,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'search-results' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-stripes' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'search-results' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-stripes' );
        },
        metaInfo: {
            title: 'Search results | Forch - Factory & Industrial Business Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
