<template>
    <div class="header-logo">
        <router-link :class="'logo logo-'+ logoClass+' transform-scale-h'" title="Logo" to="/">
            <img @click="closeModals" :src="'assets/img/logo/logo-'+ logo +'.svg'" alt="Logo">
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'HeaderLogo',
        props: ['logoColor'],
        data() {
            return {
                logo: this.logoColor,
                logoClass: this.logoClass
            }
        },
        computed: {
            currentPage() {
                return this.$route.path;
            },
            showMenuModal () {
                return this.$store.state.showMenuModal
            },
            showSearchModal () {
                return this.$store.state.showSearchModal
            }
        },
        methods: {
            closeModals: function() {
                if (this.currentPage === '/') {
                    if (this.showSearchModal) {
                        const searchModal = document.getElementById('search-modal');
                        searchModal.classList.remove( 'show' );
                        setTimeout(() => this.$store.commit( 'closeSearchModal' ), 150 );
                    }
                    if (this.showMenuModal) {
                        this.$store.commit( 'closeMenuModal' );
                        
                    }
                } else {
                    return;
                }
            }
        },
        mounted() {
            if ( this.currentPage === '/' ) {
                this.logo = 'light';
            } else {
                this.logo = this.logoColor
            }

            if ( this.logo === 'light' ) {
                this.logoClass = 'secondary';
            } else {
                this.logoClass = 'primary';
            }
        }
    }
</script>
