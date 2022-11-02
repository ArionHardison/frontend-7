<template>
    <fragment>
        <footer id="footer" class="site-footer">
            <div class="wrapper">
                <div class="footer">
                    <div class="d-flex flex-column">
                        <div class="align-self-center">
                            <div class="copyright">
                                <p>© {{ new Date().getFullYear() }} Barber Shop Vue JS Template by <a href="https://www.adveits.com">Adveits</a> / <router-link class="secondary-semibold" to="/contacts">CONTACTS</router-link></p>
                            </div>
                        </div>

                        <div class="align-self-center">
                            <FooterMenuSecondary />
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

    import MenuModal from '../../components/Modal/MenuModal';
    import SearchModal from '../../components/Modal/SearchModal';
    import FooterMenuSecondary from './FooterMenuSecondary';

    export default {
        name: 'Footer',
        components: {
            Fragment,
            MenuModal,
            SearchModal,
            FooterMenuSecondary
        },
        data() {
            return {
                homePage: true
            }
        },
        methods: {
            selectModalMenu: function() {
                if ( this.currentPage === '/') {
                    this.homePage = true;
                } else {
                    this.homePage = false;
                }
            }
        },
        mounted() {
            this.selectModalMenu();
        }, 
        computed: {
            currentPage() {
                return this.$route.path;
            }
        }
    }
</script>
