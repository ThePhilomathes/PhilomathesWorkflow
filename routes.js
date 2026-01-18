


const routes = [
    { path: '/', component: MainComponent, name: 'Home' },
    { path: '/billing', component: BillingComponent, name: 'Billing' },
    { path: '/data', component: DataComponent, name: 'Data' },
    // { path: '/data', component: Data },
    // { path: '/claims', component: Claims },
    // { path: '/routing', component: Routing },
    // { path: '/qa', component: QA },
    // { path: '/workflow', component: Workflow }

    // Billing Sub-Headers//
    { path: '/billingspec', component: DataComponent, name: 'Billing Client Specifics' },
    { path: '/billingcontact', component: DataComponent, name: 'Billing Client Contacts' },
    { path: '/billingkudos', component: DataComponent, name: 'Billing Testimonials' },
    // Data Sub-Headers//
    { path: '/dataspec', component: DataComponent, name: 'Data Client Specifics' },
    { path: '/datacontact', component: DataComponent, name: 'Data Client Contacts' },
    { path: '/datakudos', component: DataComponent, name: 'Data Testimonials' },
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