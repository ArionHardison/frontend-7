<template>
    <div id="service-inside-index">
        <Loading />

        <Header logoColor='dark' />

        <main id="main" class="site-main">
            <template v-if="service">
              <PageTitle :title="service.slTitle_op" :description="service.slServiceDescription"/>

              <div id="img" class="block spacer p-top-xl">
                  <div class="wrapper">
                      <div class="row gutter-width-md with-pb-lg">
                          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="img-size-2">
                                  <div class="img object-fit">
                                      <div class="object-fit-cover">
                                          <img :src="$imageUrl(service.slFirstImage, 'md')" :alt="service.slTitle_op">
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="img-size-2">
                                  <div class="img object-fit">
                                      <div class="object-fit-cover">
                                          <img :src="$imageUrl(service.slSecondImage, 'md')" :alt="service.slTitle_op">
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div id="text" class="block spacer p-top-xl">
                  <div class="wrapper">
                      <div class="row gutter-width-md with-pb-lg">
                          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="description">
                                  <p>{{service.slFirstImageDesc}}</p>
                              </div>
                          </div>

                          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div class="description">
                                  <p>{{service.slSecondImageDesc}}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div id="text-2" class="block spacer p-top-xl">
                  <div class="wrapper">
                      <div class="row gutter-width-lg">
                          <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                              <div class="description">
                                  <h2>{{service.slServiceSTitle}}</h2>
                              </div>
                          </div>
                      </div>

                      <div class="row gutter-width-lg with-pb-lg spacer p-top-lg justify-content-end">
                          <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                              <div class="description max-width-1 text-secondary">
                                  <p>{{service.slServiceSecondDesc}}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </template>
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

        </main>

        <Footer />
    </div>
</template>

<script>
    import Loading from '~/components/Loading/Loading';
    import Header from '~/components/blocks/header/Header';
    import Footer from '~/components/blocks/footer/Footer';

    import PageTitle from '~/components/blocks/service-inside/PageTitle';
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
            service: null,
          }
        },
        async created(){
          const contacts = await this.getEntities("contacts");
          if(contacts){
            this.contacts = contacts.contacts;
          }
          await this.getService();
        },
        mounted: function() {
            document.body.classList.add( 'single' );
            document.body.classList.add( 'single-adveits_services' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-stripes' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'single' );
            document.body.classList.remove( 'single-adveits_services' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-stripes' );
        },
        methods: {
          async getService(){
              const service = await this.get(`public/get-item/${this.$getId(this.$route.params.id)}`);
              if(service){
                this.service = service;
              }
          }
        },
        metaInfo: {
            title: 'Service',
            titleTemplate: '%s'
        }
    }
</script>
