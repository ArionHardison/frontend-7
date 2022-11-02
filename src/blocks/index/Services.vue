<template>
    <section id="services" class="block">
        <div class="adv-slider-services">
            <div class="adv-swiper-container">
                <div class="adv-swiper-wrapper services-items clearfix">
                    <router-link v-for="serviceItem in serviceItems" :key="serviceItem.id" :title="serviceItem.title" class="adv-swiper-slide services-item" :to="serviceItem.link">
                        <div class="services-item-content">
                            <h3 class="services-item-t-head">{{ serviceItem.title }}</h3>
                            <span class="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space text-uppercase">Read more</span>
                        </div>

                        <div class="img object-fit">
                            <div class="object-fit-cover">
                                <img :src="serviceItem.imgSrc" :alt="serviceItem.title">
                            </div>
                        </div>

                        <div class="img-bg-color"></div>
                    </router-link>
                </div>

                <div class="adv-2-swiper-button-prev">
                    <span>
                        <span class="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto">Previous</span>
                    </span>
                </div>

                <div class="adv-2-swiper-button-next">
                        <span>
                            <span class="btn btn-lg btn-after-dot btn-link border-0 p-0 min-w-auto">Next</span>
                        </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Swiper from 'swiper';

    import ServicesData from '../../data/index/servicesData.json';

    export default {
        name: 'Services',
        data() {
            return {
                serviceItems: ServicesData.servicesData
            }
        },
        mounted() {
            const swiperAdvServices = new Swiper( '.adv-slider-services .adv-swiper-container', {
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
                navigation: {
                    disabledClass: 'adv-swiper-button-disabled',
                    hiddenClass: 'adv-swiper-button-hidden',
                    lockClass: 'adv-swiper-button-lock',
                    nextEl: '.adv-2-swiper-button-next',
                    prevEl: '.adv-2-swiper-button-prev'
                },
                spaceBetween: 0,
                slidesPerView: 'auto'
            } );
        }
    }
</script>
