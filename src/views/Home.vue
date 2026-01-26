<script setup>
import images from '@stores/images'

const toggleZoom = (clickedImg) => {
  const images = document.querySelectorAll('img')
  const overlay = document.getElementById('overlay')

  // Remove zoom and z-index from all other images
  images.forEach((img) => {
    if (img !== clickedImg) {
      img.classList.remove('scale-[3]', 'z-50')
    }
  })

  // Toggle zoom on the clicked image
  clickedImg.classList.toggle('scale-[3]')
  clickedImg.classList.toggle('z-50')

  // Show overlay if any image is zoomed
  if ([...images].some((img) => img.classList.contains('scale-[3]'))) {
    overlay.classList.remove('hidden')
    // trigger fade-in
    setTimeout(() => overlay.classList.add('opacity-100'), 10)
  } else {
    // trigger fade-out
    overlay.classList.remove('opacity-100')
    // after fade-out, hide completely
    setTimeout(() => overlay.classList.add('hidden'), 300)
  }
}
</script>

<template>
  <!-- Company Info -->
  <h1 class="text-3xl sm:text-4xl font-bold mb-4 text-blue-700">Welcome to Our Company</h1>
  <p class="mb-6 text-gray-600">
    We are a leading provider of innovative solutions in healthcare administration, dedicated to
    efficiency, accuracy, and customer satisfaction.
  </p>

  <!-- Main Content -->
  <main class="p-8">
    <!-- Company News -->
    <h2
      class="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-blue-700 bg-blue-100 p-2 rounded"
    >
      Company News & Updates
    </h2>
    <ul class="list-disc list-inside mb-6 text-gray-700">
      <li><strong>Jan 20 2026; 2:32:20am PST :</strong> Launched new claims processing system.</li>
      <li><strong>Dec 02 2025; 9:42:52am PST :</strong> Achieved ISO 9001 certification.</li>
      <li>
        <strong>Nov 14 2025; 5:12:13am PST :</strong> Expanded Data Department with analytics team.
      </li>
    </ul>

    <!-- Gallery -->
    <div class="bg-sky-600 pb-4 px-3">
      <h4 class="text-center font-semibold py-2 text-xl text-white">
        Company Accomplishments 2025
      </h4>
      <div class="gallery-wrap flex w-full h-[25rem]">
        <div
          class="item flex-1 w-[20rem] h-50 bg-center md:bg-cover bg-no-repeat transition-all duration-800 ease-out hover:flex-[7] ease-in-out cursor-pointer transform relative"
          :style="{
            backgroundImage: `url(${images.zendesk || 'https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&w=1352&q=80'})`,
          }"
          @click="toggleZoom"
        ></div>

        <div
          class="item flex-1 w-[20rem] h-50rem md:bg-cover bg-center bg-no-repeat transition-all duration-800 ease-out hover:flex-[7] ease-in-out cursor-pointer transform relative"
          :style="{
            backgroundImage: `url(${images.SO2 || 'https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&w=1352&q=80'})`,
          }"
          @click="toggleZoom"
        ></div>

        <div
          class="item flex-1 w-[20rem] h-50 bg-center md:bg-cover bg-no-repeat transition-all duration-800 ease-out hover:flex-[7] ease-in-out cursor-pointer transform relative"
          :style="{
            backgroundImage: `url(${images.fortinet || 'https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&w=1352&q=80'})`,
          }"
          @click="toggleZoom"
        ></div>

        <div
          class="item flex-1 w-[20rem] h-50 bg-center md:bg-cover bg-center bg-no-repeat transition-all duration-800 ease-out hover:flex-[7] ease-in-out cursor-pointer transform relative"
          style="
            background-image: url('https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&w=1352&q=80');
          "
          @click="toggleZoom"
        ></div>

        <div
          class="item flex-1 w-[20rem] h-50 bg-center md:bg-cover bg-center bg-no-repeat transition-all duration-800 ease-out hover:flex-[7] ease-in-out cursor-pointer transform relative"
          style="
            background-image: url('https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1234&q=80');
          "
          onclick="toggleZoom(this)"
        ></div>
      </div>
    </div>

    <!-- Directory -->
    <h2
      class="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-blue-700 bg-blue-100 p-2 rounded"
    >
      Department Directory
    </h2>
    <table class="w-full border border-red-500 mb-6">
      <thead class="bg-blue-100">
        <tr>
          <th class="border px-4 py-2 text-left">Department</th>
          <th class="border px-4 py-2 text-left">Function</th>
        </tr>
      </thead>
      <tbody>
        <!-- Billing Department -->
        <tr>
          <td class="border px-4 py-2">Billing Department</td>
          <td class="border px-4 py-2">
            Manages invoices, payment processing, financial records, and ensures compliance with
            accounting standards.
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Billing <b>Operations Contact List</b></td>
          <td class="border px-4 py-2">
            <details class="rounded p-4 shadow">
              <summary class="cursor-pointer text-sky-700 font-semibold">
                View Contact List: Updated as of 1/25/26 6:21 AM PST
              </summary>
              <div class="mt-4 space-y-4">
                <h4 class="font-semibold text-gray-800">US Contacts</h4>
                <ol class="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Billing Team Process Lead: billingprocesslead@ThePhilomathes.com</li>
                  <li>Operations #1: operations3@ThePhilomathes.com</li>
                  <li>Operations #2: operations4@ThePhilomathes.com</li>
                </ol>
                <h4 class="font-semibold text-gray-800">PH Contacts</h4>
                <ol class="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Billing Team Process Lead: billingprocesslead@ThePhilomathes.com</li>
                  <li>Operations #3: operations3@ThePhilomathes.com</li>
                  <li>Operations #4: operations4@ThePhilomathes.com</li>
                </ol>
              </div>
            </details>
          </td>
        </tr>

        <!-- Data Department -->
        <tr>
          <td class="border px-4 py-2">Data Department</td>
          <td class="border px-4 py-2">
            Handles analytics, reporting, database management, and supports decision-making with
            insights.
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Data <b>Operations Contact List</b></td>
          <td class="border px-4 py-2">
            <details class="rounded p-4 shadow">
              <summary class="cursor-pointer text-sky-700 font-semibold">
                View Contact List: Updated as of 1/02/26 4:21 AM PST
              </summary>
              <div class="mt-4 space-y-4">
                <h4 class="font-semibold text-gray-800">US Contacts</h4>
                <ol class="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Data Team Process Lead: billingprocesslead@ThePhilomathes.com</li>
                  <li>Operations #1: operations3@ThePhilomathes.com</li>
                  <li>Operations #2: operations4@ThePhilomathes.com</li>
                </ol>
                <h4 class="font-semibold text-gray-800">PH Contacts</h4>
                <ol class="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Data Team Process Lead: billingprocesslead@ThePhilomathes.com</li>
                  <li>Operations #3: operations3@ThePhilomathes.com</li>
                  <li>Operations #4: operations4@ThePhilomathes.com</li>
                </ol>
              </div>
            </details>
          </td>
        </tr>

        <!-- Claims Department -->
        <tr>
          <td class="border px-4 py-2">Claims Department</td>
          <td class="border px-4 py-2">
            Processes client claims, verifies documentation, and ensures timely resolution of cases.
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Claims <b>Operations Contact List</b></td>
          <td class="border px-4 py-2">
            <details class="rounded p-4 shadow">
              <summary class="cursor-pointer text-sky-700 font-semibold">
                View Contact List: Updated as of 1/25/26 6:21 AM PST
              </summary>
              <div class="mt-4 space-y-4">
                <h4 class="font-semibold text-gray-800">US Contacts</h4>
                <ol class="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Claims Team Process Lead: billingprocesslead@ThePhilomathes.com</li>
                  <li>Operations #1: operations3@ThePhilomathes.com</li>
                  <li>Operations #2: operations4@ThePhilomathes.com</li>
                </ol>
                <h4 class="font-semibold text-gray-800">PH Contacts</h4>
                <ol class="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Claims Team Process Lead: billingprocesslead@ThePhilomathes.com</li>
                  <li>Operations #3: operations3@ThePhilomathes.com</li>
                  <li>Operations #4: operations4@ThePhilomathes.com</li>
                </ol>
              </div>
            </details>
          </td>
        </tr>

        <!-- Routing Department -->
        <tr>
          <td class="border px-4 py-2">Routing Department</td>
          <td class="border px-4 py-2">
            Directs requests to appropriate departments, manages communication flow, and optimizes
            response times.
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Routing <b>Operations Contact List</b></td>
          <td class="border px-4 py-2">
            <details class="rounded p-4 shadow">
              <summary class="cursor-pointer text-sky-700 font-semibold">
                View Contact List: Updated as of 1/25/26 6:21 AM PST
              </summary>
              <div class="mt-4 space-y-4">
                <h4 class="font-semibold text-gray-800">US Contacts</h4>
                <ol class="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Routing Team Process Lead: billingprocesslead@ThePhilomathes.com</li>
                  <li>Operations #1: operations3@ThePhilomathes.com</li>
                  <li>Operations #2: operations4@ThePhilomathes.com</li>
                </ol>
                <h4 class="font-semibold text-gray-800">PH Contacts</h4>
                <ol class="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Routing Team Process Lead: billingprocesslead@ThePhilomathes.com</li>
                  <li>Operations #3: operations3@ThePhilomathes.com</li>
                  <li>Operations #4: operations4@ThePhilomathes.com</li>
                </ol>
              </div>
            </details>
          </td>
        </tr>

        <!-- Quality Assurance -->
        <tr>
          <td class="border px-4 py-2">Quality Assurance</td>
          <td class="border px-4 py-2">
            Monitors service quality, conducts audits, and implements improvements for customer
            satisfaction.
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Quality Assurance <b>Operations Contact List</b></td>
          <td class="border px-4 py-2">
            <details class="rounded p-4 shadow">
              <summary class="cursor-pointer text-sky-700 font-semibold">
                View Contact List: Updated as of 1/25/26 6:21 AM PST
              </summary>
              <div class="mt-4 space-y-4">
                <h4 class="font-semibold text-gray-800">US Contacts</h4>
                <ol class="list-decimal list-inside text-gray-700 space-y-1">
                  <li>
                    Quality Assurance Team Process Lead: billingprocesslead@ThePhilomathes.com
                  </li>
                  <li>Operations #1: operations3@ThePhilomathes.com</li>
                  <li>Operations #2: operations4@ThePhilomathes.com</li>
                </ol>
                <h4 class="font-semibold text-gray-800">PH Contacts</h4>
                <ol class="list-decimal list-inside text-gray-700 space-y-1">
                  <li>
                    Quality Assurance Team Process Lead: billingprocesslead@ThePhilomathes.com
                  </li>
                  <li>Operations #3: operations3@ThePhilomathes.com</li>
                  <li>Operations #4: operations4@ThePhilomathes.com</li>
                </ol>
              </div>
            </details>
          </td>
        </tr>

        <!-- Workflow Development -->
        <tr>
          <td class="border px-4 py-2">Workflow Development Department</td>
          <td class="border px-4 py-2">
            Focuses on investigating current workflows and provides opportunities for improvements.
            Designs, tests, and optimizes workflows to enhance efficiency and reduce operational
            bottlenecks.
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Workflow Development <b>Operations Contact List</b></td>
          <td class="border px-4 py-2">
            <details class="rounded p-4 shadow">
              <summary class="cursor-pointer text-sky-700 font-semibold">
                View Contact List: Updated as of 1/25/26 6:21 AM PST
              </summary>
              <div class="mt-4 space-y-4">
                <h4 class="font-semibold text-gray-800">US Contacts</h4>
                <ol class="list-decimal list-inside text-gray-700 space-y-1">
                  <li>
                    Workflow Development Team Process Lead: billingprocesslead@ThePhilomathes.com
                  </li>
                  <li>Operations #1: operations3@ThePhilomathes.com</li>
                  <li>Operations #2: operations4@ThePhilomathes.com</li>
                </ol>
                <h4 class="font-semibold text-gray-800">PH Contacts</h4>
                <ol class="list-decimal list-inside text-gray-700 space-y-1">
                  <li>
                    Workflow Development Team Process Lead: billingprocesslead@ThePhilomathes.com
                  </li>
                  <li>Operations #3: operations3@ThePhilomathes.com</li>
                  <li>Operations #4: operations4@ThePhilomathes.com</li>
                </ol>
              </div>
            </details>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Employee Stats -->
    <h2
      class="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-blue-700 bg-blue-100 p-2 rounded"
    >
      Employee Statistics
    </h2>
    <ul class="list-inside pl-4 text-gray-700 gap-2">
      <li>Total Employees: 250</li>
      <li>Average Tenure: 5 years</li>
      <li>Departments: 6</li>
      <li>Remote Workforce: 40%</li>
    </ul>

    <!-- FAQ Section -->
    <div
      class="relative w-full bg-white px-6 pt-10 mb-10 pb-10 mt-8 shadow-xl ring-1 ring-gray-900/5 md:mx-auto md:max-w-2xl sm:rounded-lg sm:px-10"
    >
      <div class="mx-auto px-5 mb-5">
        <div class="flex flex-col items-center">
          <h2 class="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
          <p class="mt-3 text-lg text-neutral-500 md:text-xl">Frequently asked questions</p>
        </div>
        <div class="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          <!-- FAQ Items -->
          <div class="py-5">
            <details class="group">
              <summary
                class="flex cursor-pointer list-none items-center justify-between font-medium"
              >
                <span> How do I submit a workflow request?</span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit
                quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
                Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus
                leo eu aenean.
              </p>
            </details>
          </div>
          <!-- Add other FAQ items similarly -->
        </div>
      </div>
    </div>

    <!-- Quote Section -->
    <div class="mt-5">
      <blockquote class="text-center text-2xl font-semibold text-gray-900 italic dark:text-white">
        <span class="text-sky-800"> Everyday's a </span>
        <span
          class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500"
        >
          <span class="relative text-white dark:text-gray-950"> struggle </span>
        </span>
        <span class="text-sky-800"> ; it is up to you if you see it as </span>
        <span
          class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500"
        >
          <span class="relative text-white dark:text-gray-950"> Growth </span>
        </span>
        <span class="text-sky-800"> or </span>
        <span
          class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500"
        >
          <span class="relative text-white dark:text-gray-950"> Burden </span>
        </span>
      </blockquote>
    </div>
  </main>
</template>
