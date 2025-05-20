<template>
  <div class="app-wrapper">
    <div class="phone-frame">
      <v-container class="pa-4" fluid>
        <!-- Back Arrow and Search -->
        <v-row class="align-center mb-6">
          <v-col cols="1" class="d-flex align-center" style="width: auto;">
            <v-img
              :src="back"
              alt="Back"
              class="back-arrow"
              @click="goBack"
              width="20"
              height="20"
            />
          </v-col>
          <v-col cols="11">
            <v-text-field
              v-model="search"
              placeholder="Name, username or email"
              variant="solo"
              flat
              hide-details
              rounded
              density="compact"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- Text Content -->
        <v-row justify="center" class="text-center">
          <v-col cols="12">
            <h2 class="font-weight-bold">Let’s find your contacts</h2>
            <p class="text-subtitle-1 mt-2 mb-6">
              Search by name, username, email, phone, or by enabling your contacts.
            </p>
            <v-btn
              variant="text"
              color="primary"
              class="text-capitalize"
              @click="enableContacts"
            >
              <v-icon start>mdi-account-box</v-icon>
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
  
  const router = useRouter()
  const recipient = ref('')
  const amount = ref('')
  const note = ref('')
  
  function sendMoney() {
    if (recipient.value && amount.value) {
      alert(`Sent $${amount.value} to ${recipient.value}`)
      router.push('/dashboard')
    } else {
      alert('Please fill in recipient and amount.')
    }
  }

  const goBack = () => {
  router.push('/dashboard')
}

const enableContacts = () => {
  // Logic to request contact access
  console.log('Enable contacts clicked')
}
  </script>

<style scoped>
.app-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of viewport */
  background-color: #f5f5f5; /* Optional background */
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
  margin-left: 10px;
}
</style>

  