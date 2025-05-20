<template>
  <v-container
    class="d-flex justify-center align-center"
    fluid
    style="min-height: 100vh; background-color: #e0e0e0"
  >
    <div class="phone-frame">
      <v-sheet class="pa-4" elevation="10" rounded="xl" color="white" height="100%" width="100%">
        <!-- Header -->
        <div class="header-bar text-white text-center font-bold text-lg">
          Verify Your Phone
        </div>

        <!-- Body -->
        <v-container class="mt-4">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <p class="text-gray-700">
                We’ve sent a 6-digit code to your mobile number
              </p>
              <p class="font-bold mt-1">+63 9** *** *789</p>
            </v-col>
          </v-row>

          <!-- Code Input Fields -->
          <v-row class="justify-center my-4" dense>
            <v-col cols="2" v-for="n in 6" :key="n" class="px-1">
              <v-text-field
                outlined
                maxlength="1"
                class="text-center"
                style="text-align: center;"
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Verify Button -->
          <v-btn color="blue-darken-3" block large class="text-white mt-2"  @click="gotoLogin">Verify</v-btn>

          <!-- Resend -->
          <div class="text-center mt-4">
            <span class="text-gray-600">Didn't receive a code? </span>
            <a href="#" class="text-blue-700 font-medium" style="text-decoration: none;">Resend</a>
          </div>
        </v-container>
      </v-sheet>
    </div>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const gotoLogin = () => {
  router.push('/Login')
}
</script>


<style scoped>
.phone-frame {
  width: 390px;
  height: 844px;
  background-color: #f5f5f5;
  border-radius: 1.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  overflow: auto;
}
.header-bar {
  background-color: #1e40af; 
  padding: 16px;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}
</style>
