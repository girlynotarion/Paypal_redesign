<template>
  <div class="app-wrapper">
    <div class="phone-frame">

     <!-- Header -->
      <div class="header-bar d-flex align-center justify-center position-relative">
        <!-- Back Arrow -->
        <v-img
          :src="back"
          alt="Back"
          class="back-arrow position-absolute start-0 ml-4"
          @click="goBack"
        ></v-img>
        <!-- Title -->
        <h1 class="text-white text-lg font-bold m-0">Paypal</h1>
      </div>

        <!-- Navigation Tabs -->
        <div>
          <v-row class="nav">
            <v-btn variant="text" class="text-grey-darken-2" @click="ToSend">Send</v-btn>

            <!-- Active tab indicator for 'Request' -->
            <div style="border-bottom: 2px solid #1e3a8a; color: #1e3a8a; font-weight: bold; padding: 6px 16px;">
              Request
            </div>
          </v-row>
        </div>

      <br>

      
      <!-- Shared Wallet Form -->
      <v-container class="px-4 py-4" fluid>
        <h2 class="text-h6 font-weight-medium mb-4">Shared Wallet</h2>

        <v-text-field
          placeholder="Name/Username/Email/Mobile"
          variant="outlined"
          hide-details
          dense
          class="mb-4"
        ></v-text-field>

        <v-text-field
          placeholder="₱0.00"
          prefix="Enter total bill:"
          type="number"
          variant="outlined"
          hide-details
          dense
        ></v-text-field>
      </v-container>

      <!-- Done Button -->
      <div class="d-flex justify-center pa-4 mt-5">
        <v-btn
          color="blue-darken-3"
          class="text-white px-8"
          rounded
          @click="submitSharedWallet"
        >
          Done
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import back from '@/assets/images/back.png' // <-- Make sure the path is correct!

const router = useRouter()

const goBack = () => {
  router.back() // or router.push('/previous-page') if you want to control the route
}

const submitSharedWallet = () => {
  console.log('Shared wallet submitted!')
}

function ToSend() {
  router.push('/SendMoney')
}

</script>

<style scoped>
.app-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.phone-frame {
  width: 390px;
  height: 844px;
  background-color: #ffffff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.header-bar {
  background-color: #1e40af;
  padding: 12px;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}

.back-arrow {
  width: 20px;
  height: 20px;
  cursor: pointer;
  filter: brightness(0) invert(1); /* Makes image white */
}

/* Optional tweak for absolute positioning */
.position-absolute {
  position: absolute;
}

.start-0 {
  left: 0;
}

.ml-4 {
  margin-left: 1rem;
}

.nav {
  margin: 5px;
  margin-top: 25px;
}
</style>
