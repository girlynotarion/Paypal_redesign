<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const transferFunds = () => {
  alert("Transfer Funds clicked!")
}

const goToBudgeting = () => {
  router.push('/SmartBudgeting')
}

const goToRecentActivity = () => {
  router.push('/RecentActivity')
}

const goToSend = () => {
  router.push('/SendMoney')
}

const goToRequest = () => {
  router.push('/RequestMoney')
}

import profilePic from '@/assets/images/rose.jpg'

</script>

<template>
  <v-app>
    <div class="outer-wrapper">
      <div class="phone-frame d-flex flex-column">

        <!-- Header -->
        <div class="header-bar position-relative d-flex justify-center align-center">
          <h1 class="text-white text-lg font-bold">Paypal</h1>
          <v-avatar size="34" class="profile-avatar" @click="router.push('/Profile')">
            <v-img :src="profilePic" alt="Profile" class="cursor-pointer" />
          </v-avatar>
        </div>



        <!-- Main Content -->
        <div class="flex-grow overflow-y-auto px-4 py-4 mt-5">
          <!-- PayPal Balance -->
          <v-card elevation="2" class="mb-4 text-center">
            <v-card-title class="text-h6">PayPal Balance</v-card-title>
            <v-card-text class="text-h5 font-bold">$1,250.00</v-card-text>
            <v-card-actions>
              <v-btn
                color="light-blue lighten-1"
                block
                height="50"
                class="text-white"
                @click="transferFunds"
              >
                Transfer Funds
              </v-btn>
            </v-card-actions>
          </v-card>

          <!-- Smart Budgeting & Recent Activity -->
          <div class="smart">
            <v-card elevation="2" class="mt-4">
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  <v-btn color="indigo-lighten-1" block rounded @click="goToBudgeting">
                    Smart Budgeting
                  </v-btn>
                </v-col>
                <v-col cols="12" class="mt-2">
                  <v-btn color="deep-purple-lighten-1" block rounded @click="goToRecentActivity">
                    Recent Activity
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          </div>
        </div>

        <!-- Footer Buttons -->
        <div class="footer-bar px-4 py-3">
          <v-row dense>
            <v-col cols="6">
              <v-btn color="primary" block rounded height="50" size="large" @click="goToSend">Send Money</v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn color="primary" variant="outlined" block rounded height="50" size="large" @click="goToRequest">Request Money</v-btn>
            </v-col>
          </v-row>
        </div>
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
  background-color: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.header-bar {
  background-color: #1e40af; /* Blue */
  padding: 12px;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}

.footer-bar {
  background-color: white;
  padding-bottom: 16px;
  padding-top: 12px;
  margin-top: 335px;
}

.profile-avatar {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}


</style>
