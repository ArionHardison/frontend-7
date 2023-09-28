<template>
  <form v-on:submit.prevent="submitForm"  id="cf-1" class="contact-form">
    <div class="form-group">
      <p class="input-group gutter-width-md no-space">
            <span class="gutter-width">
               <input-field
                 class="mb-4"
                 name="cfName"
                 type="text"
                 v-model="form.cfName"
                 label="Name"
                 placeholder="Name"
               />
            </span>
        <span class="gutter-width">
               <input-field
                 class="mb-4"
                 name="cfEmail"
                 type="text"
                 v-model="form.cfEmail"
                 label="Email"
                 placeholder="Email"
               />
            </span>
      </p>
    </div>
    <div class="form-group form-group-sm form-md-no-space">
      <input-field
        class="mb-4"
        name="cfPhoneNo"
        type="text"
        v-model="form.cfPhoneNo"
        label="Phone No."
        placeholder="Phone"
      />
    </div>
    <div class="form-group form-group-sm form-md-no-space">
      <TextareaField v-model="form.cfMessage" name="cfMessage" label="Message"/>
    </div>
    <div class="form-group mb-0">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    <transition appear leave-active-class="animated fadeOut">
      <div v-if="callAlert" id="alert" :class="'animated fadeIn alert alert--shadow alert-' + alertClass">
        {{ responseMessage }}
      </div>
    </transition>
  </form>
</template>
<script>
import api from "~/mixins/api";
import InputField from "~/components/Forms/Fields/InputField.vue";
import TextareaField from "~/components/Forms/Fields/TextareaField.vue";
export default {
  name: 'ContactsForm',
  mixins: [api],
  components: {
    InputField,
    TextareaField
  },
  data() {
    return {
      form: {
        cfName: '',
        cfEmail: '',
        cfPhoneNo: '',
        cfMessage: ''
      },
      successMessage: "Sender's message was sent successfully",
      warningMessage: 'Fill up the form, please!',
      errorMessage: 'Something go wrong. Try again later!',
      responseMessage: '',
      alertClass: '',
      callAlert: false
    }
  },
  methods: {
    async submitForm() {
      const requestSent = await this.post("public/store-client-container/contactUs", this.form);
      if(requestSent){
        this.form = {
          cfName: '',
          cfEmail: '',
          cfPhoneNo: '',
          cfMessage: ''
        }
        this.responseMessage = this.successMessage;
        this.alertClass = 'success';
      }else{
        this.responseMessage = this.errorMessage;
        this.alertClass = 'danger';
      }
      this.callAlert       = true;

      setTimeout( () => {
        this.callAlert = false;
      }, 2000 )
    }
  }
}
</script>
