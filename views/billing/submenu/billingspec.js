


const billingSpecComponent = defineAsyncComponent(async() =>{
  return {
      data() {
        return {
            searchQuery: "",
            workflows: [
                {
                    type: "Handling Regular Invoices",
                    steps: [
                        "1. Receive service completion confirmation from relevant department",
                        "2. Generate invoice using billing system",
                        "3. Verify invoice details for accuracy",
                        "4. Send invoice to client via email or portal",
                        "5. Track payment status and update records",
                        "6. Follow up with client for pending payments"
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
                    type: "Refund General Procedure",
                    steps: [
                        "1. Receive refund request from client. They must directly state they need or request a refund",
                        "2. Validate request against company policy.",
                        "3. Confirm payment details and transaction history",
                        "4. Process refund through financial system",
                        "5. Notify client of refund completion",
                        "6. Update records and report to finance team",

                        `For the following Clients, a cancellation request would be equivalent to a refund request: 
                        Company 1
                        Company 2
                        Company 3
                        
                        Note: A cancellation request is different from a refund. Please bear in mind the tone of the client.
                        `
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
                        "Receive cancellation request from client",
                        "Verify request details and eligibility",
                        "Check if invoice/payment has been issued",
                        "Adjust billing records accordingly",
                        "Issue refund if applicable",
                        "Confirm cancellation with client and update system"
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
        if (wf.type.toLowerCase().includes(query)) score += 3

        // Medium match: steps
        if (wf.steps.some(step => step.toLowerCase().includes(query))) score += 2

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




