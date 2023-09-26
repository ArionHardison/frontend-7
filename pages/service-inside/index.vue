<template>
    <div id="service-inside-index">
        <Loading />

        <Header logoColor='dark' />

        <main id="main" class="site-main">
            <PageTitle />

            <div id="img" class="block spacer p-top-xl">
                <div class="wrapper">
                    <div class="row gutter-width-md with-pb-lg">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div class="img-size-2">
                                <div class="img object-fit">
                                    <div class="object-fit-cover">
                                        <img src="assets/img/placeholder/11_img.jpg" alt="Industrial equipment">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div class="img-size-2">
                                <div class="img object-fit">
                                    <div class="object-fit-cover">
                                        <img src="assets/img/placeholder/12_img.jpg" alt="Industrial equipment">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="text" class="block spacer p-top-xl">
                <div class="wrapper">
                    <div class="row gutter-width-md with-pb-lg">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div class="description">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div class="description">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="text-2" class="block spacer p-top-xl">
                <div class="wrapper">
                    <div class="row gutter-width-lg">
                        <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                            <div class="description">
                                <h2>When it comes to steel work and Engineering there is simply no one better</h2>
                            </div>
                        </div>
                    </div>

                    <div class="row gutter-width-lg with-pb-lg spacer p-top-lg justify-content-end">
                        <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                            <div class="description max-width-1 text-secondary">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="contacts" class="block spacer p-top-xl">
                <div class="wrapper">
                    <div class="title">
                        <h2>Contacts</h2>
                    </div>

                    <Contacts />
                </div>
            </section>
        </main>

        <Footer />
    </div>
</template>

<script>
    import Loading from '~/components/Loading/Loading';
    import Header from '~/components/blocks/header/Header';
    import Footer from '~/components/blocks/footer/Footer';

    import PageTitle from '~/components/blocks/service-inside/PageTitle';
    import Contacts from '~/components/blocks/index/Contacts';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Contacts,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'single' );
            document.body.classList.add( 'single-adveits_services' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-stripes' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'single' );
            document.body.classList.remove( 'single-adveits_services' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-stripes' );
        },
        metaInfo: {
            title: 'Service inside | Forch - Factory & Industrial Business Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
