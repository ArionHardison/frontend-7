<template>
    <div id="404-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-lg">
                <div class="wrapper">
                    <div class="content">
                        <p class="text after">The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>

                        <div class="form">
                            <SearchForm />
                        </div>

                        <BackToHome />
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

    import PageTitle from '../../blocks/404/PageTitle';
    import SearchForm from '../../components/Forms/SearchForm';
    import BackToHome from '../../components/Button/BackToHome';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            SearchForm,
            BackToHome,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'error404' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'error404' );
        },
        metaInfo: {
            title: '404 | Chop - Barber Shop Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
