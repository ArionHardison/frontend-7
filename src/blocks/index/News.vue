<template>
    <section id="news" class="block spacer p-top-xl">
        <div class="wrapper">
            <div class="title">
                <h2 class="hr text-uppercase">News</h2>
            </div>

            <div class="row gutter-width-sm with-pb-lg">
                <div v-for="item in newsItems" :key="item.id" class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div class="card card-post">
                        <div class="card-top position-relative">
                            <router-link :title="item.title" :to="item.link">
                                <div class="img object-fit overflow-hidden">
                                    <div class="object-fit-cover transform-scale-h">
                                        <img class="card-top-img" :src="item.imgSrc" :alt="item.title">
                                    </div>
                                </div>
                            </router-link>
                        </div>

                        <div class="card-body">
                            <div class="card-meta">
                                <p>
                                    <span><router-link class="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto text-uppercase link-no-space" :to="item.categoryLink">{{ item.category }}</router-link></span>
                                </p>
                            </div>

                            <h4 class="card-title">
                                <router-link :title="item.cardTitle" :to="item.link">{{ item.cardTitle }}</router-link>
                            </h4>

                            <p class="card-text">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import NewsData from '../../data/news/newsData.json';

    export default {
        name: 'News',
        data() {
            return {
                newsItems: NewsData.newsData.slice(0, 3)
            }
        },
        mounted() {
            const parent = document.querySelector( '#news .row' );
            const thirdChild = parent.lastChild;

            thirdChild.classList.remove('col-md-6');
            thirdChild.classList.remove('col-sm-6');

            thirdChild.classList.add('d-lg-block');
            thirdChild.classList.add('d-md-none');
            thirdChild.classList.add('d-sm-none');
        }
    }
</script>
