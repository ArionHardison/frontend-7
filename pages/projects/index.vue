<template>
    <div id="projects-index">
        <Loading />

        <Header logoColor='dark'/>

        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="content">
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

    import PageTitle from '~/components/blocks/projects/PageTitle';
    import Projects from '~/components/blocks/index/Projects';
    import Contacts from '~/components/blocks/index/Contacts';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
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
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-stripes' );
        },
        metaInfo: {
            title: 'Projects | Forch - Factory & Industrial Business Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
