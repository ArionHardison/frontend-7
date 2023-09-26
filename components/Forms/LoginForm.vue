<template>
  <form @submit.prevent="submitForm" >
    <input-field
      class="mb-4"
      name="email"
      type="text"
      v-model="form.email"
      placeholder="Email"
    />

    <input-field
      class="mb-4"
      name="password"
      type="password"
      v-model="form.password"
      placeholder="Password"
    />



    <div class="form-group form-group-xs mb-0 submit-container">
      <button type="submit" class="btn btn-dark border-0 transform-scale-h mb-3">Login</button>
    </div>

    <nuxt-link type="submit" to="/auth/registration">
      Don't have an account?
    </nuxt-link>

    <nuxt-link type="submit" to="/auth/forgot-password" class="ml-4">
      Forgot Password?
    </nuxt-link>

    <transition appear leave-active-class="animated fadeOut">
      <div
        v-if="callAlert"
        id="alert"
        :class="'animated fadeIn alert alert--shadow alert-' + alertClass"
      >
        {{ responseMessage }}
      </div>
    </transition>
  </form>
</template>

<script>
import InputField from "~/components/Forms/Fields/InputField";

export default {
  components: { InputField },
  name: "LoginForm",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      successMessage: "Sender's message was sent successfully",
      warningMessage: "Fill up the form, please!",
      errorMessage: "Something go wrong. Try again later!",
      responseMessage: "",
      alertClass: "",
      callAlert: false,
    };
  },
  methods: {
    async submitForm() {
      this.$emit("submit", this.form);
    },
  },
};
</script>
