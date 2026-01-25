


const routes = [
    { path: '/', component: MainComponent, name: 'Home' },

    // Billing Router Views//
    { path: '/billing', component: billingComponent, name: 'Billing' },
    { path: '/billingspec', component: billingSpecComponent, name: 'Billing Client Specifics' },
    { path: '/billingkudos', component: billingKudosComponent, name: 'Billing Testimonials' },

    // Data Router Views//
    { path: '/data', component: DataComponent, name: 'Data' },
    { path: '/dataspec', component: dataSpecComponent, name: 'Data Client Specifics' },
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