<template>
  <v-container
    class="d-flex justify-center align-center"
    fluid
    style="min-height: 100vh; background-color: #f3f4f6"
  >
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
      <v-sheet color="#ffffff" height="100%" rounded="xl" class="d-flex flex-column">

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

        <!-- Main Content -->
        <div>
          <v-container class="main">
            <!-- Request From -->
            <p class="text-subtitle-3 font-weight-bold mb-2">Request payment from</p>
            <v-text-field
              placeholder="Name / Username / Email / Mobile"
              variant="outlined"
              rounded
              class="mb-2"
            ></v-text-field>

            <!-- More Ways to Request -->
            <p class="text-subtitle-4 font-weight-bold mb-2">More ways to request</p>

            <router-link to="/SharedWallet" class="no-decoration">
              <v-row class="align-center mb-3 mt-2">
                <div class="mx-3 my-3">
                  <v-img
                    :src="walletIcon"
                    alt="Wallet Icon"
                    width="22"
                    height="22"
                    class="me-3"
                  />
                </div>
                <v-sheet class="flex-grow-1 rounded-lg">
                  <span class="text-sm font-weight-medium">Create Shared Wallet</span>
                </v-sheet>
              </v-row>
            </router-link>


            <v-row class="align-center mb-3">
              <div class="mx-3 my-3">
                <v-img
                :src="seller"
                alt="seller"
                width="22"
                height="22"
                class="me-3"
              />
              </div>
              <v-sheet class="flex-grow-1 rounded-lg">
                <span class="text-sm font-weight-medium">Create Seller Profile</span>
              </v-sheet>
            </v-row>

            <v-row class="align-center mb-3">
              <div class="mx-3 my-3">
                <v-img
                :src="invoice"
                alt="invoice"
                width="22"
                height="22"
                class="me-3"
              />
              </div>
              <v-sheet class="flex-grow-1 rounded-lg">
                <span class="text-sm font-weight-medium">Create an Invoice</span>
              </v-sheet>
            </v-row>

            <v-row class="align-center mb-3">
              <div class="mx-3 my-3">
                <v-img
                :src="personal"
                alt="personal"
                width="22"
                height="22"
                class="me-3"
              />
              </div>
              <v-sheet class="flex-grow-1 rounded-lg">
                <span class="text-sm font-weight-medium">Create Personal Profile</span>
              </v-sheet>
            </v-row>

            <v-row class="align-center mb-3">
              <div class="mx-3 my-3">
                <v-img
                :src="fund"
                alt="fund"
                width="22"
                height="22"
                class="me-3"
              />
              </div>
              <v-sheet class="flex-grow-1 rounded-lg">
                <span class="text-sm font-weight-medium">Create a Fundraiser</span>
              </v-sheet>
            </v-row>

          </v-container>
        </div>

      </v-sheet>
    </div>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import back from '@/assets/images/back.png'
import walletIcon from '@/assets/images/people.png'
import seller from '@/assets/images/seller.png'
import invoice from '@/assets/images/bill.png'
import personal from '@/assets/images/user.png'
import fund from '@/assets/images/fundraiser.png'

const router = useRouter()

function goBack() {
  router.push('/Request')
}

function ToSend() {
  router.push('/SendMoney')
}

</script>

<style scoped>
.phone-frame {
  width: 390px;
  height: 844px;
  background-color: #ffffff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.nav {
  margin: 5px;
  margin-top: 25px;
}

.no-hover:hover {
  background-color: transparent !important;
  box-shadow: none !important;
  opacity: 1 !important;
}

.header-bar {
  background-color: #1e40af; /* Blue */
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

.no-decoration {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  display: block;
}

</style>
