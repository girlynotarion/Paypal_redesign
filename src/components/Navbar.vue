<!-- src/components/Navbar.vue -->
<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>MyApp</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/dashboard">Dashboard</v-btn>
    <v-btn text to="/settings">Settings</v-btn>
  </v-app-bar>
</template>

<script setup>
// Optional: Add any logic for dynamic routing, user state, etc.
</script>
