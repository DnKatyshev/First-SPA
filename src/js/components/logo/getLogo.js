import '/src/scss/base.scss'
import logoSvg from '/src/images/header/logo.svg'

import { router } from "/src/js/main.js"

export function getLogo(path){

    let logo = document.createElement('div')
    logo.classList.add('logo')

    let logoLink = document.createElement('a')
    logoLink.classList.add('logo__link')

    let logoImg = document.createElement('img')
    logoImg.src = logoSvg

    logoLink.append(logoImg)
    logo.append(logoLink)

    logo.addEventListener('click', (event) => {
        event.preventDefault()
        router.navigate(path)
    })

    return logo
}