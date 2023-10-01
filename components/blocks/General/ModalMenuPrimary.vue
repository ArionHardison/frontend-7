<template>
    <nav class="menu-primary">
        <ul class="nav">
            <li @click="closeOnSameRoute" :class="[( currentPage === '/' ) ? activeClass : '', 'nav-item']">
                <nuxt-link title="Home" to="/">Home</nuxt-link>
            </li>

            <li :class="[currentPage.includes('programs') || currentPage.includes('programs-inside')  ? activeClass : '', 'nav-item']">
                <nuxt-link title="Programs" to="/programs">Programs</nuxt-link>
            </li>

            <li :class="[currentPage.includes('contacts') ? activeClass : '', 'nav-item']">
                <nuxt-link title="Contacts" to="/contacts">Contacts</nuxt-link>
            </li>
            <template v-if="isGuest">
              <li @click="closeOnSameRoute" :class="[currentPage.includes('sign-in') ? activeClass : '', 'nav-item']">
                <nuxt-link title="Sign In" to="/auth/login">Sign In</nuxt-link>
              </li>
              <li @click="closeOnSameRoute" :class="[currentPage.includes('sign-up')  ? activeClass : '', 'nav-item']">
                <nuxt-link title="Sign Up" to="/auth/registration">Sign Up</nuxt-link>
              </li>
            </template>
            <template v-else>
              <li @click="closeOnSameRoute" class="nav-item">
                <a href="javascript:void(0)" title="Clinic" @click="getClinicLink">Clinic</a>
              </li>
              <li :class="[currentPage.includes('account') ? activeClass : '', 'nav-item']">
                <nuxt-link title="My Account" to="/account">My Account</nuxt-link>
              </li>
              <li @click="closeOnSameRoute" class="nav-item">
                <a href="javascript:void(0)" title="Sign Out" @click="signOut">Sign Out</a>
              </li>
            </template>
        </ul>
    </nav>
</template>

<script>
    import api from "~/mixins/api";
    export default {
        name: 'ModalMenuPrimary',
        mixins: [api],
        data() {
            return {
                activeClass: 'current-nav-item'
            }
        },
        methods: {
            async signOut() {
              await this.get(`user/sign-out`);
              this.$store.commit("signOut");
            },
            async getClinicLink(){
              if (process.browser) {
                if (this.isLoggedIn) {
                  const tokenData = await this.get("user/get-token");
                  window.location.href = `https://clinic.${window.location.hostname}?token=${tokenData.token}`;
                } else {
                  window.location.href = `https://clinic.${window.location.hostname}`;
                }
              }
            },
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
            },
            isGuest() {
              return this.$store.state.authData.accessToken === null;
            },
            isLoggedIn(){
              return this.$store.state.authData.accessToken;
            },
        }
    }
</script>
