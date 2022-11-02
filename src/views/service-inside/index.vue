<template>
    <div id="services-inside-index">
        <Loading />

        <Header />

        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div class="content">
                        <div id="single">
                            <div id="single-content">
                                <div id="img" class="block">
                                    <div class="img-no-wrap-1">
                                        <div class="img object-fit">
                                            <div class="object-fit-cover">
                                                <img src="assets/img/placeholder/1600x700.jpg" alt="Shave">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="description" class="block spacer p-top-xl">
                                    <div class="description">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                                    </div>
                                </div>

                                <div id="price-list" class="block spacer p-top-xl">
                                    <div class="title">
                                        <h2 class="hr text-uppercase">Price list</h2>
                                    </div>

                                    <div class="price-list">
                                        <div class="price-list-items">
                                            <div class="price-list-item">
                                                <div class="price-list-item-title">
                                                    <h3>Special treatments against hair thinning</h3>
                                                </div>

                                                <ul class="price-list-item-list-group list-group">
                                                    <li v-for="item in priceList1" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
                                                        <span class="list-group-title">{{ item.title }}</span>
                                                        <span class="list-group-price">{{ item.price }}</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="price-list-item">
                                                <div class="price-list-item-title">
                                                    <h3>Hair care</h3>
                                                </div>

                                                <ul class="price-list-item-list-group list-group">
                                                    <li v-for="item in priceList2" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
                                                        <span class="list-group-title">{{ item.title }}</span>
                                                        <span class="list-group-price">{{ item.price }}</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="price-list-item">
                                                <div class="price-list-item-title">
                                                    <h3>Shave</h3>
                                                </div>

                                                <ul class="price-list-item-list-group list-group">
                                                    <li v-for="item in priceList3" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
                                                        <span class="list-group-title">{{ item.title }}</span>
                                                        <span class="list-group-price">{{ item.price }}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="back-to-services" class="block spacer p-top-xl">
                                    <div class="text-center">
                                        <router-link to="/services" class="btn btn-outline-secondary text-uppercase">Back to Services</router-link>
                                    </div>
                                </div>
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

    import PageTitle from '../../blocks/service-inside/PageTitle';

    import PriceListData1 from '../../data/service-inside/priceListData1.json';
    import PriceListData2 from '../../data/service-inside/priceListData2.json';
    import PriceListData3 from '../../data/service-inside/priceListData3.json';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Footer
        },
        data() {
            return {
                priceList1: PriceListData1.priceListData1,
                priceList2: PriceListData2.priceListData2,
                priceList3: PriceListData3.priceListData3
            }
        },
        mounted: function() {
            document.body.classList.add( 'single' );
            document.body.classList.add( 'single-adveits_services' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'single' );
            document.body.classList.remove( 'single-adveits_services' );
        },
        metaInfo: {
            title: 'Service inside | Chop - Barber Shop Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
