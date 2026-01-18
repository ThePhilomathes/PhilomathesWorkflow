const MainComponent = defineAsyncComponent(async() =>{
  return {
    template: await getHTML('./views/main/sidebar.html')
  }
});

function toggleMenu(id) {
    document.getElementById(id).classList.toggle('hidden');
  }

  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('-translate-x-full');
  }
