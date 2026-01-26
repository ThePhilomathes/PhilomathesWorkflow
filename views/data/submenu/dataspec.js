


const dataSpecComponent = defineAsyncComponent(async() =>{
  return {
      data() {
        return {
            searchQuery: "",
            workflows: [
                {
                    type: "Handling Regular Invoices",
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
                    type: "Refund General Procedure",
                    steps: [
                        "Receive refund request from client. They must directly state they need or request a refund",
                        "Validate request against company policy.",
                        "Confirm payment details and transaction history",
                        "Process refund through financial system",
                        "Notify client of refund completion",
                        "Update records and report to finance team",
                        '',
                        `Note: A cancellation request is different from a refund. Please bear in mind the tone of the client

                        <\n> For the following Clients, a cancellation request would be equivalent to a refund request:

                        Company 1
                        Company 2
                        Company 3`
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
                },
                {
                    type: "Message Procedure to Clients",
                    steps: [
                        "Identify the request of the client",
                        "When messaging the client, follow updated signature under General Workflow guidelines",
                        "Double-check the email and attachments before sending",
                        "Make sure that the recepient is the most updated contact from the system",
                        "Once everything has been double-checked, proceed with sending the message to client",
                        "",
                        "Keep in mind of the following clients that requires different contact approach: ",
                        "Company 1",             
                        "Company 2",
                        "Company 3",
                        "Company 4",
                        "",
                        "Check the Client Specifics tab for special scenarios."
                    ]
                },
                {
                    type: "Automated Invoice Workflow  (Updated 01-23-26 2:50 PM PST)",
                    steps: [
                        "Service completion auto-logged in billing system.",
                        "Invoice auto-generated with client details pre-filled.",
                        "System validation ensures accuracy before sending.",
                        'Invoice automatically emailed to client via portal.',
                        "Payments tracked in real-time dashboard."

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
    template: await getHTML('./views/data/submenu/dataspec.html')
  }
});



