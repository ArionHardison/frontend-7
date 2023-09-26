<template>
    <div id="services-index">
        <Loading />

        <Header logoColor='dark' />

        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="content">
                    <div id="services" class="block">
                        <div class="bg-secondary text-tertiary spacer p-top-xl p-bottom-xl">
                            <div class="wrapper">
                                <div class="row gutter-width-md with-pb-lg">
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                        <div class="title">
                                            <h2>We offer</h2>
                                        </div>

                                        <div class="description">
                                            <p>Mic offers high quality services in various fields.</p>
                                        </div>
                                    </div>

                                    <Services />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Projects />

                    <section id="contacts" class="block spacer p-top-xl">
                        <div class="wrapper">
                            <div class="title">
                                <h2>Contacts</h2>
                            </div>

                            <Contacts />
                        </div>
                    </section>
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

    import PageTitle from '~/components/blocks/services/PageTitle';
    import Services from '~/components/blocks/index/Services';
    import Projects from '~/components/blocks/index/Projects';
    import Contacts from '~/components/blocks/index/Contacts';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Services,
            Projects,
            Contacts,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'page' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-stripes' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'page' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-stripes' );
        },
        metaInfo: {
            title: 'Services | Forch - Factory & Industrial Business Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
