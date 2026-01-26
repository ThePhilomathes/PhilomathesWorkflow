
const aboutUsComponent = defineAsyncComponent(async() =>{
  return {
    template: await getHTML('./views/aboutus/aboutus.html')
  }
});




