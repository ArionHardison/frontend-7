<template>
    <section id="facts" class="block">
        <div class="bg-secondary text-tertiary spacer p-top-xl p-bottom-xl overflow-hidden">
            <div class="wrapper">
                <div class="title">
                    <h2>Some Facts</h2>
                </div>

                <div class="row gutter-width-md facts-items">

                  <StatisticItem title="Published Programs" :number="stats.publishedPrograms"/>
                  <StatisticItem title="Experts" :number="stats.experts"/>
                  <StatisticItem title="Finished Programs" :number="stats.finishedPrograms"/>
                  <StatisticItem title="Users" :number="stats.users"/>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import FactsData from '~/data/index/factsData.json';
    import StatisticItem from "../ui/StatisticItem.vue";

    export default {
        name: 'Facts',
      components: {StatisticItem},
        props: {
          stats: {
            type: Object,
            default: ()=>{}
          }
        },
        data() {
            return {
                items: FactsData.factsData
            }
        }
    }
</script>
