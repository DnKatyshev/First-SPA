import '/src/js/components/footer/footer.scss'

import {getLogo} from '/src/js/components/logo/getLogo.js'
import {footerIcon} from '/src/js/components/footer/footerIcon.js'

import instagramIcon from '/src/images/footer/insta.svg'
import xIcon from '/src/images/footer/X.svg'
import youtubeIcon from '/src/images/footer/youtube.svg'

export function getFooter(){

    let logo = getLogo('/Домашняя')
    

    let footer = document.createElement('footer')
    footer.classList.add('footer')

    let sectionContainer = document.createElement('div')
    sectionContainer.classList.add('container')

    let footerMenu = document.createElement('div')
    footerMenu.classList.add('footer__menu')



    let footerTextItem = document.createElement('div')
    footerTextItem.classList.add('footer__text-item')
    let itemText = document.createElement('p')
    itemText.textContent = 'Насладитесь местом, где каждое желание превращается в кулинарный шедевр'
    footerTextItem.append(logo, itemText)


    let footerSocials = document.createElement('ul')
    footerSocials.classList.add('footer__socials')
    const footerSocialsImg = {
        'instagram': footerIcon(instagramIcon),
        'x': footerIcon(xIcon),
        'youtube': footerIcon(youtubeIcon),
    }
    for(let i in footerSocialsImg){
        footerSocials.append(footerSocialsImg[i])
    }

    
    let footerAuthor = document.createElement('p')
    footerAuthor.classList.add('footer__author')
    footerAuthor.textContent = '© 2024 by Danila Katyshev'


    footerMenu.append(footerTextItem, footerSocials, footerAuthor)
    sectionContainer.append(footerMenu)
    footer.append(sectionContainer)

    return footer
}
