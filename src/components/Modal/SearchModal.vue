<template>
    <fragment>
        <transition @enter="startTransitionModal" @after-enter="endTransitionModal" @before-leave="endTransitionModalLeave" @after-leave="startTransitionModalLeave">
            <div v-show="showSearchModal" ref="modal" class="modal fade" id="search-modal" tabindex="-1" role="dialog" aria-labelledby="search-modal" aria-hidden="true">
                <div class="modal-dialog modal-full" role="document">
                    <div class="wrapper">
                        <div class="modal-content">
                            <div class="modal-header modal-header-top">
                                <div class="header-content d-flex justify-content-between w-100">
                                    <div class="header-left align-self-center">
                                        <div class="links">
                                            <LinksItem />
                                        </div>
                                    </div>

                                    <div class="header-center align-self-center">
                                        <Logo logoColor="light" />
                                    </div>

                                    <div class="header-right d-flex justify-content-end">
                                        <div class="d-flex align-items-center">
                                            <div class="search-close-toggle">
                                                <button @click="closeModal" type="button" class="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto text-uppercase" data-dismiss="modal" aria-label="Close">Close search</button>
                                            </div>
                                        </div>

                                        <Actions />
                                    </div>
                                </div>
                            </div>

                            <div class="modal-body modal-body-centered">
                                <SearchForm />
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
    import { Fragment } from 'vue-fragment';
    import { mapMutations } from 'vuex';

    import LinksItem from '../../blocks/header/LinksItem';
    import Logo from '../../blocks/header/HeaderLogo'; 
    import Actions from '../../blocks/General/Actions'; 
    import SearchForm from '../Forms/SearchForm';

    export default {
        name: 'Search-Modal',
        components: {
            LinksItem,
            SearchForm,
            Logo,
            Actions,
            Fragment
        },
        computed: {
            showSearchModal () {
                return this.$store.state.showSearchModal
            }
        },
        methods: {
            ...mapMutations([
                'toggleSearchModal'
            ]),
            closeModal() {
                if ( document.getElementById( 'search-modal' ) ) {
                    document.getElementById( 'search-modal' ).classList.remove( 'show' );
    
                    setTimeout(() => this.$store.commit( 'closeSearchModal' ), 150 );
                }
            },
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

                if ( this.$refs.modal.classList.contains( 'show' ) ) {
                    this.$refs.modal.classList.remove( 'show' );
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

                if ( this.$refs.modal.classList.contains( 'd-block' ) ) {
                    this.$refs.modal.classList.remove( 'd-block' );
                }

                if ( this.$refs.backdrop.classList.contains( 'd-block' ) ) {
                    this.$refs.backdrop.classList.remove( 'd-block' );
                }

                if ( ! document.getElementById( 'menu-modal').classList.contains( 'd-block' ) ) {
                    document.body.classList.remove( 'modal-open' );
                }
            }
        },
        mounted() {
            document.addEventListener( 'keydown', e => {
                if ( e.isComposing || e.keyCode === 27) {
                    this.closeModal();
                }
            });
        },
        beforeDestroy() {
            if ( document.body.classList.contains( 'modal-open' ) ) {
                document.body.classList.remove( 'modal-open' );
            }

            document.removeEventListener( 'keydown', e => {
                if ( e.isComposing || e.keyCode === 27) {
                    this.closeModal();
                }
            });

            this.$store.commit( 'variablesNull' );
        }
    }
</script>
