<template>
    <section id="facts" class="block">
        <div class="bg-secondary text-tertiary spacer p-top-xl p-bottom-xl overflow-hidden">
            <div class="wrapper">
                <div class="title">
                    <h2>Some Facts</h2>
                </div>

                <div class="row gutter-width-md facts-items">
                    <div v-for="item in items" :key="item.id" class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div class="facts-item">
                            <div class="facts-item-content">
                                <div class="facts-item-left">
                                    <div class="facts-item-text">
                                        <p>{{ new Date().getFullYear() }}</p>
                                    </div>
                                </div>

                                <div class="facts-item-right">
                                    <h3 class="facts-item-title">{{ item.count }}</h3>

                                    <p class="facts-item-text-1">{{ item.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import FactsData from '~/data/index/factsData.json';

    export default {
        name: 'Facts',
        data() {
            return {
                items: FactsData.factsData
            }
        }
    }
</script>
