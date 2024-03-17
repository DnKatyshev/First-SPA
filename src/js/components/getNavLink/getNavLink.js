import '/src/scss/base.scss'
import '/src/js/components/getNavLink/navLink.scss'

import { router } from "/src/js/main.js"

export function getNavLink(path, title){

    let navLi = document.createElement('li')
    navLi.classList.add('header__li')

    let navLink = document.createElement('a')
    navLink.classList.add('header__link')

    navLink.href = path
    navLink.textContent = title

    navLink.addEventListener("click", function (event) {
        event.preventDefault()
        router.navigate(path);
      })
    
    navLi.append(navLink)

    return navLi

}
