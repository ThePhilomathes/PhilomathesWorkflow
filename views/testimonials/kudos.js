
const kudosComponent = defineAsyncComponent(async() =>{
  return {
    template: await getHTML('./views/testimonials/kudos.html')
  }
});




