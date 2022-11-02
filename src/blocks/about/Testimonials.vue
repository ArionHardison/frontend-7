<template>
    <div id="testimonials" class="block spacer p-top-xl">
        <div class="title">
            <h2 class="hr text-uppercase">Testimonials</h2>
        </div>

        <div class="adv-slider-reviews">
            <div class="adv-slider-reviews-img">
                <img src="assets/img/demo/32_img.png" alt="Icon">
            </div>

            <div class="adv-swiper-container reviews-text">
                <div class="adv-swiper-wrapper reviews-text-items">
                    <div v-for="testimonialsItem in testimonialsItems" :key="testimonialsItem.id" class="adv-swiper-slide reviews-text-item">
                        <div class="reviews-text-item-content">
                            <h3>{{ testimonialsItem.text }}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex align-items-center thumbs">
                <div class="adv-swiper-container reviews-thumbs">
                    <div class="adv-swiper-wrapper reviews-thumbs-items">
                        <div @click="selectReview" v-for="testimonialsItem in testimonialsItems" :key="testimonialsItem.id" class="adv-swiper-slide reviews-thumbs-item" :data-reviews-name="testimonialsItem.author" :data-reviews-position="testimonialsItem.position">
                            <img :src="testimonialsItem.imgSrc" :alt="testimonialsItem.author">
                        </div>
                    </div>
                </div>

                <div class="reviews-results">
                    <h6 class="reviews-name" id="reviews-name">{{ this.name }}</h6>
                    <p class="reviews-positions" id="reviews-positions">{{ this.position }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';

    import TestimonialsData from '../../data/about/testimonialsData.json';

    export default {
        name: 'Testimonials',
        data() {
            return {
                testimonialsItems: TestimonialsData.testimonialsData,
                name: 'Tommy Henders',
                position: 'CEO at Company'
            }
        },
        computed: {
            currentPage() {
                return this.$route.path;
            }
        },
        methods: {
            selectReview( e ) {
                this.name = e.currentTarget.getAttribute( 'data-reviews-name' );
                this.position = e.currentTarget.getAttribute( 'data-reviews-position' );
                return false;
            }
        },
        mounted() {;
            var swiperAdvReviewsThumbs = new Swiper( '.adv-slider-reviews .adv-swiper-container.reviews-thumbs', {
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
                slidesPerView: 3,
                spaceBetween: 0,
                loop: false,
                freeMode: false
            } );

            new Swiper( '.adv-slider-reviews .adv-swiper-container.reviews-text', {
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
                thumbs: {
                    slideThumbActiveClass: 'adv-swiper-slide-thumb-active',
                    thumbsContainerClass: 'adv-swiper-container-thumbs',
                    swiper: swiperAdvReviewsThumbs
                },
                spaceBetween: 0,
                allowTouchMove: false
            } );
        }
    };
</script>
