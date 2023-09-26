<template>
    <form v-on:submit.prevent="submitForm" method="post" action="form.php" id="cf-1" class="contact-form">
        <div class="form-group">
            <p class="input-group gutter-width-md no-space">

                <span class="gutter-width">
                    <label for="cf-1-name" class="form-label-lg before">Name</label>

                    <input v-model="form.name" name="cf-1-name" type="text" id="cf-1-name" required="required" class="form-control font-size-lg">
                </span>

                <span class="gutter-width">
                    <label for="cf-1-email" class="form-label-lg before">Email</label>

                    <input v-model="form.email" name="cf-1-email" type="email" class="form-control font-size-lg" id="cf-1-email" required="required">
                </span>
            </p>
        </div>

        <div class="form-group form-group-sm form-md-no-space">
            <label for="cf-1-phone" class="form-label-lg before">Phone no.</label>

            <input v-model="form.phone" name="cf-1-phone" type="text" class="form-control font-size-lg" id="cf-1-phone" required="required">
        </div>

        <div class="form-group form-group-sm form-md-no-space">
            <label for="cf-1-message" class="form-label-lg before">Message</label>

            <textarea v-model="form.message" name="cf-1-message" class="form-control font-size-lg" id="cf-1-message" required="required"></textarea>
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
    import axios from 'axios';

    export default {
        name: 'ContactsForm',
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
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
                axios.post( 'https://store.adveits.com/API/form.php', this.form, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                }, ).then( response => {
                    if ( response.data.status === 'success' ) {
                        this.responseMessage = this.successMessage;
                    }

                    if ( response.data.status === 'warning' ) {
                        this.responseMessage = this.warningMessage;
                    }

                    if ( response.data.status === 'error' ) {
                        this.responseMessage = this.errorMessage;
                    }
                    this.alertClass = response.data.status;
                    this.callAlert  = true;

                    setTimeout( () => {
                        this.callAlert = false;
                    }, 2000 )
                } ).catch( error => {
                    this.responseMessage = this.errorMessage;
                    this.alertClass      = 'danger';
                    this.callAlert       = true;

                    setTimeout( () => {
                        this.callAlert = false;
                    }, 2000 )
                } );
            }
        }
    }
</script>
