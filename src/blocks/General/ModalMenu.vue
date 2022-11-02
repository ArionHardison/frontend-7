<template>
    <nav class="menu-primary">
        <ul class="nav">
            <li @click="closeOnSameRoute" :class="[ ( currentPage === '/' ) ? activeClass : '', 'nav-item' ]">
                <router-link title="Home" to="/">Home</router-link>
            </li>

            <li @click="closeOnSameRoute" :class="[ currentPage.includes('about-us') ? activeClass : '', 'nav-item' ]">
                <router-link title="About-us" to="/about-us">About us</router-link>
            </li>

            <li @click="closeOnSameRoute" :class="[ currentPage.includes('services') || currentPage.includes('service-inside') ? activeClass : '', 'nav-item' ]">
                <router-link title="Services" to="/services">Services</router-link>
            </li>

            <li @click="closeOnSameRoute" :class="[ currentPage.includes('gallery') ? activeClass : '', 'nav-item' ]">
                <router-link title="Gallery" to="/gallery">Gallery</router-link>
            </li>


            <li @click="closeOnSameRoute" :class="[ currentPage.includes('news') || currentPage.includes('news-single-post') ? activeClass : '', 'nav-item' ]">
                <router-link title="News" to="/news">News</router-link>
            </li>

            <li @click="closeOnSameRoute" :class="[ currentPage.includes('contacts') ? activeClass : '', 'nav-item' ]">
                <router-link title="Contacts" to="/contacts">Contacts</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'ModalMenu',
        data() {
            return {
                activeClass: 'current-nav-item'
            }
        },
        methods: {
            closeOnSameRoute: function( event ) {
                const clickTargetHref = event.target.getAttribute( 'href' );

                if ( clickTargetHref === this.$route.path ) {
                    this.toggleMenuModal();
                }
            },
            toggleMenuModal: function( event ) {
                this.$store.commit( 'toggleMenuModal' );
                this.$store.commit( 'variablesNull' );
            }
        },
        computed: {
            currentPage() {
                return this.$route.path;
            }
        }
    }
</script>
