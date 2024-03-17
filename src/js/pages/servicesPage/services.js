import '/src/js/pages/servicesPage/services.scss'

import {getSectionTitle} from '/src/js/components/sectionTitle/getSectionTitle.js'
import {getSectionBtn} from '/src/js/components/sectionBtn/getBtn.js'
import {getCard1} from '/src/js/components/getCard_1/getCard1.js'

import quality from '/src/images/services/quality.svg'
import delivery from '/src/images/services/delivery.svg'
import online from '/src/images/services/online-ordering.svg'
import gift from '/src/images/services/gifts.svg'

export function getServicesPage(){

    // ======= Общая структура =======
    let sectionServices = document.createElement('section')
    sectionServices.classList.add('services')

    let bodyServices = document.createElement('div')
    bodyServices.classList.add('services__body')

    let menuServices = document.createElement('div')
    menuServices.classList.add('services__menu')


    // ======= Services Content(заголовок + текст + кнопка) =======
    let servicesContent = document.createElement('div')
    servicesContent.classList.add('services__content')
    let sectionTitle = getSectionTitle('Наш кулинарный блог и услуги')
    let servicesText = document.createElement('p')
    servicesText.textContent = 'В нашем кафе вы сможете насладиться вкусной и здоровой едой, лучшей в Иркутске! Мы используем только свежие и натуральные ингредиенты. Наши блюда приготовлены с любовью и заботой о наших гостях. Приходите и попробуйте наши кулинарные шедевры!'
    let btnServices = getSectionBtn('Узнать')
    servicesContent.append(sectionTitle, servicesText, btnServices)


    // ======= Часть с Карточками__тип2 =======
    let servicesCardList = document.createElement('ul')
    servicesCardList.classList.add('services__card-list')

    const card_1_list = {
        'card1': getCard1(quality, 'Качество продуктов', 'Мы предлагаем нашим клиентам свежие, здоровые и вкусные продукты, изготовленные из лучших ингредиентов'),
        'card2': getCard1(delivery, 'Доставка по городу', 'Доставляем нашу еду по всему Иркутску до 00:00. При сумме заказа более 2000 - дотсавка бесплатная '),
        'card3': getCard1(online, 'Онлайн заказы', 'У нас есть возможность онлайн-заказа блюд через это приложение. Также можете позвонить нам, но лучше через приложение)'),
        'card4': getCard1(gift, 'Подарочные сертификаты', 'Предоставляем специальные подарочные сертификаты - на покупку эко-еды в нашем кафе'),
    }

    for(let w in card_1_list){
        servicesCardList.append(card_1_list[w])
    }


        
    // ======= Вкладываем одно в другое - и возвращаем =======
    menuServices.append(servicesContent, servicesCardList)
    bodyServices.append(menuServices)
    sectionServices.append(bodyServices)

    return sectionServices

}
