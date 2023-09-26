<template>
    <div id="404-index">
        <Loading />

        <Header logoColor="dark" />

        <main id="main" class="site-main">
            <div id="page-content">
                <div class="wrapper">
                    <div class="content">
                        <div class="row gutter-width-md">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="title">
                                    <h1>404</h1>
                                </div>

                                <p class="text after">The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>

                                <div class="form">
                                    <SearchForm />
                                </div>

                                <BackToHome />
                            </div>

                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="img-404"></div>
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

    import SearchForm from '~/components/Forms/SearchForm';
    import BackToHome from '~/components/Button/BackToHome';

    export default {
        components: {
            Loading,
            Header,
            SearchForm,
            BackToHome,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'error404' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-stripes' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'error404' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-stripes' );
        },
        metaInfo: {
            title: '404 | Forch - Factory & Industrial Business Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>

<style>
    .img-404 {
        background-image: url('~@/assets/img/placeholder/19_img.jpg');
    }
</style>
