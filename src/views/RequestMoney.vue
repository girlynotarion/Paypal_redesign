<template>
  <v-container
    class="d-flex justify-center align-center"
    fluid
    style="min-height: 100vh; background-color: #f3f4f6"
  >
    <div class="phone-frame">
      <v-sheet color="#ffffff" height="100%" rounded="xl" class="d-flex flex-column">

        <!-- Header -->
        <div>
          <v-row class="align-center px-5 pb-1 mt-5">
            <v-btn
              icon
              variant="text"
              @click="goBack"
              class="ma-0 pa-0 no-hover"
              :ripple="false"
              elevation="0"
              style="background-color: transparent !important;"
            >
              <v-img
                :src="back"
                alt="Back"
                width="20"
                height="20"
              />
            </v-btn>
          </v-row>
        </div>

        <!-- Navigation Tabs -->
        <div>
          <v-row class="nav">
            <v-btn variant="text" class="text-grey-darken-2" @click="ToSend">Send</v-btn>
            <v-btn variant="text" class="text-blue-darken-3 font-weight-bold" style="text-decoration: none;">Request</v-btn>
            <v-btn variant="text" class="text-grey-darken-2">Contacts</v-btn>
            <v-btn variant="text" class="text-grey-darken-2">More</v-btn>
          </v-row>
        </div>

        <!-- Main Content -->
        <div>
          <v-container class="main">
            <!-- Request From -->
            <p class="text-subtitle-3 font-weight-medium mb-2">Request payment from</p>
            <v-text-field
              placeholder="Name / Username / Email / Mobile"
              variant="outlined"
              rounded
              class="mb-2"
            ></v-text-field>

            <!-- More Ways to Request -->
            <p class="text-subtitle-2 font-weight-medium mb-2">More ways to request</p>

            <!-- 4 Repeated Shared Wallet Items -->
            <v-row class="align-center mb-3 mt-2">
              <v-img
                :src="walletIcon"
                alt="Wallet Icon"
                width="22"
                height="22"
                class="me-3"
              />
              <v-sheet class="flex-grow-1 bg-grey-lighten-4 py-2 px-4 rounded-lg">
                <span class="text-sm font-weight-medium">Create Shared Wallet</span>
              </v-sheet>
            </v-row>

            <v-row class="align-center mb-3">
              <v-img
                :src="seller"
                alt="seller"
                width="22"
                height="22"
                class="me-3"
              />
              <v-sheet class="flex-grow-1 bg-grey-lighten-4 py-2 px-4 rounded-lg">
                <span class="text-sm font-weight-medium">Create Seller Profile</span>
              </v-sheet>
            </v-row>

            <v-row class="align-center mb-3">
              <v-img
                :src="invoice"
                alt="invoice"
                width="22"
                height="22"
                class="me-3"
              />
              <v-sheet class="flex-grow-1 bg-grey-lighten-4 py-2 px-4 rounded-lg">
                <span class="text-sm font-weight-medium">Create an Invoice</span>
              </v-sheet>
            </v-row>

            <v-row class="align-center mb-3">
              <v-img
                :src="personal"
                alt="personal"
                width="22"
                height="22"
                class="me-3"
              />
              <v-sheet class="flex-grow-1 bg-grey-lighten-4 py-2 px-4 rounded-lg">
                <span class="text-sm font-weight-medium">Create Personal Profile</span>
              </v-sheet>
            </v-row>

            <v-row class="align-center mb-3">
              <v-img
                :src="fund"
                alt="fund"
                width="22"
                height="22"
                class="me-3"
              />
              <v-sheet class="flex-grow-1 bg-grey-lighten-4 py-2 px-4 rounded-lg">
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
  router.push('/dashboard')
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
</style>
