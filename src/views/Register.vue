<template>
  <v-app>
    <div class="outer-wrapper">
      <div class="phone-frame">
        <!-- Header -->
        <div class="header-bar">
          <h1 class="text-white text-center text-lg font-bold">PayPal</h1>
        </div>

        <!-- Form Content -->
        <v-container class="py-8">
          <h2 class="text-center text-xl font-semibold mb-6">Register</h2>

          <v-form ref="form">
            <v-text-field
              v-model="form.fullName"
              label="Full Name"
              outlined
              dense
              class="mb-4"
            />
            <v-text-field
              v-model="form.email"
              label="Email"
              type="email"
              outlined
              dense
              class="mb-4"
            />
            <v-text-field
              v-model="form.phone"
              label="Phone Number"
              type="tel"
              outlined
              dense
              class="mb-4"
            />
            <v-text-field
              v-model="form.password"
              label="Password"
              type="password"
              outlined
              dense
              class="mb-6"
            />
              <v-text-field
              v-model="form.password"
              label="Confirm Password"
              type="password"
              outlined
              dense
              class="mb-6"
            />

            <v-btn
              color="blue-darken-3"
              block
              rounded
              class="text-white font-bold"
              @click="goToVerify"
            >
              Sign Up
            </v-btn>
          </v-form>

          <div class="text-center mt-4">
            <span>Already have an account? </span>
            <a href="#" class="text-blue-700 font-medium" style="text-decoration: none;" @click="goToLogin">Log In</a>
          </div>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'CreateAccount',
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        phone: '',
        password: '',
      },
    };
  },
  methods: {
    goToLogin() {
      this.$router.push('/Login');
    },
    goToVerify() {
      this.$router.push('/Verification');
    },
  },
};
</script>


<style scoped>
.outer-wrapper {
  background-color: #e5e7eb; /* Tailwind gray-200 */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.phone-frame {
  width: 390px;
  height: 844px;
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  overflow: auto;
}

.header-bar {
  background-color: #1e40af; /* Blue */
  padding: 12px;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}
</style>
