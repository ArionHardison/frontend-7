<template>
  <div id="contacts-index">
    <Loading />

    <Header />

    <main id="main" class="site-main">
      <PageTitle title="Reset Password" title-h="."/>

      <section id="page-content" class="block spacer p-top-xl">
        <div class="wrapper">
          <div class="block spacer p-top-xl">
            <h2>Reset password <span class="line">form</span></h2>
            <template v-if="smsSent">
              <form v-on:submit.prevent="setNewPassword" method="post" id="new-password-form" class="comment-form">

                  <InputField name="code" v-model="setPasswordForm.code" :mask="true" mask-data="######" type="password"
                              label="One Time Code"/>

                  <InputField name="password" v-model="setPasswordForm.password" type="password" label="New password"/>


                <div class="form-submit text-center mt-3">
                  <input name="submit" type="submit" class="btn btn-dark border-0 transform-scale-h mb-3" value="Set Password">
                </div>

              </form>
            </template>
            <template v-else>
              <form @submit.prevent="onSubmit">
                <InputField name="email" v-model="resetForm.email" type="email" placeholder="Email"/>
                <input name="submit" type="submit" class="btn btn-dark border-0 transform-scale-h mb-3 mt-4" value="Reset Password">
              </form>
            </template>
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
import PageTitle from '~/components/blocks/contacts/PageTitle';
import api from "@/mixins/api";
import InputField from "@/components/Forms/Fields/InputField.vue";

export default {
  components: {
    InputField,
    Loading,
    Header,
    PageTitle,
    Footer
  },
  middleware: ['maintenance', 'isGuest'],
  mixins: [api],
  data() {
    return {
      smsSent: false,
      setPasswordForm: {
        email: "",
        code: "",
        password: "",
      },
      resetForm: {
        email: "",
      },
    };
  },
  computed: {
    errorFields() {
      return this.$store.state.errorFields;
    },
    formErrors() {
      return this.$store.state.errors;
    },
  },
  methods: {
    async setNewPassword() {
      this.setPasswordForm.email = this.resetForm.email;
      const passwordChangeData = await this.post("public/auth/new-password", this.setPasswordForm);
      if (passwordChangeData) {
        this.$store.commit("setAuthData", passwordChangeData);
        await this.$router.push("/");
      }
    },
    async onSubmit() {
      const response = await this.post("public/auth/reset", this.resetForm);
      if (response) {
        this.smsSent = response.status;
      }
    },
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
    title: 'Reset Password | Oxer - Minimal Portfolio Vue JS Template',
    titleTemplate: '%s'
  }
}
</script>
