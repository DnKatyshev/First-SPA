import '/src/js/pages/HomePage/home.scss'

import {getSectionTitle} from '/src/js/components/sectionTitle/getSectionTitle.js'
import {getSectionBtn} from '/src/js/components/sectionBtn/getBtn.js'
import {getCard1} from '/src/js/components/getCard_1/getCard1.js'

import girl from '/src/images/home/girl.png'
import videoBtn from '/src/images/home/video-btn.svg'

import mainDish from '/src/images/home/cards_1/burger.png'
import breakFast from '/src/images/home/cards_1/sandwich.png'
import desert from '/src/images/home/cards_1/icecream.png'
import drink from '/src/images/home/cards_1/drink.png'


export function getHomePage(){

    // ======= Общая структура =======
    let sectionHome = document.createElement('section')
    sectionHome.classList.add('home')

    let bodyHome = document.createElement('div')
    bodyHome.classList.add('home__body')

    // ======= Первый layout =======
    let sectionTitle = getSectionTitle('Окунитесь в мир вкусной и здоровой еды')

    let homeLayout = document.createElement('div')
    homeLayout.classList.add('home__layout')
    let homeContent = document.createElement('div')
    homeContent.classList.add('home__content')
    let homeParagraph = document.createElement('p')
    homeParagraph.classList.add('home__text')
    homeParagraph.textContent = 'Где каждое блюдо подарит спокойствие и вернёт в детство'
    let homeButtons = document.createElement('div')
    homeButtons.classList.add('home__buttons')
    let btn1 = getSectionBtn('Заказать')
    let btn2 = getSectionBtn('Наше кафе', videoBtn)
    homeButtons.append(btn1, btn2)
    homeContent.append(sectionTitle, homeParagraph, homeButtons)

    let homeImageBlock = document.createElement('div')
    homeImageBlock.classList.add('home__image')
    let homeImage = document.createElement('img')
    homeImage.src = girl
    homeImageBlock.append(homeImage)
    homeLayout.append(homeContent, homeImageBlock)


    // ======= Часть с Карточками__тип1 =======
    let homeCardBlock = document.createElement('div')
    homeCardBlock.classList.add('home__card')
    let card_1_Title = getSectionTitle('Популярные категории')
    let homeCardList = document.createElement('ul')
    homeCardList.classList.add('home__card-list')

    const card_1_list = {
        'card1': getCard1(mainDish, 'Главное блюдо', '(5 блюд)'),
        'card2': getCard1(breakFast, 'Перекусы', '(12 блюд)'),
        'card3': getCard1(desert, 'Десерты', '(14 блюд)'),
        'card4': getCard1(drink, 'Напитки', '(17 напитков)'),
    }

    for(let j in card_1_list){
        homeCardList.append(card_1_list[j])
    }
    
    
    // ======= Вкладываем одно в другое - и возвращаем =======
    homeCardBlock.append(card_1_Title, homeCardList)
    bodyHome.append(homeLayout, homeCardBlock)
    sectionHome.append(bodyHome)

    return sectionHome

}
