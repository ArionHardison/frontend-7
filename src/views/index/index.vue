<template>
    <div id="home-index">
        <Loading />

        <Header />

        <main id="main" class="site-main content-no-spacing">
            <div class="content">
                <div class="clearfix">
                    <PageTitle />

                    <section id="contact-us" class="block">
                        <div class="bg-blue text-tertiary spacer p-top-xl p-bottom-xl">
                            <div class="wrapper text-center">
                                <div class="title">
                                    <h2 class="text-uppercase">You can contact us</h2>
                                </div>

                                <router-link to="/contacts" class="btn btn-outline-tertiary text-uppercase">Contact</router-link>
                            </div>
                        </div>
                    </section>

                    <Services />

                    <section id="about-us" class="block spacer p-top-xl">
                        <div class="wrapper">
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
                    </section>

                    <div id="img" class="block spacer p-top-xl">
                        <div class="img-no-wrap-1 img-gray">
                            <div class="img object-fit">
                                <div class="object-fit-cover">
                                    <img src="assets/img/placeholder/1920x700.jpg" alt="Beauty Salon">
                                </div>
                            </div>
                        </div>
                    </div>

                    <News />

                    <NewsLetter />
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

    import PageTitle from '../../blocks/index/PageTitle';
    import Services from '../../blocks/index/Services';
    import News from '../../blocks/index/News';
    import NewsLetter from '../../blocks/index/NewsLetter';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Services,
            News,
            NewsLetter,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'home' );
            document.body.classList.add( 'header-absolute-true' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'home' );
            document.body.classList.remove( 'header-absolute-true' );
        },
        metaInfo: {
            title: 'Home | Chop - Barber Shop Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>

<style scoped>
    #page-title {
        background-image: url('~@/assets/img/placeholder/1920x860.jpg');
    }
</style>
