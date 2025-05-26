<template>
  <div class="app-wrapper">
    <div class="phone-frame">
      <!-- Header -->
      <div class="header-bar d-flex align-center justify-center position-relative">
        <v-img
          :src="back"
          alt="Back"
          class="back-arrow position-absolute start-0 ml-4"
          @click="goBack"
        />
        <h1 class="text-white text-lg font-bold m-0">Paypal</h1>
      </div>

      <!-- Navigation Tabs -->
      <v-row class="nav-tabs">
        <v-btn variant="text" class="text-grey-darken-2" @click="ToSend">Send</v-btn>
        <div class="active-tab">Request</div>
      </v-row>

      <!-- Content -->
      <v-container class="pa-4 pt-2 pb-12" fluid>
        <v-row class="align-center mb-6 mt-2">
          <v-col cols="10">
            <v-text-field
              v-model="search"
              placeholder="Name, username or email"
              variant="solo-filled"
              flat
              hide-details
              rounded
              density="compact"
              color="grey-lighten-3"
              class="custom-search"
            >
              <template #prepend-inner>
                <div class="search-icon-wrapper">
                  <img :src="look" alt="Search Icon" class="search-icon" />
                </div>
              </template>
            </v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" class="text-center">
          <v-col cols="12">
            <h2 class="font-weight-bold mb-2">Let’s find your contacts</h2>
            <p class="text-subtitle-1 mt-2 mb-6">
              Search by name, username, email, phone, or by enabling your contacts.
            </p>

            <v-btn
              variant="text"
              color="primary"
              class="text-capitalize enable-btn"
              @click="enableContacts"
            >
              <v-img :src="searchIcon" alt="Icon" class="btn-icon" />
              Enable your contacts
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

      <!-- Footer Button at Bottom Right -->
      <div class="footer-bar">
        <v-btn color="primary" rounded height="50" width="120" @click="ToNext">
          Next
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import back from '@/assets/images/back.png'
import searchIcon from '@/assets/images/contact-book.png'
import look from '@/assets/images/search.png'

const router = useRouter()
const search = ref('')

const goBack = () => {
  router.push('/dashboard')
}

const ToSend = () => {
  router.push('/SendMoney')
}

const enableContacts = () => {
  console.log('Enable contacts clicked')
}

const goToSend = () => {
  router.push('/SendMoney')
}

function ToNext() {
  router.push('/RequestMoney')
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
  overflow: hidden;
  position: relative;
}

.header-bar {
  background-color: #1e40af;
  padding: 12px;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  position: relative;
}

.back-arrow {
  width: 20px;
  height: 20px;
  cursor: pointer;
  filter: brightness(0) invert(1);
}

.position-absolute {
  position: absolute;
}

.start-0 {
  left: 0;
}

.ml-4 {
  margin-left: 1rem;
}

.nav-tabs {
  margin: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.active-tab {
  border-bottom: 2px solid #1e3a8a;
  color: #1e3a8a;
  font-weight: bold;
  padding: 6px 16px;
}

.custom-search {
  background-color: transparent !important;
  border-radius: 999px !important;
}

.search-icon-wrapper {
  display: flex;
  align-items: center;
  padding-left: 8px;
}

.search-icon {
  width: 20px;
  height: 20px;
}

.enable-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-icon {
  width: 20px;
  height: 20px;
  margin: 4px;
}

.footer-bar {
  position: absolute;
  bottom: 50px;
  right: 16px;
}
</style>
