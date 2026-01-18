

const MainComponent = defineAsyncComponent(async() =>{
  return {
    template: await getHTML('./views/main/main.html')
  }
});

   function toggle(id) {
      document.getElementById(id).classList.toggle('hidden');
    }

    document.querySelectorAll('.section-header').forEach(header => {
  header.addEventListener('click', () => {
    const list = header.nextElementSibling;
    list.classList.toggle('collapsed');
  });
});

