<script setup>
import Footer from '@components/Footer.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { isSideBarOpen, toggleSideBar } from '@stores/sidebar'

const menuOpen = ref(false)
</script>

<template>
  <!-- Content Wrapper -->
  <div class="transition-all duration-300 sticky top-0 z-[9999]">
    <!-- Header -->
    <header class="bg-sky-800 text-white px-6 py-4 flex items-center justify-between">
      <div class="flex flex-row">
        <div class="h-full justify-center">
          <button
            @click="toggleSideBar"
            class="z-50 bg-blue-600 text-white px-3 py-2 rounded-md shadow hover:bg-blue-700"
          >
            ☰
          </button>
        </div>

        <div class="flex flex-col ml-2">
          <h1 class="text-xl sm:text-2xl font-semibold">The Philomathes Inc.</h1>
          <p class="text-sm sm:text-base">Phone: +63 2 1234 5678 | Fax: +63 2 8765 4321</p>
        </div>
      </div>

      <!-- Hamburger Menu Button (mobile) -->
      <button @click="menuOpen = !menuOpen" class="sm:hidden focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <!-- Navigation (desktop) -->
      <div class="flex">
        <nav class="hidden sm:flex gap-2">
          <router-link to="/" class="p-1 font-semibold hover:text-yellow-500"
            >Main Page</router-link
          >
          <router-link to="/aboutus" class="p-1 font-semibold hover:text-yellow-500"
            >About Us</router-link
          >
          <!-- <router-link to="/companylead" class="p-1 font-semibold  hover:text-yellow-500">Company Leadership</router-link> -->
          <router-link to="/devteam" class="p-1 font-semibold hover:text-yellow-500"
            >Development Team</router-link
          >
          <router-link to="/kudos" class="p-1 font-semibold hover:text-yellow-500"
            >Testimonials</router-link
          >
          <!-- <router-link to="/quicklinks" class="p-1 font-semibold  hover:text-yellow-500">Quick Links</router-link> -->
          <router-link to="/contactus" class="p-1 font-semibold hover:text-yellow-500"
            >Contact Us</router-link
          >
          <!-- <router-link to="/feedbackform" class="p-1 font-semibold  hover:text-yellow-500">Feedback Form</router-link> -->
        </nav>
      </div>
    </header>

    <!-- Mobile Menu -->
    <nav v-if="menuOpen" class="sm:hidden bg-blue-300 text-white px-6 py-4 flex flex-col gap-4">
      <router-link to="/" class="p-1 font-semibold hover:text-yellow-500">Main Page</router-link>
      <router-link to="/aboutus" class="p-1 font-semibold hover:text-yellow-500"
        >About Us</router-link
      >
      <!-- <router-link to="/companylead" class="p-1 font-semibold  hover:text-yellow-500">Company Leadership</router-link> -->
      <router-link to="/devteam" class="p-1 font-semibold hover:text-yellow-500"
        >Development Team</router-link
      >
      <router-link to="/kudos" class="p-1 font-semibold hover:text-yellow-500"
        >Testimonials</router-link
      >
      <!-- <router-link to="/quicklinks" class="p-1 font-semibold  hover:text-yellow-500">Quick Links</router-link> -->
      <router-link to="/contactus" class="p-1 font-semibold hover:text-yellow-500"
        >Contact Us</router-link
      >
      <!-- <router-link to="/feedbackform" class="p-1 font-semibold  hover:text-yellow-500">Feedback Form</router-link> -->
    </nav>
  </div>
</template>
