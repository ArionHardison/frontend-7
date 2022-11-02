import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export default new Vuex.Store( {
    state: {
        showMenuModal: false,
        showSearchModal: false,
        showSwipeBox: false,
        swipeBoxIndex: 1
    },
    mutations: {
        toggleMenuModal( state ) {
            state.showMenuModal = ! state.showMenuModal;
        },
        toggleSearchModal( state ) {
            state.showSearchModal = ! state.showSearchModal;
        },
        closeMenuModal( state ) {
            state.showMenuModal = false;
        },
        closeSearchModal( state ) {
            state.showSearchModal = false;
        },
        toggleSwipebox( state ) {
            state.showSwipeBox = ! state.showSwipeBox;
        },
        setswipeboxIndex( state, index ) {
            state.swipeBoxIndex = index;
        },
        variablesNull( state ) {
            state.showMenuModal   = false;
            state.showSearchModal = false;
            state.backToTopActive = false;
        }
    },
    getters: {
        showMenuModal: state => state.showMenuModal,
        showSearchModal: state => state.showSearchModal,
        showSwipeBox: state => state.showSwipeBox,
        showSwipeboxIndex: state => state.swipeBoxIndex
    }
} );
