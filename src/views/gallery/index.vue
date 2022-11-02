<template>
    <div id="gallery-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div class="content">
                        <div class="clearfix">
                            <div class="row gutter-width-sm with-pb-sm gallery-items">
                                <div v-for="galleryItem in galleryItems" :key="galleryItem.id" class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <a @click="toggleSwipebox" :id="galleryItem.id" :title="galleryItem.title" class="gallery-item swipebox" :href="galleryItem.imgSrc" rel="gallery">
                                        <div class="img object-fit">
                                            <div class="object-fit-cover">
                                                <img :src="galleryItem.imgSrc" :alt="galleryItem.title">
                                            </div>
                                        </div>

                                        <div class="img-bg-color"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>

        <Swipebox />

        <Footer />
    </div>
</template>

<script>
    import Loading from '../../components/Loading/Loading';
    import Header from '../../blocks/header/Header';
    import Footer from '../../blocks/footer/Footer';

    import PageTitle from '../../blocks/gallery/PageTitle';
    import Swipebox from '../../blocks/gallery/Swipebox';

    import GalleryData from '../../data/gallery/galleryData.json';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Swipebox,
            Footer
        },
        data() {
            return {
                galleryItems: GalleryData.galleryData
            }
        },
        methods: {
            toggleSwipebox( e ) {
                e.preventDefault();
                
                let index = parseInt( e.currentTarget.id );

                this.$store.commit( 'setswipeboxIndex', index );
                this.$store.commit( 'toggleSwipebox' );
            },
        },
        mounted: function() {
            document.body.classList.add( 'page' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'page' );
        },
        metaInfo: {
            title: 'Gallery | Chop - Barber Shop Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
