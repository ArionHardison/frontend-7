<template>
    <div class="row gutter-width-md with-pb-xl">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="row gutter-width-md with-pb-lg">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <div class="contacts">
                        <div class="contacts-items">
                            <template v-for="contactItem in contacts.csContatcItem">
                              <div class="contacts-item">
                                <div class="contacts-item-title">
                                  <h6>{{contactItem.clContactsTitle}}</h6>
                                </div>

                                <div class="contacts-item-description">
                                  <p>{{contactItem.clContactsContent}}</p>
                                </div>
                              </div>
                            </template>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div class="contacts">
                        <div class="contacts-items">
                            <div class="contacts-item">
                                <div class="contacts-item-title">
                                    <h6>Social</h6>
                                </div>
                                <template v-for="socialNetwork in contacts.csSocialNetwork">
                                  <div class="contacts-item-description">
                                      <p><a :href="socialNetwork.slNetworkUrl" target="_blank">{{socialNetwork.slNetworkName}}</a></p>
                                  </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="contact-form-shortcode">
                <div class="title">
                    <h6 class="pb-0">Or you can write us here</h6>
                </div>

                <div class="spacer p-top-sm">
                    <ContactsForm />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ContactsForm from '~/components/Forms/ContactsForm';

    export default {
        name: 'Conacts',
        props: {
          contacts: {
              type: Object,
              default: ()=>{}
          }
        },
        components: {
            ContactsForm
        }
    }
</script>
