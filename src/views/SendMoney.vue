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
            <div style="border-bottom: 2px solid #1e3a8a; color: #1e3a8a; font-weight: bold; padding: 6px 16px;">
              Send
            </div>
            <v-btn variant="text" class="text-grey-darken-2" @click="ToRequest">Request</v-btn>
          </v-row>
        </div>

      <v-container class="pa-4" fluid>
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

        <!-- Text Content -->
        <v-row justify="center" class="text-center">
          <v-col cols="12">
            <h2 class="font-weight-bold mb-2">Let’s find your contacts</h2>
            <p class="text-subtitle-1 mt-2 mb-6">
              Search by name, username, email, phone, or by enabling your contacts.
            </p>

            <!-- Button with image icon on the left -->
            <v-btn
              variant="text"
              color="primary"
              class="text-capitalize enable-btn"
              @click="enableContacts"
            >
              <v-img
                :src="searchIcon"
                alt="Icon"
                class="btn-icon"
              ></v-img>
              Enable your contacts
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import back from '@/assets/images/back.png'
import searchIcon from '@/assets/images/contact-book.png' // Your custom icon
import look from '@/assets/images/search.png' // Your custom icon

const router = useRouter()
const search = ref('')

const goBack = () => {
  router.push('/dashboard')
}

const enableContacts = () => {
  console.log('Enable contacts clicked')
}

function ToRequest() {
  router.push('/Request')
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
}

.back-arrow {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.search-wrapper {
  background-color: #f0f0f0; /* Light gray */
  border-radius: 999px;
  padding: 2px 1px;
}

.custom-search {
  background-color: transparent !important;
  border-radius: 999px !important;
  margin: 0;
  padding: 0;
  width: 360px;
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

.search-icon-wrapper {
  display: flex;
  align-items: center;
  padding-left: 8px;
}

.search-icon {
  width: 20px;
  height: 20px;
}

.nav {
  margin: 5px;
  margin-top: 25px;
}

</style>
