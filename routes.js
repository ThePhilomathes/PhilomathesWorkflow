


const routes = [
    { path: '/', component: MainComponent, name: 'Home' },

    // Billing Router Views//
    { path: '/billing', component: billingComponent, name: 'Billing' },
    { path: '/billingspec', component: billingspecComponent, name: 'Billing Client Specifics' },

    // Data Router Views//
    { path: '/data', component: DataComponent, name: 'Data' },
    { path: '/dataspec', component: dataSpecComponent, name: 'Data Client Specifics' },

    // // About Us Link
    { path: '/aboutus', component: aboutUsComponent, name: 'About Us' },
    { path: '/contactus', component: contactUsComponent, name: 'Contact Us' },
    // // Development Team Link
    { path: '/devteam', component: devTeamComponent, name: 'Developement Team' },
    // // Kudos Link
    { path: '/kudos', component: kudosComponent, name: 'Testimonials' },
    // Submenu Router Views//

    //TO BE ADDED LINKS

    // // Company Leadership Link
    // { path: '/companylead', component: companyLeadComponent, name: 'Company Leadership' },

    // // Quick Links Link
    // { path: '/quicklinks', component: quickLinksComponent, name: 'Quick Links' },
    // // Feedback Link
    // { path: '/feedbackform', component: feedbackFormComponent, name: 'Feedback Form' },
    // { path: '/data', component: Data },
    // { path: '/claims', component: Claims },
    // { path: '/routing', component: Routing },
    // { path: '/qa', component: QA },
    // { path: '/workflow', component: Workflow }




//     // Data Sub-Headers//

//     { path: '/datacontact', component: datacontactComponent, name: 'Data Client Contacts' },
//     { path: '/datakudos', component: datakudosComponent, name: 'Data Testimonials' },
// 
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

// App with hamburger state
const app = createApp({
    data() {
        return {
        }
    }
})

console.log(router.getRoutes())

app.component('header-component', HeaderComponent);
app.use(router)
app.mount('#app')