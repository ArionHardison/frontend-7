<template>
    <fragment>
        <footer id="footer" class="site-footer">
            <div class="wrapper">
                <div class="d-flex flex-column flex-md-row flex-lg-row flex-xl-row align-items-center justify-content-between">
                    <div v-if="currentPage !== '/404'" class="logo logo-primary">
                        <img src="assets/img/logo/logo-dark.svg" alt="Logo">
                    </div>

                    <div class="footer">
                        <div class="align-self-center">
                            <div class="copyright">
                                <p>© {{ new Date().getFullYear() }} Factrory & Industrial Business Vue JS Template by <a href="https://www.adveits.com">Adveits</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div id="modals">
            <MenuModal />

            <SearchModal />
        </div>
    </fragment>
</template>

<script>
    import { Fragment } from 'vue-fragment';

    import MenuModal from '~/components/Modal/MenuModal';
    import SearchModal from '~/components/Modal/SearchModal';

    export default {
        name: 'Footer',
        components: {
            Fragment,
            MenuModal,
            SearchModal,
        },
        computed: {
            currentPage() {
                return this.$route.path;
            }
        }
    }
</script>
