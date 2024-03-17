import '/src/js/components/getCard_1/getCard1.scss'

export function getCard1(img, title, descr){
    let cardLi_1 = document.createElement('li')
    cardLi_1.classList.add('card-li')

    let card_1_Img = document.createElement('img')
    let card_1_Title = document.createElement('h3')
    let card_1_Descr = document.createElement('p')

    card_1_Img.src = img
    card_1_Title.textContent = title
    card_1_Descr.textContent = descr

    cardLi_1.append(card_1_Img, card_1_Title, card_1_Descr)

    return cardLi_1
}
