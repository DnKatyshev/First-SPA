import '/src/js/pages/menuPage/menu.scss'

import {getSectionTitle} from '/src/js/components/sectionTitle/getSectionTitle.js'
import {getCard2} from '/src/js/components/getCard_2/getCard2.js'

import salad1 from '/src/images/menu/salad1.png'
import salad2 from '/src/images/menu/salad2.png'
import salad3 from '/src/images/menu/salad3.png'

export function getMenuPage(){

    // ======= Общая структура =======
    let sectionMenu = document.createElement('section')
    sectionMenu.classList.add('menu')

    let bodyMenu = document.createElement('div')
    bodyMenu.classList.add('menu__body')


    
    // ======= Часть с Карточками__тип2 =======
    let sectionTitle = getSectionTitle('Наши самые вкусные блюда')

    let menuCardBlock = document.createElement('div')
    menuCardBlock.classList.add('menu__card')
    let menuCardList = document.createElement('ul')
    menuCardList.classList.add('menu__card-list--second')

    const card_2_list = {
        'dish1': getCard2(salad1, 'Салат "Фаттуш"', '(5 блюд)', '/Салат-Фатуш'),
        'dish2': getCard2(salad2, 'Салат "Песто"', '(12 блюд)'),
        'dish3': getCard2(salad3, 'Салат с тофу и индейкой', '(14 блюд)'),
        'dish4': getCard2(salad1, 'Салат "Фаттуш"', '(5 блюд)'),
        'dish5': getCard2(salad2, 'Салат "Песто"', '(12 блюд)'),
        'dish6': getCard2(salad3, 'Салат с тофу и индейкой', '(14 блюд)'),
    }

    for(let v in card_2_list){
        menuCardList.append(card_2_list[v])
    }


    // ======= Вкладываем одно в другое - и возвращаем =======
    menuCardBlock.append(sectionTitle, menuCardList)
    bodyMenu.append(menuCardBlock)
    sectionMenu.append(bodyMenu)

    return sectionMenu
}
