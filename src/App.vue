<!-- App.vue -->
<template>
  <v-app>
    <Navbar v-if="showNavbar" />
    <router-view />
  </v-app>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Hide Navbar on login page
const showNavbar = computed(() => route.path !== '/SplashScreen')
</script>
