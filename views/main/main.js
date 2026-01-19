

const MainComponent = defineAsyncComponent(async () => {
  return {
    data() {

      

    },
    template: await getHTML('./views/main/main.html'),

  }
});



// function toggleMenu(id) {
//   document.getElementById(id).classList.toggle('hidden');
// }

// function toggleSidebar() {
//   document.getElementById('sidebar').classList.toggle('-translate-x-full');
// }

