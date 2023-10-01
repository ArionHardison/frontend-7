<template>
  <div id="projects-index">
    <Loading />

    <Header logoColor='dark'/>

    <main id="main" class="site-main">
      <PageTitle />

      <div id="page-content" class="spacer p-top-xl">
        <div class="content">
          <ProgramsPage />


          <section id="contacts" class="block spacer p-top-xl">
            <div class="wrapper">
              <div class="title">
                <h2>Contacts</h2>
              </div>

              <template v-if="contacts.contactsSection">
                <Contacts :contacts="contacts.contactsSection"/>
              </template>
            </div>
          </section>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Loading from '~/components/Loading/Loading';
import Header from '~/components/blocks/header/Header';
import Footer from '~/components/blocks/footer/Footer';

import PageTitle from '~/components/blocks/projects/PageTitle';
import ProgramsPage from '~/components/blocks/index/ProgramsPage';
import Contacts from '~/components/blocks/index/Contacts';
import fcms from "~/mixins/fcms";

export default {
  mixins: [fcms],
  components: {
    Loading,
    Header,
    PageTitle,
    ProgramsPage,
    Contacts,
    Footer
  },
  data(){
    return {
      contacts: {}
    }
  },
  async created(){
    const contacts = await this.getEntities("contacts");
    if(contacts){
      this.contacts = contacts.contacts;
    }
  },
  mounted: function() {
    document.body.classList.add( 'page' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-stripes' );
  },
  beforeDestroy() {
    document.body.classList.remove( 'page' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-stripes' );
  },
  metaInfo: {
    title: 'Programs',
    titleTemplate: '%s'
  }
}
</script>
