<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div class="text-center max-w-md">
      <h1 class="text-7xl font-extrabold text-gray-800">404</h1>
      <p class="mt-4 text-xl font-semibold text-gray-700">Page not found</p>
      <p class="mt-2 text-gray-500">The page you’re looking for doesn’t exist or was moved.</p>

      <button
        @click="goHome"
        class="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
      >
        Go back home
      </button>
    </div>
  </div>
</template>
