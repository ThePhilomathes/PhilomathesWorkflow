

const MainComponent = defineAsyncComponent(async() =>{
  return {
    template: await getHTML('./views/main/main.html')
  }
});

   function toggle(id) {
      document.getElementById(id).classList.toggle('hidden');
    }