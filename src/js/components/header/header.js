import '/src/js/components/header/header.scss'

import {getLogo} from '/src/js/components/logo/getLogo.js'
import {getSectionBtn} from '/src/js/components/sectionBtn/getBtn.js'
import {getNavLink} from '/src/js/components/getNavLink/getNavLink.js'


export function getHeader(){

    let logo = getLogo('/Домашняя')
    let btn = getSectionBtn('Связаться')
    btn.classList.add('header__btn')


    let header = document.createElement('header')
    header.classList.add('header')

    let sectionContainer = document.createElement('div')
    sectionContainer.classList.add('container')

    let headerMenu = document.createElement('div')
    headerMenu.classList.add('header__menu')

    let headerNav = document.createElement('nav')
    headerNav.classList.add('header__nav')

    let headerList = document.createElement('ul')
    headerList.classList.add('header__list')

   const navigateLinks = {
        "menu": getNavLink('/Меню', 'Меню'),
        "cuisine": getNavLink('/Кухня', 'Кухня'),
        "services": getNavLink('/Услуги', 'Услуги'),
   }

   for(let i in navigateLinks){
      headerList.append(navigateLinks[i])
   }
   headerNav.append(headerList)

   headerMenu.append(logo, headerNav, btn)
   sectionContainer.append(headerMenu)
   header.append(sectionContainer)

   return header

}
