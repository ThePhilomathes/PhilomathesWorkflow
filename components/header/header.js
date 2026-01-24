
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
                    header: ' Billing', icon: 'fa-solid fa-money-bill pr-2 ', link:'/billing', sub: [
                        { header: 'Client Specifics', icon: '', link: '/billingpec' },
                        { header: 'Client Contacts', icon: '', link: '/billingcontact' },
                        { header: 'Department Testimonials', icon: '', link: '/billingkudos' },
                        { header: 'Upcoming Changes', icon: '', link: '/billingupdates' }
                    ]
                },
                {
                    header: ' Data', icon: 'fa-solid fa-database pr-2 ', link:'/data', sub: [
                        { header: 'Client Specifics', icon: '', link: '/dataspec' },
                        { header: 'Client Contacts', icon: '', link: '/datacontact' },
                        { header: 'Department Testimonials', icon: '', link: '/datakudos' }
                    ]
                },
                {
                    header: ' Claims', icon: 'fa-solid fa-file pr-2', link:'/claims', sub: [
                        { header: 'Client Specifics', icon: '', link: '/claimspec',},
                        { header: 'Client Contacts', icon: '', link: '/claimcontact' },
                        { header: 'Claim Definitions', icon: '', link: '/claimcontact' },
                        { header: 'Department Testimonials', icon: '', link: '/claimkudos' }
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

