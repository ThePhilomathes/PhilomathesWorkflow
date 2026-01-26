<script setup>
import { ref, computed } from 'vue'
const searchQuery = ref('')
const workflows = ref([
  {
    type: 'Handling Regular Invoices',
    steps: [
      { description: '1. Receive service completion confirmation from relevant department' },
      { description: '2. Generate invoice using billing system' },
      { description: '3. Verify invoice details for accuracy' },
      { description: '4. Send invoice to client via email or portal' },
      { description: '5. Track payment status and update records' },
      { description: '6. Follow up with client for pending payments' },
    ],
    manager: 'Invoicing - Monthly',

    examples: [
      {
        title: 'Client 3 Invoice: Automated invoice sent via portal',
        link: 'https://www.youtube.com/',
      },
    ],
  },
  {
    type: 'Refund General Procedure',
    steps: [
      {
        description:
          '1. Receive refund request from client. They must directly state they need or request a refund',
      },
      { description: '2. Validate request against company policy.' },
      { description: '3. Confirm payment details and transaction history' },
      { description: '4. Process refund through financial system' },
      { description: '5. Notify client of refund completion' },
      { description: '6. Update records and report to finance team' },
      {
        description:
          'For the following Clients, a cancellation request would be equivalent to a refund request:',
        sub: ['Company 1', 'Company 2', 'Company 3'],
        note: 'Note: A cancellation request is different from a refund. Please bear in mind the tone of the client.',
      },
    ],
    manager: 'Zean',

    examples: [
      {
        title: 'Client 3 Invoice: Automated invoice sent via portal',
        link: 'https://www.youtube.com/',
      },
    ],
  },
  {
    type: 'Cancellations',
    steps: [
      { description: 'Receive cancellation request from client' },
      { description: 'Verify request details and eligibility' },
      { description: 'Check if invoice/payment has been issued' },
      { description: 'Adjust billing records accordingly' },
      { description: 'Issue refund if applicable' },
      { description: 'Confirm cancellation with client and update system' },
    ],
    manager: 'Zean',

    examples: [
      {
        title: 'Client 3 Invoice: Automated invoice sent via portal',
        link: 'https://www.youtube.com/',
      },
    ],
  },

  {
    type: 'Message Procedure to Clients',
    steps: [
      { description: 'Identify the request of the client' },
      {
        description:
          'When messaging the client}, follow updated signature under General Workflow guidelines',
      },
      { description: 'Double-check the email and attachments before sending' },
      { description: 'Make sure that the recepient is the most updated contact from the system' },
      {
        description:
          'Once everything has been double-checked}, proceed with sending the message to client',
      },
      { description: '' },
      {
        description:
          'Keep in mind of the following clients that requires different contact approach: ',
      },
      { description: 'Company 1' },
      { description: 'Company 2' },
      { description: 'Company 3' },
      { description: 'Company 4' },
      { description: '' },
      { description: 'Check the Client Specifics tab for special scenarios.' },
    ],
  },
  {
    type: 'Automated Invoice Workflow  (Updated 01-23-26 2:50 PM PST)',
    steps: [
      { description: 'Service completion auto-logged in billing system.' },
      { description: 'Invoice auto-generated with client details pre-filled.' },
      { description: 'System validation ensures accuracy before sending.' },
      { description: 'Invoice automatically emailed to client via portal.' },
      { description: 'Payments tracked in real-time dashboard.' },
    ],
    manager: 'Generating Invoice',

    examples: [
      {
        title: 'Client 3 Invoice: Automated invoice sent via portal',
        link: 'https://www.youtube.com/',
      },
    ],
  },
])
const filteredWorkflows = computed(() => {
  if (!searchQuery.value) return workflows.value

  const query = searchQuery.value.toLowerCase()

  return workflows.value
    .map((wf) => {
      let score = 0

      // Strong match: workflow name
      if (wf.type?.toLowerCase().includes(query)) score += 3

      // Medium match: steps
      if (Array.isArray(wf.steps) && wf.steps.some((step) => step.toLowerCase().includes(query))) {
        score += 2
      }

      // Weak match: manager
      if (wf.manager?.toLowerCase().includes(query)) score += 1

      return { ...wf, score }
    })
    .filter((wf) => wf.score > 0)
    .sort((a, b) => b.score - a.score)
})
</script>

