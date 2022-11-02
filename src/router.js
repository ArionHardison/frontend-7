import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

Vue.use( VueRouter );
Vue.use( VueMeta );

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import( './views/index' ),
    },
    {
        path: '/about-us',
        name: 'about',
        component: () => import( './views/about' ),
    },
    {
        path: '/news',
        name: 'news',
        component: () => import( './views/news' ),
    },
    {
        path: '/news-single-post',
        name: 'news-single-post',
        component: () => import( './views/news-single-post' )
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import( './views/contacts' )
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: () => import( './views/gallery' )
    },
    {
        path: '/search-results',
        name: 'search-results',
        component: () => import( './views/search-results' )
    },
    {
        path: '/services',
        name: 'services',
        component: () => import( './views/services' )
    },
    {
        path: '/service-inside',
        name: 'service-inside',
        component: () => import( './views/service-inside' )
    },
    {
        path: '/ui',
        name: 'ui',
        component: () => import( './views/ui' )
    },
    {
        path: '/404',
        name: '404',
        component: () => import( './views/404' )
    },
    {
        path: '*',
        redirect: '/404'
    }
];

const router = new VueRouter( {
    routes,
    scrollBehavior( to, from, savedPosition ) {
        if ( to.hash ) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            }
        } else if ( savedPosition ) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    mode: 'history'
} );

export default router;
