<template>
    <nav class="menu-primary">
        <ul class="nav">
            <li @click="closeOnSameRoute" :class="[( currentPage === '/' ) ? activeClass : '', 'nav-item']">
                <router-link title="Home" to="/">Home</router-link>
            </li>

            <li :class="[currentPage.includes('about') ? activeClass : '', 'nav-item']">
                <router-link title="About" to="/about">About</router-link>
            </li>

            <li :class="[currentPage.includes('services') || currentPage.includes('services-inside')  ? activeClass : '', 'nav-item']">
                <router-link title="Services" to="/services">Services</router-link>
            </li>

            <li :class="[currentPage.includes('projects') || currentPage.includes('projects-inside')  ? activeClass : '', 'nav-item']">
                <router-link title="Projects" to="/projects">Projects</router-link>
            </li>

            <li :class="[currentPage.includes('news') || currentPage.includes('news-single-post')  ? activeClass : '', 'nav-item']">
                <router-link title="News" to="/news">News</router-link>
            </li>

            <li :class="[currentPage.includes('contacts') ? activeClass : '', 'nav-item']">
                <router-link title="Contacts" to="/contacts">Contacts</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'ModalMenuPrimary',
        data() {
            return {
                activeClass: 'current-nav-item'
            }
        },
        methods: {
            closeOnSameRoute: function( event ) {
                const clickTargetHref = event.target.getAttribute( 'href' );
                this.toggleMenuModal();
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
