<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import logo from '@/assets/images/logoo.png' 

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/Login')
  }, 2000)
})
</script>

<template>
  <v-container
    class="d-flex justify-center align-center"
    fluid
    style="min-height: 100vh; background-color: white"
  >
    <div class="phone-frame">
      <div class="logo-container">
        <v-img
          :src="logo"
          alt="App Logo"
          max-width="230"
          contain
        />
      </div>
    </div>
  </v-container>
</template>


<style scoped>
.phone-frame {
  width: 390px;
  height: 844px;
  background-color: #1e40af; /* Blue frame */
  border-radius: 1.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
