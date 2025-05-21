<template>
  <v-container
    class="d-flex justify-center align-center"
    fluid
    style="min-height: 100vh; background-color: white"
  >
    <div class="phone-frame">
      <v-sheet color="#f3f4f6" class="pa-0" height="100%" rounded="xl">
        <!-- Header -->
          <v-row class="align-center" justify="space-between">
            <!-- Back icon as image -->
            <div>
              <v-img
              :src="back"
              alt="Back"
              width="22"
              height="22"
              class="cursor-pointer-back"
              @click="goBack"
            />
            </div>

            <!-- Title -->
            <div class="text-profile">
              <span class="font-bold text-lg mt-5 mb-3">
              <h3 class="m-0">Profile</h3>
            </span>
            </div>

            <!-- Notification icon as image -->
            <div>
              <v-img
              :src="notify"
              alt="Notifications"
              width="22"
              height="22"
              class="cursor-pointer-notify"
            />
            </div>
          </v-row>


        <div class="profile-banner text-center">
          <v-avatar size="55" class="mx-auto mt-n8" color="white">
            <img :src="rose" alt="Profile" class="rounded-full" width="96" height="96" />
          </v-avatar>
          <div class="font-bold text-lg mt-2">Girly Jane Notarion</div>
          <div class="text-blue-600">@girljanenots</div>
            <v-btn
              class="mt-2"
              outlined
              rounded
              small
              style="text-transform: none"
            >
              <span style="color: #2563eb">Edit</span>
            </v-btn>
        </div>

        <!-- Settings -->
        <v-card class="mt-4 mx-4" elevation="1" rounded="lg">
          <v-list>
            <v-list-item>
              <v-list-item-icon><v-icon>mdi-account-outline</v-icon></v-list-item-icon>
              <v-list-item-title>Personal info</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon><v-icon>mdi-shield-lock-outline</v-icon></v-list-item-icon>
              <v-list-item-title>Login and security</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon><v-icon>mdi-eye-outline</v-icon></v-list-item-icon>
              <v-list-item-title>Data and Privacy</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon><v-icon>mdi-bell-cog-outline</v-icon></v-list-item-icon>
              <v-list-item-title>Notification Preferences</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon><v-icon>mdi-currency-usd</v-icon></v-list-item-icon>
              <v-list-item-title>Marketing Preferences</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>

        <!-- Message Center -->
        <v-card class="mt-4 mx-4 mb-6" elevation="1" rounded="lg">
          <v-list>
            <v-list-item>
              <v-list-item-icon><v-icon>mdi-message-text-outline</v-icon></v-list-item-icon>
              <v-list-item-title>Message Center</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon><v-icon>mdi-message-text-outline</v-icon></v-list-item-icon>
              <v-list-item-title>Help</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>

        <v-card class="mt-4 mx-4 mb-6" elevation="1" rounded="lg">
          <v-list>
            <v-list-item>
              <v-list-item-icon><v-icon>mdi-message-text-outline</v-icon></v-list-item-icon>
              <v-list-item-title>Close your account</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>

        <v-card class="mt-4 mx-4 mb-6" elevation="1" rounded="lg">
          <v-list>
            <v-list-item>
              <v-list-item-icon><v-icon>mdi-message-text-outline</v-icon></v-list-item-icon>
              <v-list-item-title>Log out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-sheet>
    </div>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import rose from '@/assets/images/rose.jpg' 
import back from '@/assets/images/back.png'
import notify from '@/assets/images/notice.png'

const goBack = () => {
  router.push('/dashboard')
}

</script>

<style scoped>
.phone-frame {
  width: 390px;
  height: 844px;
  background-color: #ffffff;
  border-radius: 1.5rem;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}

.phone-frame::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}


.profile-banner {
  background: linear-gradient(90deg, #2563eb, #1e3a8a); /* Tailwind blue gradient */
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  padding: 48px 0 16px;
  color: white;
  position: relative;
  margin-top: 22px;
}

.cursor-pointer-notify {
  margin-right: 45px;
  margin-top: 25px;
}

.cursor-pointer-back {
  margin-left: 45px;
  margin-top: 25px;
}

.text-profile {
  margin-top: 25px;
}
</style>