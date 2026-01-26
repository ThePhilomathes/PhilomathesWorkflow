
const devTeamComponent = defineAsyncComponent(async() =>{
  return {
    template: await getHTML('./views/devteam/devteam.html')
  }
});




