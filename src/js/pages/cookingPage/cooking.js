import '/src/js/pages/cookingPage/cooking.scss'

import {getSectionTitle} from '/src/js/components/sectionTitle/getSectionTitle.js'

import cooking from '/src/images/cooking/healthy-food--2.png'


export function getCookingPage(){

    // ======= Общая структура =======
    let sectionCooking = document.createElement('section')
    sectionCooking.classList.add('cooking')

    let bodyCooking = document.createElement('div')
    bodyCooking.classList.add('cooking__body')

    let menuCooking = document.createElement('div')
    menuCooking.classList.add('cooking__menu')


     // ======= Часть с Карточками__тип2 =======
    let cookingImgBlock = document.createElement('div')
    cookingImgBlock.classList.add('cooking__img')
    let cookingImg = document.createElement('img')
    cookingImg.src = cooking
    cookingImgBlock.append(cookingImg)

    let cookingContent = document.createElement('div')
    cookingContent.classList.add('cooking__content')
    let sectionTitle = getSectionTitle('Философия правильного питания')
    let cookingText = document.createElement('p')
    cookingText.classList.add('cooking__text')
    cookingText.textContent = 'Правильное питание имеет огромное философское значение для человека, оно является основой здоровья и качества жизни. Сбалансированный рацион помогает поддерживать нормальный вес, снижает риск различных заболеваний и способствует улучшению общего состояния организма. Кроме того, правильное питание формирует здоровые пищевые привычки, которые могут передаваться из поколения в поколение, способствуя укреплению здоровья и увеличению продолжительности жизни.'
    cookingContent.append(sectionTitle, cookingText)

    let cookingQuote = document.createElement('h2')
    cookingQuote.classList.add('cooking__quote')
    cookingQuote.append('"Тем, кто считает, что у них нет времени на здоровое питание, рано или поздно придется искать время на лечение болезней"')

        
    // ======= Вкладываем одно в другое - и возвращаем =======
    menuCooking.append(cookingImgBlock, cookingContent)
    bodyCooking.append(menuCooking, cookingQuote)
    sectionCooking.append(bodyCooking)

    return sectionCooking

}
