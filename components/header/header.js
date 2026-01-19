
const HeaderComponent = defineAsyncComponent(async () => {

    return {
        data() {

            const isSideBarOpen = ref(false)
            const menuOpen = ref(false)

            const openMenus = ref({
                billing: false,
                data: false,
            })

            const menuLinks = ref([
                {
                    header: 'Billing', icon: 'fa-solid fa-money-bill', sub: [
                        { header: 'Client Specifics', icon: '', link: '/billingpec' },
                        { header: 'Client Contacts', icon: '', link: '/billingcontact' },
                        { header: 'Department Testimonials', icon: '', link: '/billingkudos' },
                        { header: 'Upcoming Changes', icon: '', link: '/billingupdates' }
                    ]
                },
                {
                    header: 'Data', icon: 'fa-solid fa-database', sub: [
                        { header: 'Client Specifics', icon: '', link: '/billingpec' },
                        { header: 'Client Contacts', icon: '', link: '/billingcontact' },
                        { header: 'Department Testimonials', icon: '', link: '/billingkudos' }
                    ]
                }


            ])

            const toggleSideBar = () => {
                isSideBarOpen.value = !isSideBarOpen.value
            }

            const toggleMenu = (menu) => {
                openMenus.value[menu] = !openMenus.value[menu]
            }


            return {
                menuOpen,
                isSideBarOpen,
                toggleSideBar,
                toggleMenu,
                menuLinks
            }

        },
        template: await getHTML('./components/header/header.html'),
    }

})

