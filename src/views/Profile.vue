<template>
  <v-container
    class="d-flex justify-center align-center"
    fluid
    style="min-height: 100vh; background-color: white"
  >
    <div class="phone-frame">
      <v-sheet color="#f3f4f6" class="pa-0" height="100%" rounded="xl">
        <!-- Header -->
        <v-row class="px-4 py-2 align-center" justify="space-between">
          <v-icon>mdi-arrow-left</v-icon>
          <span class="font-bold text-lg mt-5 mb-3">Profile</span>
          <v-icon>mdi-bell-outline</v-icon>
        </v-row>

        <!-- Banner & Profile Info -->
        <div class="profile-banner text-center">
          <v-avatar size="96" class="mx-auto mt-n8" color="white" tile>
            <img :src="rose" alt="Profile" class="rounded-full" width="96" height="96" />
          </v-avatar>
          <div class="font-bold text-lg mt-2">Girly Jane Notarion</div>
          <div class="text-blue-600">@girljanenots</div>
          <v-btn class="mt-2" outlined rounded small>Edit</v-btn>
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
              <v-badge
                color="red"
                content="4"
                inline
                bordered
              />
            </v-list-item>
          </v-list>
        </v-card>
      </v-sheet>
    </div>
  </v-container>
</template>

<script setup>
import rose from '@/assets/images/rose.jpg' 
</script>

<style scoped>
.phone-frame {
  width: 390px;
  height: 844px;
  background-color: #ffffff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.profile-banner {
  background: linear-gradient(90deg, #2563eb, #1e3a8a); /* Tailwind blue gradient */
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  padding: 48px 0 16px;
  color: white;
  position: relative;
}
</style>
