<template>
    <div @click="closeModals" class="links-item">
        <router-link  to="/" class="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto text-uppercase">home</router-link>
    </div>
</template>

<script>
    export default {
        name: 'LinksItem',
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
        }
    }
</script>
