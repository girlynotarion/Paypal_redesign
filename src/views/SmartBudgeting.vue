<script setup>
import { ref } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { useRouter } from 'vue-router'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const router = useRouter()

const chartData = {
  labels: ['Shopping', 'Food', 'Entertainment', 'Hobby'],
  datasets: [
    {
      data: [1250, 850, 700, 450],
      backgroundColor: ['#1976d2', '#fbc02d', '#e53935', '#7e57c2'],
    },
  ],
}

const chartOptions = {
  responsive: true,
  cutout: '60%',
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
}

const monthlyLimit = ref('')
const totalBalance = 3250

const goToDashboard = () => {
  router.push('/dashboard')
}
</script>

<template>
  <v-app>
    <div class="outer-wrapper">
      <div class="phone-frame">

        <!-- Header -->
        <div class="header-bar">
          <h1 class="text-white text-center text-lg font-bold">PayPal</h1>
        </div>

        <!-- Chart and Budget Form -->
        <v-container class="py-6">
          <h3 class="mb-4">Spending Breakdown</h3>
          <!-- Doughnut Chart -->
          <div class="chart-wrapper mb-6">
            <Doughnut :data="chartData" :options="chartOptions" />
          </div>

          <!-- Total Balance -->
          <div class="text-center font-bold text-base mb-4">
            Total Balance: ₱{{ totalBalance.toLocaleString() }}
          </div>

          <!-- Budget Input -->
          <div class="mb-4">
            <label for="budget" class="block font-medium mb-2">Set Monthly Budget Limit:</label>
            <v-text-field
              v-model="monthlyLimit"
              label="Enter limit (PHP)"
              outlined
              dense
            />
          </div>

          <!-- Back Button -->
          <v-btn color="grey darken-1" block @click="goToDashboard">
            Back to Dashboard
          </v-btn>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<style scoped>
.outer-wrapper {
  background-color: #e5e7eb; /* Tailwind gray-200 */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.phone-frame {
  width: 390px;
  height: 844px;
  background-color: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
}

.header-bar {
  background-color: #1e40af; 
  padding: 12px;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}

.chart-wrapper {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
</style>
