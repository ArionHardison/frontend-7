<template>
    <div class="row gutter-width-md with-pb-lg">
        <div v-for="item in items" :key="item.id" class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card card-post">
                <div class="card-top position-relative">
                    <router-link :title="item.title" :to="item.link">
                        <div class="img object-fit overflow-hidden">
                            <div class="object-fit-cover transform-scale-h">
                                <img class="card-top-img" :src="item.imgSrc" :alt="item.title">
                            </div>
                        </div>
                    </router-link>

                    <div class="card-category">
                        <router-link :title="item.category" :to="item.categoryLink" class="btn btn-secondary btn-sm">{{ item.category }}</router-link>
                    </div>
                </div>

                <div class="card-body">
                    <h4 class="card-title">
                        <router-link :title="item.title" :to="item.link">{{ item.title }}</router-link>
                    </h4>

                    <p class="card-text">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NewsData from '~/data/news/newsData.json';

    export default {
        name: 'Blog',
        data() {
            return {
                items: NewsData.newsData
            }
        }
    };
</script>
