<template>
  <v-app>
    <div class="outer-wrapper">
      <!-- Phone Frame -->
      <div class="phone-frame bg-white">

        <!-- Custom App Bar -->
        <div class="custom-app-bar">
          <h1 class="text-white text-center text-lg font-bold">PayPal</h1>
        </div>

        <!-- Main Content -->
        <v-main class="pa-4">
          <!-- Title & Custom Menu Icon -->
          <v-row class="mb-4 align-center" no-gutters>
            <v-col>
              <h3 class="mb-0 font-weight-bold">Recent Activity</h3>
            </v-col>
            <v-col cols="auto">
              <v-menu location="bottom end" transition="scale-transition">
                <template #activator="{ props }">
                  <img
                    v-bind="props"
                    src="@/assets/images/list.png"
                    alt="Menu"
                    style="width: 32px; height: 32px; cursor: pointer; object-fit: contain;"
                  />
                </template>

                <v-list>
                  <v-list-item @click="setView('list')">
                    <v-list-item-title>List</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="setView('grid')">
                    <v-list-item-title>Grid</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
          </v-row>

          <!-- Activity View: List or Grid -->
          <v-row v-if="viewMode === 'list'" dense>
            <v-col cols="12" v-for="(item, index) in cards" :key="index">
              <v-card
                color="light-blue lighten-3"
                class="pa-3 d-flex justify-space-between align-center"
                style="border-radius: 12px;"
                elevation="2"
              >
                <div class="font-weight-bold">{{ item.title }} Bills</div>
                <v-avatar color="blue-lighten-5" size="32"></v-avatar>
              </v-card>
            </v-col>
          </v-row>

          <v-row v-else justify="center" align="center" dense>
            <v-col
              cols="6"
              md="4"
              class="mb-4"
              v-for="(item, index) in cards"
              :key="index"
            >
              <v-card
                color="light-blue lighten-3"
                class="d-flex flex-column align-center justify-center"
                style="height: 120px; border-radius: 16px;"
                elevation="3"
              >
                <div class="text-center font-weight-bold mb-2">
                  {{ item.title }}<br />Bills
                </div>
                <v-avatar color="blue-lighten-5" size="32"></v-avatar>
              </v-card>
            </v-col>
          </v-row>
          <br>
          <br>
            <!-- Back Button -->
            <v-btn color="grey darken-1" block @click="goToDashboard">
              Back to Dashboard
            </v-btn>
        </v-main>
      </div>
    </div>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToDashboard = () => {
  router.push('/dashboard')
}

// Replace `data()` with refs
const viewMode = ref('grid')
const cards = ref([
  { title: 'Shopping' },
  { title: 'Subscription' },
  { title: 'Household' }
])

// Replace methods with functions
const setView = (mode) => {
  viewMode.value = mode
}
</script>



<style scoped>
h3 {
  font-weight: bold;
}

.outer-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #e5e7eb; /* Tailwind gray-200 */
}

.phone-frame {
  width: 390px;
  height: 844px;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
}

.custom-app-bar {
  background-color: #1e40af; /* Tailwind blue-800 */
  padding: 12px;
}
</style>