<template>
  <h1 class="text-3xl font-bold mb-4 text-blue-700">Billing Deparment's Client Specific Tasks</h1>
  <p class="mb-6 text-gray-600">Billing Deparment's Client Specific Tasks</p>

  <!-- Updates -->
  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-2 text-blue-700 bg-blue-100 p-2 rounded">
      Billing Department News
    </h2>
    <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
      <li>
        <strong>Dec 23 2025 1:23:56 PM PST:</strong> Workflow update for automated invoice
        generation.
      </li>
      <li><strong>Dec 3 2025 1:40:53 PM PST:</strong> Meeting on refund policy improvements.</li>
      <li>
        <strong>Nov 12 2025 4:23:53 PM PST:</strong> Training session scheduled for handling
        cancellations more efficiently.
      </li>
    </ul>
    <!-- Collapsible Detailed Update -->
    <details class="bg-gray-50 border border-gray-200 rounded p-4 shadow">
      <summary class="cursor-pointer text-blue-700 font-semibold">
        View Detailed Update: Automated Invoice Workflow
      </summary>
      <div class="mt-4 space-y-4">
        <h4 class="font-semibold text-gray-800">Previous Workflow</h4>
        <ol class="list-decimal list-inside text-gray-700 space-y-1">
          <li>Manual entry of invoice details into Excel.</li>
          <li>Cross-check invoice with finance team.</li>
          <li>Send invoice PDF manually to client.</li>
          <li>Track payments using spreadsheets.</li>
        </ol>
        <h4 class="font-semibold text-gray-800 mt-4">Updated Workflow</h4>
        <ol class="list-decimal list-inside text-gray-700 space-y-1">
          <li>Service completion auto-logged in billing system.</li>
          <li>Invoice auto-generated with client details pre-filled.</li>
          <li>System validation ensures accuracy before sending.</li>
          <li>Invoice automatically emailed to client via portal.</li>
          <li>Payments tracked in real-time dashboard.</li>
        </ol>
      </div>
    </details>
  </section>

  <!-- Search -->
  <section class="mb-8">
    <!-- Search Bar -->
    <div class="bg-blue-100 p-4 rounded shadow mb-6">
      <h2 class="text-xl font-semibold mb-2 text-blue-700">🔍 Search Workflows</h2>

      <!-- Input + Clear Button inline -->
      <div class="flex items-center space-x-3">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Type to search workflows, steps, or manager..."
          class="flex-1 p-3 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          @click="searchQuery = ''"
          class="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition"
        >
          Clear
        </button>
      </div>

      <p class="text-sm text-gray-600 mt-2">
        Enter keywords like "invoice", "refund", "cancellation", or a manager’s name.
      </p>
    </div>

    <!-- Results Count -->
    <div v-if="filteredWorkflows.length > 0" class="mb-4 text-blue-700 font-medium">
      Showing {{ filteredWorkflows.length }} result<span v-if="filteredWorkflows.length > 1"
        >s</span
      >
    </div>

    <!-- No Results Found -->
    <div
      v-if="filteredWorkflows.length === 0"
      class="text-center text-gray-600 bg-gray-100 p-6 rounded shadow min-h-[200px] flex flex-col justify-center"
    >
      <p class="text-lg font-semibold">No results found</p>
      <p class="text-sm">Try adjusting your search keywords.</p>
    </div>

    <!-- Workflow Table -->
    <table
      v-else
      class="table-fixed w-full border-collapse border border-gray-300 rounded-lg shadow-lg"
    >
      <thead class="bg-blue-500 text-white">
        <tr>
          <th class="p-3 text-left">Workflow</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(wf, index) in filteredWorkflows" :key="index" class="border-t border-gray-200">
          <td class="p-0 w-full">
            <details open class="group w-full transition-all duration-300 ease-in-out">
              <summary
                class="flex justify-between items-center cursor-pointer bg-blue-100 p-4 hover:bg-blue-200 transition"
              >
                <span class="font-semibold text-blue-700 text-lg truncate">
                  {{ wf.type.replace(/workflow/i, '').trim() }}
                </span>
                <svg
                  class="w-5 h-5 transform transition-transform duration-300 group-open:rotate-90 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </summary>

              <!-- Expanded content -->
              <div
                class="p-4 bg-white border-t border-gray-300 w-full block space-y-4 min-h-[200px]"
              >
                <!-- Steps -->
                <div class="border-b border-gray-300 pb-4">
                  <h4 class="text-blue-600 font-medium mb-2">Steps</h4>
                  <ul class="list-inside text-gray-700 space-y-2">
                    <template v-for="(step, stepIndex) in wf.steps" :key="i">
                      <li>{{ stepIndex + 1 }}. {{ step.description }}</li>
                      <ul v-if="step.sub" class="list-none ms-5 mt-2 space-y-2">
                        <template v-for="sub in step.sub" :key="sub">
                          <li>
                            {{ sub }}
                          </li>
                        </template>
                      </ul>
                      <template v-if="step.note">
                        <li>
                          {{ step.note }}
                        </li>
                      </template>
                    </template>
                  </ul>
                </div>

                <!-- Job Manager -->
                <div class="border-b border-gray-300 pb-4">
                  <h4 class="text-blue-600 font-medium mb-2">Task Name</h4>
                  <p class="italic text-gray-600">{{ wf.manager || 'N/A' }}</p>
                </div>

                <!-- Examples -->
                <div>
                  <h4 class="text-blue-600 font-medium mb-2">Examples</h4>
                  <ul class="list-inside text-gray-700 space-y-2">
                    <li v-for="(ex, i) in wf.examples" :key="i">
                      <a
                        :href="ex.link"
                        target="_blank"
                        class="text-blue-500 hover:underline flex items-center space-x-2"
                      >
                        <span>{{ ex.title }}</span>
                        <svg
                          class="w-4 h-4 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 3h7v7m0-7L10 14m-4 7h14a2 2 0 002-2V10"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </details>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
