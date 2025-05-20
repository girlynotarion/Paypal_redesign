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
          <v-btn icon variant="text" @click="goBack" class="ma-0 pa-0">
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
        <v-row class="nav">
          <v-btn variant="text" class="text-grey-darken-2" @click="ToSend">Send</v-btn>
          <v-btn variant="text" class="text-blue-darken-3 font-weight-bold" style="text-decoration: none;">Request</v-btn>
          <v-btn variant="text" class="text-grey-darken-2">Contacts</v-btn>
          <v-btn variant="text" class="text-grey-darken-2">More</v-btn>
        </v-row>

        <div>
        <!-- Main Content -->
        <v-container class="main">
          <!-- Request From -->
          <p class="text-subtitle-2 font-weight-medium mb-1">Request payment from</p>
          <v-text-field
            placeholder="Name / Username / Email / Mobile"
            variant="outlined"
            rounded
            class="mb-5"
          ></v-text-field>

          <!-- More Ways to Request -->
          <p class="text-subtitle-2 font-weight-medium mb-2">More ways to request</p>

          <!-- Shared Wallet -->
          <v-row class="align-center mb-3">
            <v-avatar size="32" class="bg-blue-lighten-4 me-3" />
            <v-sheet class="flex-grow-1 bg-grey-lighten-3 py-2 px-4 rounded-lg">
              <span class="text-sm font-weight-medium">Create Shared Wallet</span>
            </v-sheet>
          </v-row>

          <!-- Placeholder Items -->
          <v-row
            v-for="i in 4"
            :key="i"
            class="align-center mb-3"
          >
            <v-avatar size="32" class="bg-blue-lighten-4 me-3" />
            <v-sheet class="flex-grow-1 bg-grey-lighten-3 py-4 px-4 rounded-lg" />
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


</style>
