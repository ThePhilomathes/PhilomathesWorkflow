const billingspecComponent = defineAsyncComponent(async () => {
    return {
        data() {
            return {
                searchQuery: "",
                workflows: [
                    {
                        type: "Handling Regular Invoices",
                        steps: [
                            { description: "1. Receive service completion confirmation from relevant department" },
                            { description: "2. Generate invoice using billing system" },
                            { description: "3. Verify invoice details for accuracy" },
                            { description: "4. Send invoice to client via email or portal" },
                            { description: "5. Track payment status and update records" },
                            { description: "6. Follow up with client for pending payments" },
                        ]
                        ,
                        manager:
                            "Invoicing - Monthly",

                        examples: [
                            {
                                title: "Client 3 Invoice: Automated invoice sent via portal",
                                link: "https://www.youtube.com/"
                            }
                        ]
                    },
                    {
                        type: "Refund General Procedure",
                        steps: [
                            { description: "1. Receive refund request from client. They must directly state they need or request a refund", },
                            { description: "2. Validate request against company policy." },
                            { description: "3. Confirm payment details and transaction history" },
                            { description: "4. Process refund through financial system" },
                            { description: "5. Notify client of refund completion" },
                            { description: "6. Update records and report to finance team" },
                            {
                                description: "For the following Clients, a cancellation request would be equivalent to a refund request:", sub: [
                                    "Company 1",
                                    "Company 2",
                                    "Company 3",
                                ], note: 'Note: A cancellation request is different from a refund. Please bear in mind the tone of the client.'
                            },

                        ]
                        ,
                        manager:
                            "Zean",

                        examples: [
                            {
                                title: "Client 3 Invoice: Automated invoice sent via portal",
                                link: "https://www.youtube.com/"
                            }
                        ]
                    },
                    {
                        type: "Cancellations",
                        steps: [
                            { description: "Receive cancellation request from client" },
                            { description: "Verify request details and eligibility" },
                            { description: "Check if invoice/payment has been issued" },
                            { description: "Adjust billing records accordingly" },
                            { description: "Issue refund if applicable" },
                            { description: "Confirm cancellation with client and update system" },
                        ],
                        manager:
                            "Zean",

                        examples: [
                            {
                                title: "Client 3 Invoice: Automated invoice sent via portal",
                                link: "https://www.youtube.com/"
                            }
                        ]
                    },

                    {
                        type: "Message Procedure to Clients",
                        steps: [
                            { description: "Identify the request of the client" },
                            { description: "When messaging the client}, follow updated signature under General Workflow guidelines" },
                            { description: "Double-check the email and attachments before sending" },
                            { description: "Make sure that the recepient is the most updated contact from the system" },
                            { description: "Once everything has been double-checked}, proceed with sending the message to client" },
                            { description: "" },
                            { description: "Keep in mind of the following clients that requires different contact approach: " },
                            { description: "Company 1" },
                            { description: "Company 2" },
                            { description: "Company 3" },
                            { description: "Company 4" },
                            { description: "" },
                            { description: "Check the Client Specifics tab for special scenarios." },
                        ]
                    },
                    {
                        type: "Automated Invoice Workflow  (Updated 01-23-26 2:50 PM PST)",
                        steps: [
                            { description: "Service completion auto-logged in billing system." },
                            { description: "Invoice auto-generated with client details pre-filled." },
                            { description: "System validation ensures accuracy before sending." },
                            { description: 'Invoice automatically emailed to client via portal.' },
                            { description: "Payments tracked in real-time dashboard." },

                        ]
                        ,
                        manager:
                            "Generating Invoice",

                        examples: [
                            {
                                title: "Client 3 Invoice: Automated invoice sent via portal",
                                link: "https://www.youtube.com/"
                            }
                        ]

                    }
                ]
            }
        },

computed: {
  filteredWorkflows() {
    if (!this.searchQuery) return this.workflows
    const query = this.searchQuery.toLowerCase()

    return this.workflows
      .map(wf => {
        let score = 0

        // Strong match: workflow name
        if (wf.type && wf.type.toLowerCase().includes(query)) score += 3

        // Medium match: steps (description, note, sub)
        if (Array.isArray(wf.steps) && wf.steps.some(step =>
          (step.description && step.description.toLowerCase().includes(query)) ||
          (step.note && step.note.toLowerCase().includes(query)) ||
          (step.sub && step.sub.some(sub => sub.toLowerCase().includes(query)))
        )) score += 2

        // Weak match: manager
        if (wf.manager && wf.manager.toLowerCase().includes(query)) score += 1

        return { ...wf, score }
      })
      .filter(wf => wf.score > 0) // keep only matches
      .sort((a, b) => b.score - a.score) // sort by score descending
  }
},


        template: await getHTML('./views/billing/submenu/billingspec.html')
    }
});




