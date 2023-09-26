<template>
    <div id="contacts-index">
        <Loading />

        <Header logoColor="dark" />

        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="content">
                    <MapBox />

                    <div id="contacts" class="block spacer p-top-xl">
                        <div class="wrapper">
                            <Contacts />
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

    import PageTitle from '~/components/blocks/contacts/PageTitle';
    import Contacts from '~/components/blocks/index/Contacts';
    import MapBox from '~/components/blocks/map/MapBox';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            MapBox,
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
            title: 'Contacts | Forch - Factory & Industrial Business Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
