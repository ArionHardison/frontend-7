<template>
    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
        <div class="adv-slider-services">
            <div class="adv-swiper-container">
                <div class="adv-swiper-wrapper services-items">
                    <div v-for="item in items" :key="item.id" :title="item.title" class="adv-swiper-slide services-item">
                        <div class="services-item-content">
                            <div class="services-item-number">{{ item.number }}</div>

                            <div class="services-item-t-head">
                                <router-link :to="item.link">
                                    <h5>{{ item.title }}</h5>
                                </router-link>
                            </div>

                            <div class="services-item-body">
                                <p>{{ item.description }}</p>
                            </div>

                            <div class="service-item-footer">
                                <router-link class="btn btn-link p-0 border-0 min-w-auto" :to="item.link">
                                    <i class="forch-icon-arrow-right"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="adv-swiper-control">
                    <div class="adv-3-swiper-button-prev">Previous</div>

                    <div class="adv-3-swiper-button-next">Next</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';

    import ServicesData from '~/data/services/servicesData.json';

    export default {
        name: 'Services',
        data() {
            return {
                items: ServicesData.servicesData
            }
        },
        mounted() {
            const swiper = new Swiper( '.adv-swiper-container', {
                // ADV swiper
                noSwipingClass: 'adv-swiper-no-swiping',
                containerModifierClass: 'adv-swiper-container-',
                slideClass: 'adv-swiper-slide',
                slideBlankClass: 'adv-swiper-slide-invisible-blank',
                slideActiveClass: 'adv-swiper-slide-active',
                slideDuplicateActiveClass: 'adv-swiper-slide-duplicate-active',
                slideVisibleClass: 'adv-swiper-slide-visible',
                slideDuplicateClass: 'adv-swiper-slide-duplicate',
                slideNextClass: 'adv-swiper-slide-next',
                slideDuplicateNextClass: 'adv-swiper-slide-duplicate-next',
                slidePrevClass: 'adv-swiper-slide-prev',
                slideDuplicatePrevClass: 'adv-swiper-slide-duplicate-prev',
                wrapperClass: 'adv-swiper-wrapper',
                observer: true,
                observeParents: true,
                parallax:true,
                navigation: {
                    disabledClass: 'adv-swiper-button-disabled',
                    hiddenClass: 'adv-swiper-button-hidden',
                    lockClass: 'adv-swiper-button-lock',
                    nextEl: '.adv-3-swiper-button-next',
                    prevEl: '.adv-3-swiper-button-prev'
                },
                spaceBetween: 30,
                slidesPerView: 1,
                breakpoints: {
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }
            } );
        }
    }
</script>
