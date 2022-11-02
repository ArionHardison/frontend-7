<template>
    <div id="about-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div class="content">
                        <div class="clearfix">
                            <div id="about-us-img" class="block">
                                <div class="about-img">
                                    <div class="img object-fit">
                                        <div class="object-fit-cover">
                                            <img src="assets/img/placeholder/1600x700.jpg" alt="About us">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="about-us" class="block spacer p-top-xl">
                                <div class="row gutter-width-sm">
                                    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                        <div class="title">
                                            <h2 class="text-uppercase">We are born in United States, and We work in a way that you would like to entrust the care of your hair and beard to us.</h2>
                                        </div>
                                    </div>
                                </div>

                                <div class="row gutter-width-sm justify-content-end">
                                    <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                                        <div class="description">
                                            <p>It is saying that it is better to see once than to hear a thousand times. We are a professional team of hairdressers and bearders who adore their work and lack ambition. We are proud that the majority of men who have visited us once usually decide to return.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <OurTeam />

                            <Testimonials />

                            <Clients />
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

    import PageTitle from '../../blocks/about/PageTitle';
    import OurTeam from '../../blocks/about/OurTeam';
    import Testimonials from '../../blocks/about/Testimonials';
    import Clients from '../../blocks/about/Clients';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            OurTeam,
            Testimonials,
            Clients,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'page' );
            document.body.classList.add( 'overflow-x' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'page' );
            document.body.classList.remove( 'overflow-x' );
        },
        metaInfo: {
            title: 'About | Chop - Barber Shop Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
