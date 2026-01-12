


const BillingComponent = defineAsyncComponent(async() =>{
  return {
      data() {
        return {
            searchQuery: "",
            workflows: [
                {
                    type: "Invoices",
                    steps: [
                        "Receive service completion confirmation from relevant department",
                        "Generate invoice using billing system",
                        "Verify invoice details for accuracy",
                        "Send invoice to client via email or portal",
                        "Track payment status and update records",
                        "Follow up with client for pending payments"
                    ]
                },
                {
                    type: "Refunds",
                    steps: [
                        "Receive refund request from client",
                        "Validate request against company policy",
                        "Confirm payment details and transaction history",
                        "Process refund through financial system",
                        "Notify client of refund completion",
                        "Update records and report to finance team"
                    ]
                },
                {
                    type: "Cancellations",
                    steps: [
                        "Receive cancellation request from client",
                        "Verify request details and eligibility",
                        "Check if invoice/payment has been issued",
                        "Adjust billing records accordingly",
                        "Issue refund if applicable",
                        "Confirm cancellation with client and update system"
                    ]
                }
            ]
        }
    },
    computed: {
        filteredWorkflows() {
            if (!this.searchQuery) return this.workflows
            const query = this.searchQuery.toLowerCase()
            return this.workflows.filter(wf =>
                wf.type.toLowerCase().includes(query) ||
                wf.steps.some(step => step.toLowerCase().includes(query))
            )
        }
    },
    template: await getHTML('./views/billing/billing.html')
  }
});



