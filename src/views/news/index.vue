<template>
    <div id="news-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div class="content">
                        <div id="blog">
                            <div class="row gutter-width-sm">
                                <div class="col-xl-8 col-lg-8 col-md-12">
                                    <Blog />

                                    <LoadMore />
                                </div>

                                <div class="col-xl-4 col-lg-4 col-md-12">
                                    <Sidebar />
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
    import Loading from '../../components/Loading/Loading';
    import Header from '../../blocks/header/Header';
    import Footer from '../../blocks/footer/Footer';

    import PageTitle from '../../blocks/news/PageTitle';
    import Sidebar from '../../blocks/news/Sidebar';
    import Blog from '../../blocks/news/Blog';
    import LoadMore from '../../components/Loadmore/Loadmore';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Sidebar,
            Blog,
            LoadMore,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'blog' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'blog' );
        },
        metaInfo: {
            title: 'Blog | Chop - Barber Shop Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
