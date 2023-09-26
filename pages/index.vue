<template>
    <div id="home-index">
        <Loading />

        <Header logoColor='dark' />

        <main id="main" class="site-main">
            <div class="content">
                <div class="clearfix">
                    <PageTitle />

                    <div id="img" class="block spacer p-top-xl">
                        <div class="img-size-1">
                            <div class="img object-fit">
                                <div class="object-fit-cover">
                                    <img src="assets/img/placeholder/01_img.jpg" alt="Tools">
                                </div>
                            </div>
                        </div>
                    </div>

                    <AboutUs />

                    <Partners />

                    <section id="services" class="block spacer p-top-xl">
                        <div class="bg-secondary text-tertiary spacer p-top-xl p-bottom-xl">
                            <div class="wrapper">
                                <div class="row gutter-width-md with-pb-lg">
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                        <div class="title">
                                            <h2>Services</h2>
                                        </div>

                                        <div class="description">
                                            <p>Mic offers high quality services in various fields.</p>
                                        </div>
                                    </div>

                                    <Services />
                                </div>
                            </div>
                        </div>
                    </section>

                    <Projects />

                    <Facts />

                    <section>
                        <div id="contacts" class="block spacer p-top-xl">
                            <div class="wrapper">
                                <div class="title">
                                    <h2>Contacts</h2>
                                </div>

                                <Contacts />
                            </div>
                        </div>
                    </section>

                    <News />
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

    import PageTitle from '~/components/blocks/index/PageTitle';
    import AboutUs from '~/components/blocks/index/About-us';
    import Services from '~/components/blocks/index/Services';
    import Projects from '~/components/blocks/index/Projects';
    import Facts from '~/components/blocks/index/Facts';
    import Partners from '~/components/blocks/index/Partners';
    import Contacts from '~/components/blocks/index/Contacts';
    import News from '~/components/blocks/index/News';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            AboutUs,
            Services,
            Projects,
            Facts,
            Partners,
            Contacts,
            News,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'home' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-stripes' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'home' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-stripes' );
        },
        metaInfo: {
            title: 'Home | Forch - Factory & Industrial Business Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
