import '/src/js/components/getCard_2/getCard2.scss'
import {getSectionBtn} from '/src/js/components/sectionBtn/getBtn.js'

import { router } from "/src/js/main.js"

export function getCard2(img, title, descr){
    let cardLi_2 = document.createElement('li')
    cardLi_2.classList.add('card-li--second')

    let card_2_Img = document.createElement('img')
    let card_2_Title = document.createElement('h3')
    let card_2_Descr = document.createElement('p')
    let card_2_Decor = document.createElement('span')

    let btn = getSectionBtn('Заказать')
    btn.classList.add('card2-btn')

    btn.addEventListener("click", function (event) {
        event.preventDefault()
        router.navigate('/Form');
      })

    card_2_Img.src = img
    card_2_Title.textContent = title
    card_2_Descr.textContent = descr

    cardLi_2.append(card_2_Img, card_2_Title, card_2_Descr, btn, card_2_Decor)

    return cardLi_2
}
