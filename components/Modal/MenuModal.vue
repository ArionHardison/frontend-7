<template>
    <fragment>
        <transition @enter="startTransitionModal" @after-enter="endTransitionModal" @before-leave="endTransitionModalLeave" @after-leave="startTransitionModalLeave">
            <div v-show="showMenuModal" ref="modal" class="modal fade" id="menu-modal" tabindex="-1" role="dialog" aria-labelledby="menu-modal" aria-hidden="true">
                <div class="modal-dialog modal-full" role="document">
                    <div class="wrapper">
                        <div class="modal-content">
                            <div class="modal-header modal-header-top">
                                <div class="header-content d-flex justify-content-between w-100">
                                    <div class="header-left align-self-center">
                                        <Logo logoColor="light" />
                                    </div>

                                    <div class="header-right d-flex justify-content-end">
                                        <div class="d-flex align-items-center">
                                            <div class="menu-close-toggle">
                                                <button @click="toggleMenuModal" type="button" class="close btn btn-lg btn-link border-0 p-0 min-w-auto" data-dismiss="modal" aria-label="Close"><i class="forch-icon-close"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="modal-body modal-body-centered">
                                <SearchModalButton />

                                <div class="animated fadeinright d-flex justify-content-end w-100">
                                    <ModalMenuPrimary />
                                </div>
                            </div>

                            <div class="modal-footer">
                                <nav class="menu-secondary">
                                    <ul class="nav">
                                        <li v-for="item in items" :key="item.id" class="nav-item">
                                            <a :title="item.title" :href="item.link"><i :class="item.icon"></i></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <div class="modal-backdrop fade d-none" ref="backdrop"></div>
    </fragment>
</template>

<script>
    import { Fragment } from 'vue-fragment'
    import { mapMutations } from 'vuex';

    import SearchModalButton from '~/components/Button/SearchModalButton';
    import Logo from '~/components/blocks/header/HeaderLogo';
    import ModalMenuPrimary from '~/components/blocks/General/ModalMenuPrimary';

    import FooterData from '~/data/footer/footerData.json';

    export default {
        name: 'Menu-Modal',
        components: {
            SearchModalButton,
            Logo,
            ModalMenuPrimary,
            Fragment
        },
        data() {
            return {
                items: FooterData.footerData,
            }
        },
        computed: {
            showMenuModal () {
                return this.$store.state.showMenuModal
            }
        },
        methods: {
            ...mapMutations([
                'toggleMenuModal'
            ]),
            startTransitionModal() {
                if ( ! this.$refs.backdrop.classList.contains( 'd-block' ) ) {
                    this.$refs.backdrop.classList.add( 'd-block' );
                }

                if ( ! this.$refs.modal.classList.contains( 'd-block' ) ) {
                    this.$refs.modal.classList.add( 'd-block' );
                }
            },
            startTransitionModalLeave() {
                if ( this.$refs.backdrop.classList.contains( 'd-block' ) ) {
                    this.$refs.backdrop.classList.remove( 'd-block' );
                }

                if ( this.$refs.modal.classList.contains( 'd-block' ) ) {
                    this.$refs.modal.classList.remove( 'd-block' );
                }
            },
            endTransitionModal() {
                if ( ! this.$refs.backdrop.classList.contains( 'show' ) ) {
                    this.$refs.backdrop.classList.add( 'show' );
                }

                if ( ! this.$refs.modal.classList.contains( 'show' ) ) {
                    this.$refs.modal.classList.add( 'show' );
                }

                if ( ! document.body.classList.contains( 'modal-open' ) ) {
                    document.body.classList.add( 'modal-open' )
                }
            },
            endTransitionModalLeave() {
                if ( this.$refs.backdrop.classList.contains( 'show' ) ) {
                    this.$refs.backdrop.classList.remove( 'show' );
                }

                if ( this.$refs.modal.classList.contains( 'show' ) ) {
                    this.$refs.modal.classList.remove( 'show' );
                }

                if ( document.body.classList.contains( 'modal-open' ) ) {
                    document.body.classList.remove( 'modal-open' )
                }
            }
        },
        mounted() {
            document.addEventListener( 'keydown', e => {
                if ( document.getElementById( 'search-modal' ).classList.contains( 'd-block' ) ) {
                    return;
                } else if ( e.isComposing || e.keyCode === 27 ) {
                    this.$store.commit( 'closeMenuModal' );
                }
            });
        },
        beforeDestroy() {
            if ( document.body.classList.contains( 'modal-open' ) ) {
                document.body.classList.remove( 'modal-open' )
            }

            document.removeEventListener( 'keydown', e => {
                if ( e.isComposing || e.keyCode === 27 ) {
                    this.$store.commit( 'closeMenuModal' );
                }
            });

            this.$store.commit( 'variablesNull' );
        }
    }
</script>
