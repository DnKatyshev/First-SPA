import '/src/scss/base.scss'
import {createMainTag} from '/src/js/components/getMainTag/getMainTag.js'

import {getHeader} from '/src/js/components/header/header.js'
import {getFooter} from '/src/js/components/footer/footer.js'
import {getHomePage} from '/src/js/pages/homePage/home.js'



import Navigo from "navigo" // Импорт navigo 
export const router = new Navigo('/');


const wrapper = document.querySelector('.wrapper')

const header = getHeader()
const footer = getFooter()
const mainTag = createMainTag()


router.on('/Home', async () => {
    mainTag.sectionContainer.innerHTML = ''
    mainTag.sectionContainer.append(getHomePage())
})
router.on('/Menu', async () => {
    mainTag.sectionContainer.innerHTML = ''
    const menuPageModule = await import('/src/js/pages/menuPage/menu.js')
    mainTag.sectionContainer.append(menuPageModule.getMenuPage())
})
router.on('/Kitchen', async () => {
    mainTag.sectionContainer.innerHTML = ''
    const cookingPageModule = await import('/src/js/pages/cookingPage/cooking.js')
    mainTag.sectionContainer.append(cookingPageModule.getCookingPage())
})
router.on('/Services', async () => {
    mainTag.sectionContainer.innerHTML = ''
    const servicesPageModule = await import('/src/js/pages/servicesPage/services.js')
    mainTag.sectionContainer.append(servicesPageModule.getServicesPage())
})

router.on('/Form', async () => { 
    mainTag.sectionContainer.innerHTML = ''
    const formPageModule = await import('/src/js/pages/formPage/form.js')
    mainTag.sectionContainer.append(formPageModule.getFormPage().form)
})

mainTag.sectionContainer.append(getHomePage()) // подгружаем изначально, это домашняя стр

wrapper.append(header, mainTag.mainTag, footer)

router.resolve();
