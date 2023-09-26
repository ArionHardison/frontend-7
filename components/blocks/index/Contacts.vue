<template>
    <div class="row gutter-width-md with-pb-xl">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="row gutter-width-md with-pb-lg">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <div class="contacts">
                        <div class="contacts-items">
                            <div class="contacts-item">
                                <div class="contacts-item-title">
                                    <h6>Location</h6>
                                </div>

                                <div class="contacts-item-description">
                                    <p>575 Crescent Ave. Quakertown, PA 18951</p>
                                </div>
                            </div>

                            <div class="contacts-item">
                                <div class="contacts-item-title">
                                    <h6>Phone</h6>
                                </div>

                                <div class="contacts-item-description">
                                    <p><a href="tel:+43253312523">+432 533 12 523</a></p>
                                </div>
                            </div>

                            <div class="contacts-item">
                                <div class="contacts-item-title">
                                    <h6>General email</h6>
                                </div>

                                <div class="contacts-item-description">
                                    <p><a href="mailto:info@domain.com">info@domain.com</a></p>
                                </div>
                            </div>

                            <div class="contacts-item">
                                <div class="contacts-item-title">
                                    <h6>Business email</h6>
                                </div>

                                <div class="contacts-item-description">
                                    <p><a href="mailto:info2@domain.com">info2@domain.com</a></p>
                                </div>
                            </div>
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

                                <div class="contacts-item-description">
                                    <p><a href="https://www.facebook.com/adveits/">Facebook</a></p>
                                </div>

                                <div class="contacts-item-description">
                                    <p><a href="https://www.instagram.com/adveits/">Instagram</a></p>
                                </div>

                                <div class="contacts-item-description">
                                    <p><a href="https://www.linkedin.com/company/18135051/">Linkedin</a></p>
                                </div>
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
        components: {
            ContactsForm
        }
    }
</script>
