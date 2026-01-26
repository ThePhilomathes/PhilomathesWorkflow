<script setup>
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/views/Home.vue'
import Sidebar from '@/components/Sidebar.vue'
const route = useRoute()
</script>

<template>
  <div class="flex flex-row w-full">
    <Sidebar></Sidebar>

    <div class="flex flex-col w-full min-h-screen">
      <Header></Header>
      <div class="max-w-5xl mx-auto p-8 bg-white shadow-sm rounded-lg mt-6">
        <template v-if="route.path == '/'">
          <Home></Home>
        </template>
        <template v-else>
          <RouterView></RouterView>
        </template>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
