<template>
  <div id="contacts-index">
    <Loading />

    <Header />

    <main id="main" class="site-main">
      <PageTitle title="Sign Up" title-h="."/>

      <section id="page-content" class="block spacer p-top-xl">
        <div class="wrapper">
          <div class="block spacer p-top-xl">
            <h2>Sign in <span class="line">form</span></h2>
            <RegistrationForm/>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import Loading from '~/components/Loading/Loading';
import Header from '~/components/blocks/header/Header';
import Footer from '~/components/blocks/footer/Footer';
import RegistrationForm from "@/components/Forms/RegistrationForm";
import PageTitle from '~/components/blocks/contacts/PageTitle';

export default {
  middleware: ['maintenance', 'isGuest'],
  components: {
    Loading,
    Header,
    PageTitle,
    RegistrationForm,
    Footer
  },
  mounted: function() {
    document.body.classList.add( 'page' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );
  },
  beforeDestroy: function() {
    document.body.classList.remove( 'page' );
    document.body.classList.remove( 'bg-fixed' );
    document.body.classList.remove( 'bg-line' );
  },
  metaInfo: {
    title: 'Sign up | Oxer - Minimal Portfolio Vue JS Template',
    titleTemplate: '%s'
  }
}
</script>
