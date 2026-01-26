<script setup>
import { ref } from 'vue'
import { isSideBarOpen } from '@stores/sidebar'
const menuLinks = ref([
  {
    header: ' Billing',
    icon: 'fa-solid fa-money-bill pr-2 ',
    link: '/billing',
    sub: [
      { header: 'Client Specifics', icon: '', link: '/billingspec' },
      { header: 'Department Testimonials', icon: '', link: '/billingkudos' },
      { header: 'Upcoming Changes', icon: '', link: '/billingupdates' },
    ],
  },
  {
    header: ' Data',
    icon: 'fa-solid fa-database pr-2 ',
    link: '/data',
    sub: [
      { header: 'Client Specifics', icon: '', link: '/dataspec' },
      { header: 'Department Testimonials', icon: '', link: '/datakudos' },
    ],
  },
  {
    header: ' Claims',
    icon: 'fa-solid fa-file pr-2',
    link: '/claims',
    sub: [
      { header: 'Client Specifics', icon: '', link: '/claimspec' },
      { header: 'Claim Definitions', icon: '', link: '/claimcontact' },
      { header: 'Department Testimonials', icon: '', link: '/claimkudos' },
    ],
  },
])
</script>

<template>
  <!-- Sidebar -->
  <aside
    id="sidebar"
    class="fixed inset-y-0 w-72 bg-gray-900 text-gray-200 transition-transform duration-500 z-40 flex flex-col min-h-screen"
    :class="isSideBarOpen ? 'translate-x-0 sm:static' : '-translate-x-full'"
  >
    <!-- Header -->
    <div class="px-5 py-4 text-xl font-semibold border-b border-gray-700">Philomathes Menu</div>

    <!-- Navigation -->
    <nav class="flex-1 px-2 py-4 space-y-2">
      <template v-for="menu in menuLinks" :key="menu.header">
        <div>
          <button
            class="flex items-center w-full px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-800"
          >
            <i :class="menu.icon" class="me-1"></i>
            <router-link :to="menu.link" class="hover:text-sky-300 font-semibold text-lg">
              {{ menu.header }}
            </router-link>
            <span class="ml-auto bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
              {{ menu.sub.length }}
            </span>
          </button>
          <div class="ml-10 mt-2 space-y-1 flex flex-col">
            <template v-for="sub of menu.sub">
              <router-link :to="sub.link" class="hover:text-blue-500">{{ sub.header }}</router-link>
            </template>
          </div>
        </div>
      </template>
    </nav>

    <!-- Footer -->
    <div class="border-t border-gray-700 px-4 py-3 text-sm">
      <p class="font-semisemibold">The Philomathes Workflow</p>
      <p class="text-gray-400">v1.0.0</p>
    </div>
  </aside>
</template>
