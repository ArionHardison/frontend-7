<template>
    <div id="services-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div class="content">
                        <div class="row gutter-width-sm with-pb-sm services-items">
                            <div v-for="item in servicesItems" :key="item.id"  class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <router-link :title="item.title" class="services-item" :to="item.link">
                                    <div class="services-item-content">
                                        <h3 class="services-item-t-head">{{ item.title }}</h3>
                                        <span class="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space text-uppercase">Read more</span>
                                    </div>

                                    <div class="img object-fit">
                                        <div class="object-fit-cover">
                                            <img :src="item.imgSrc" :alt="item.title">
                                        </div>
                                    </div>

                                    <div class="img-bg-color"></div>
                                </router-link>
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
    import Header from '../../blocks/header/Header';
    import Footer from '../../blocks/footer/Footer';

    import PageTitle from '../../blocks/services/PageTitle';

    import ServicesData from '../../data/services/servicesData.json';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Footer
        },
        data() {
            return {
                servicesItems: ServicesData.servicesData
            }
        },
        mounted: function() {
            document.body.classList.add( 'archive' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'archive' );
        },
        metaInfo: {
            title: 'Services | Chop - Barber Shop Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
