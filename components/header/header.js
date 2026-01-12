
const HeaderComponent = defineAsyncComponent(() =>
    fetch('./components/header/header.html')
        .then(res => res.text())
        .then(template => ({
            template, data() {
                return {
                    menuOpen: false
                }
                
            }
        }))
)