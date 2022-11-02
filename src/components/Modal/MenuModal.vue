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
                                        <div class="links">
                                            <LinksItem />
                                        </div>

                                        <SearchModalButton />
                                    </div>

                                    <div class="header-center align-self-center">
                                        <Logo logoColor="light" />
                                    </div>

                                    <div class="header-right d-flex justify-content-end">
                                        <div class="d-flex align-items-center">
                                            <SearchModalButton />

                                            <div class="menu-close-toggle">
                                                <button @click="toggleMenuModal" type="button" class="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto text-uppercase" data-dismiss="modal" aria-label="Close">Close menu</button>
                                            </div>
                                        </div>

                                        <Actions />
                                    </div>
                                </div>
                            </div>

                            <div class="modal-body modal-body-centered menu-primary-show-1-nav-item menu-secondary-show-1-nav-item">
                                <div class="animated zoomin w-100">
                                    <ModalMenu />

                                    <ModalMenuSecondary />

                                    <div class="modal-text">
                                        <p>© {{ new Date().getFullYear() }} Barber Shop Vur JS Template by Adveits</p>
                                    </div>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <LanguageSelector />
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

    import SearchModalButton from '../Button/SearchModalButton';
    import LinksItem from '../../blocks/header/LinksItem';
    import Logo from '../../blocks/header/HeaderLogo';
    import ModalMenu from '../../blocks/General/ModalMenu';
    import Actions from '../../blocks/General/Actions';
    import LanguageSelector from '../../blocks/General/LanguageSelector';
    import ModalMenuSecondary from '../../blocks/General/ModalMenuSecondary';

    export default {
        name: 'Menu-Modal',
        components: {
            SearchModalButton,
            LinksItem,
            Logo,
            ModalMenu,
            Actions,
            LanguageSelector,
            ModalMenuSecondary,
            Fragment
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
