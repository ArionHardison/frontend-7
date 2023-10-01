<template>
    <div id="contacts-index">
        <Loading />

        <Header logoColor="dark" />

        <main id="main" class="site-main">
            <PageTitle title="Contacts"/>

            <div id="page-content" class="spacer p-top-xl">
                <div class="content">

                    <div id="contacts" class="block spacer p-top-xl">
                        <div class="wrapper">
                          <template v-if="contacts.contactsSection">
                            <Contacts :contacts="contacts.contactsSection"/>
                          </template>
                        </div>
                    </div>
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

    import PageTitle from '~/components/blocks/contacts/PageTitle';
    import Contacts from '~/components/blocks/index/Contacts';
    import fcms from "~/mixins/fcms";
    export default {
        mixins: [fcms],
        components: {
            Loading,
            Header,
            PageTitle,
            Contacts,
            Footer
        },
        data(){
          return {
            contacts: {},
          }
        },
        mounted: function() {
            document.body.classList.add( 'page' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-stripes' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'page' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-stripes' );
        },
        async created() {
          const contacts = await this.getEntities("contacts");
          if (contacts) {
            this.contacts = contacts.contacts;
          }
        },
        metaInfo: {
            title: 'Contacts',
            titleTemplate: '%s'
        }
    }
</script>
