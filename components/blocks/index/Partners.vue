<template>
    <section id="partners" class="block spacer p-top-xl">
        <div class="wrapper">
            <div class="title">
                <h2>Our Partners</h2>
            </div>

            <div class="partners">
                <div class="partners-items">
                    <div v-for="partner in partnersItems" :key="partner.id" class="partners-item">
                        <div class="partners-item-content">
                            <img :src="partner.imgSrc" alt="Logo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import PartnersData from '~/data/index/partnersData.json';

    export default {
        name: 'Partners',
        data() {
            return {
                partnersItems: PartnersData.partnersData
            }
        },
        mounted() {
            document.getElementById('partners').querySelector('.partners .partners-items').lastChild.classList.add('bg-primary');
        }
    }
</script>
