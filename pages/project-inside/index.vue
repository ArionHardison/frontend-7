<template>
    <div id="project-inside-index">
        <Loading />

        <Header logoColor='dark'/>

        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="content">
                    <div id="img" class="block">
                        <div class="img-size-1">
                            <div class="img object-fit">
                                <div class="object-fit-cover">
                                    <img src="assets/img/placeholder/20_img.jpg" alt="Tools">
                                </div>
                            </div>
                        </div>
                    </div>

                    <section id="about-the-project" class="block spacer p-top-xl">
                        <div class="wrapper">
                            <div class="title">
                                <h2>About the project</h2>
                            </div>

                            <div class="row gutter-width-md with-pb-md">
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div class="description text-secondary">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                    </div>
                                </div>

                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class="description">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div id="img-2" class="block spacer p-top-xl">
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

    import PageTitle from '~/components/blocks/project-inside/PageTitle';
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
            document.body.classList.add( 'single-adveits_projects' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-stripes' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'single' );
            document.body.classList.remove( 'single-adveits_projects' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-stripes' );
        },
        metaInfo: {
            title: 'Project inside | Forch - Factory & Industrial Business Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
