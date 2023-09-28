<template>
    <section id="partners" class="block spacer p-top-xl">
        <div class="wrapper">
            <div class="title">
                <h2>Our Partners</h2>
            </div>

            <div class="partners">
                <div class="partners-items">
                    <div v-for="partner in partners" :key="partner.id" class="partners-item">
                        <div class="partners-item-content">
                            <img :src="$imageUrl(partner.plLogo, 'sm')" :alt="partner.plLogoAlt_op">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'Partners',
        props: {
          partners: {
            type: Array,
            default: []
          }
        },
        mounted() {
            document.getElementById('partners').querySelector('.partners .partners-items').lastChild.classList.add('bg-primary');
        }
    }
</script>
