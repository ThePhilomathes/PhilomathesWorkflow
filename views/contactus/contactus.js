
const contactUsComponent = defineAsyncComponent(async() =>{
  return {

    template: await getHTML('./views/contactus/contactus.html')
  }
});
