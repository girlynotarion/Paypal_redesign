<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const login = () => {
  console.log('Login:', email.value, password.value)
  router.push('/dashboard')
}
</script>

<template>
  <v-app>
    <div class="outer-wrapper">
      <div class="phone-frame">
        <!-- Header -->
        <div class="header-bar">
          <h1 class="text-white text-center text-lg font-bold">PayPal</h1>
        </div>

        <!-- Form Content -->
        <v-container class="py-10">
          <h2 class="text-center text-xl font-semibold mb-6">Login</h2>
            <v-form @submit.prevent="login">
              <v-text-field v-model="email" label="Email" type="email" outlined dense class="mb-4" />

              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                outlined
                dense
                class="mb-2"
              />

              <div class="text-right mb-6">
                  <span class="text-blue-grey-darken-1 text-sm">Forgot your password?</span>
              </div>

              <v-btn color="blue-darken-3" block rounded class="text-white font-bold" @click="login">
                Login
              </v-btn>
            </v-form>


          <div class="text-center mt-4">
            <span>Don't have an account?</span>
            <a href="/register" class="text-blue-700 font-medium" style="text-decoration: none;"> Sign Up</a>
          </div>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<style scoped>
.outer-wrapper {
  background-color: #e5e7eb; 
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
  background-color: #1e40af; 
  padding: 12px;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}

</style>
