<template>
    <div id="ui-index">
        <Loading />

        <Header />

        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div class="content">
                        <div class="row gutter-width-sm">
                            <div class="col-md-12 col-lg-8 col-xl-8">
                                <p>Chop project is created using Bootstrap 4 Framework and all of the examples below are based on it. Also, Ency includes custom classes, plugins and scripts which are also based on our experience of Bootstrap 4 Framework.</p>

                                <Content />

                                <Components />

                                <Utilities />
                            </div>

                            <div class="col-md-12 col-lg-4 col-xl-4"  id="aside-sticky">
                                <Sidebar />
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
    import Header from '../../blocks/ui/Header';
    import Footer from '../../blocks/ui/Footer';

    import PageTitle from '../../blocks/ui/PageTitle';
    import Content from '../../blocks/ui/Content';
    import Components from '../../blocks/ui/Components';
    import Utilities from '../../blocks/ui/Utilities';
    import Sidebar from '../../blocks/ui/Sidebar';

    import Prism from 'vue-prismjs';
    import 'prismjs/themes/prism.css';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Content,
            Components,
            Utilities,
            Sidebar,
            Footer,
            Prism
        },
        mounted: function() {
            document.body.classList.add( 'page' );
            document.body.classList.add( 'ui' );
        },
        beforeDestroy() {
            document.body.classList.remove( '"page' );
            document.body.classList.remove( 'ui' );
        },
        metaInfo: {
            title: 'UI | Chop - Barber Shop Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>

<style>
    #ui-index  *:focus {
        outline: none;
        box-shadow: none;
    }
</style>
