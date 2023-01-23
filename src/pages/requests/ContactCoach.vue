<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="email">Your Email Address</label>
            <input type="email" id="email" v-model.trim="emailAddress"/>
        </div>
        <div class="form-control">
            <label for="message">Your Message</label>
            <textarea type="text" id="message" v-model.trim="message"></textarea>
        </div>
        <p class="errors" v-if="!formIsValid">Please complete the form properly.</p>
        <div class="actions">
            <base-button>Send Message</base-button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            emailAddress: '',
            message: '',
            formIsValid: true,
        }
    },
    methods: {
        validateForm() {
            this.formIsValid = true;
            if (this.emailAddress === '' || !this.emailAddress.includes('@') || this.message === '') {
                this.formIsValid = false;
                return;
            }
        },
        submitForm() {
            this.validateForm();
            if (!this.formIsValid) {
                return;
            } 
            this.$store.dispatch['requests/contactCoach', {
                coachId: this.$route.params.id,
                email: this.emailAddress,
                message: this.message
            }];
            this.$router.replace('/coaches');
        }
    }
}
</script>


<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>