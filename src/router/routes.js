const route = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@views/Main.vue'),
    children: [
      {
        path: '/billingspec',
        name: 'BillingSpec',
        component: () => import('@views/BillingSpec.vue'),
      },
      {
        path: '/billingkudos',
        name: 'DepartmentTestimonials',
        component: () => import('@views/DepartmentTestimonials.vue'),
      },
      {
        path: '/aboutus',
        name: 'AboutUS',
        component: () => import('@views/About.vue'),
      },
      {
        path: '/devteam',
        name: 'DevTeam',
        component: () => import('@views/DevTeam.vue'),
      },
      {
        path: '/kudos',
        name: 'Testimonials',
        component: () => import('@views/Testimonials.vue'),
      },
      {
        path: '/contactus',
        name: 'ContactUS',
        component: () => import('@views/ContactUS.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@components/404.vue'),
  },
]

export default route
