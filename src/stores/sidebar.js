import { ref } from 'vue'

const isSideBarOpen = ref(false)

const toggleSideBar = () => {
  isSideBarOpen.value = !isSideBarOpen.value
}

export { toggleSideBar, isSideBarOpen }
