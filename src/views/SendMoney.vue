<template>
  <div class="app-wrapper">
    <div class="phone-frame">
      <v-container class="pa-4" fluid>
        <!-- Back Arrow + Search Field on the same line -->
        <v-row class="align-center mb-6 mt-2">
          <!-- Back Arrow -->
          <v-col cols="2" class="d-flex justify-start">
            <v-img
              :src="back"
              alt="Back"
              class="back-arrow"
              @click="goBack"
            ></v-img>
          </v-col>

          <!-- Search Field -->
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
            ></v-text-field>
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

const router = useRouter()
const search = ref('')

const goBack = () => {
  router.push('/dashboard')
}

const enableContacts = () => {
  console.log('Enable contacts clicked')
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
</style>
