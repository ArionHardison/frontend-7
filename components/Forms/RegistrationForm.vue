<template>
  <client-only>
    <form class="auth-form" role="form" @submit.prevent="onSubmit">
      <input-field
        name="full_name"
        type="text"
        v-model="registrationForm.full_name"
        placeholder="Full Name"
        class="mb-4"
      />

      <input-field
        name="username"
        type="text"
        v-model="registrationForm.username"
        placeholder="Username"
        class="mb-4"
      />

      <select-field
        name="gender"
        v-model="registrationForm.gender"
        placeholder="Gender"
        :options="genderOptions"
        class="mb-4 w-50"
      />

      <input-field
        name="phone"
        type="text"
        v-model="registrationForm.phone"
        :mask="true"
        mask-data="##########"
        placeholder="Phone"
      />

      <input-field
        name="email"
        type="email"
        v-model="registrationForm.email"
        placeholder="Email"
        class="mb-4 mt-4"
      />

      <input-field
        name="password"
        type="password"
        v-model="registrationForm.password"
        placeholder="Password"
        class="mb-4"
      />

      <input-field
        name="password_confirmation"
        type="password"
        v-model="registrationForm.password_confirmation"
        placeholder="Password Confirmation"
        class="mb-4"
      />
      <div class="row my-4">
        <div class="col-12">
          <checkbox-field name="agree">
            <span class="text-muted"
              >I agree with the
              <router-link to="/privacy"
                >Privacy Policy</router-link
              > and <router-link to="/terms"
              >Terms</router-link
              ></span
            >
          </checkbox-field>
        </div>
      </div>
      <div class="text-center submit-container">
        <button type="submit" class="btn btn-dark border-0 transform-scale-h mb-3">
          Create account
        </button>
      </div>
      <div class="row mt-3">
        <div class="col-12">
          <router-link to="/auth/login"
            ><small>Already have account?</small></router-link
          >
        </div>
      </div>
    </form>
  </client-only>
</template>

<script>
import InputField from "~/components/Forms/Fields/InputField";
import SelectField from "~/components/Forms/Fields/SelectField";
import CheckboxField from "~/components/Forms/Fields/CheckboxField";
import api from "@/mixins/api";

export default {
  mixins: [api],
  meta: {
    showWhiteMenu: true,
  },
  components: {
    CheckboxField,
    SelectField,
    InputField,
  },
  name: "register",
  data() {
    return {
      smsSent: false,
      settings: {
        themes: [],
        modules: [],
      },
      genderOptions: [
        { id: "male", name: "Male" },
        { id: "female", name: "Female" },
        { id: "other", name: "Other" },
      ],
      countryAndPhone: null,
      registrationForm: {
        full_name: "",
        username: "",
        email: "",
        gender: "other",
        phone: "",
        password: "",
        password_confirmation: "",
        country_id: null,
      },
    };
  },
  methods: {
    setPhoneAndCountry(data) {
      this.registrationForm.phone = data.phone;
      this.registrationForm.country_id = data.country;
    },
    async onSubmit() {
      const response = await this.post(
        "public/auth/sign-up",
        this.registrationForm
      );
      if (response) {
         this.smsSent = true;
         this.$store.commit("setAuthData", response);
        return this.$router.push(`/`);
      }
    },
  },
};
</script>

<style scoped>
.vue-country-select .dropdown-list {
  width: auto !important;
}
</style>
