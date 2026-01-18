

const MainComponent = defineAsyncComponent(async() =>{
  return {
    template: await getHTML('./views/main/main.html')
  }
});



