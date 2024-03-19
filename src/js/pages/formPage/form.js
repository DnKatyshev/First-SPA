import '/src/js/pages/formPage/form.scss'

import {getInput} from '/src/js/components/formComponents/input.js'
import {getRadioButtons} from '/src/js/components/formComponents/radioBtn.js'
import {getCheckboxButtons} from '/src/js/components/formComponents/checkboxBtn.js'
import {getSelectionOption} from '/src/js/components/formComponents/selection.js'

import {getFetch} from '/src/js/extra/fetch.js'
import Choices from 'choices.js'


export function getFormPage(){

    // Общий контейнер для  Формы,  radio/checkbox кнопок,  списка
    const form = document.createElement('form')
    form.classList.add('form')

    // Сама Форма с инпутами
    let formMain = document.createElement('div')
    formMain.classList.add('form__main')

    let title = document.createElement('h3')
    title.classList.add('form__title')
    title.textContent = 'Ваш заказ:'

    const getInputs = {
        'field-1': getInput('name', 'text', 'Имя'),
        'field-2': getInput('phone', 'tel', 'Телефон'),
        'field-3': getInput('address', 'text', 'Адрес'),
        'field-4': getInput('wish', 'text', 'Пожелания к заказу:'),
    }

    for(let x in getInputs){
        formMain.append(getInputs[x])
    }
 
    
    // Radio + check buttons
    let radio = document.createElement('div')
    radio.classList.add('radio')
    let radioMain = document.createElement('ul')
    radioMain.classList.add('radio__main')
    let checkbox = document.createElement('div')
    checkbox.classList.add('checkbox')
    let checkboxMain = document.createElement('ul')
    checkboxMain.classList.add('checkbox__main')

    let radioTitle = document.createElement('h3')
    radioTitle.classList.add('buttons-title', 'radio__title')
    radioTitle.textContent = 'Доставка:'
    let checkboxTitle = document.createElement('h3')
    checkboxTitle.classList.add('buttons-title', 'checkbox__title')
    checkboxTitle.textContent = 'Доп. меню:'


    const getRadioBtns = {
        'radio-1': getRadioButtons('delivery', 'self', 'Самовывоз'),
        'radio-2': getRadioButtons('delivery', 'courier', 'Курьером'),
    }
    for(let i in getRadioBtns){
        radioMain.append(getRadioBtns[i])
    }
    radio.append(radioTitle, radioMain)


    const getCheckBtns = {
        'check-1': getCheckboxButtons('diabetes', 'diabetes-menu', 'Диабетическое меню'),
        'check-2': getCheckboxButtons('gluten', 'gluten-menu', 'Непереносимость глютена'),
        'check-3': getCheckboxButtons('vegan', 'vegan-menu', 'Вегетерианское меню'),
    }
    for(let j in getCheckBtns){
        checkboxMain.append(getCheckBtns[j])
    }
    checkbox.append(checkboxTitle, checkboxMain)



    // SELECTION + OPTION's  - через библ. Choices.js
    let select = document.createElement('select')
    select.classList.add('select', 'js-choice')

    // делаем placeholder 
    let optionPlaceholder = document.createElement('option')
    optionPlaceholder.value = ''
    optionPlaceholder.textContent = 'Район'
    optionPlaceholder.disabled = true
    select.append(optionPlaceholder)

    const getOptions = {
        'district-1': getSelectionOption('Тракторозаводской'),
        'district-2': getSelectionOption('Краснооктябрьский'),
        'district-3': getSelectionOption('Дзержинский'),
        'district-4': getSelectionOption('Центральный'),
        'district-6': getSelectionOption('Ворошиловский'),
        'district-7': getSelectionOption('Советский'),
        'district-8': getSelectionOption('Кировский'),
        'district-9': getSelectionOption('Красноармейский'),
    }
    for(let v in getOptions){ 
        select.append(getOptions[v])
    }

    // let choices = new Choices(select, {
    //     searchEnabled: false,
    // })


    // Кнопка отправки
    let formBtn = document.createElement('button')
    formBtn.type = 'submit'
    formBtn.classList.add('send-button')
    formBtn.textContent = 'Отправить'
    formBtn.addEventListener('click', (e) => {
        e.preventDefault()
        getFetch()
    }) 


    

    form.append(title, formMain, radio, checkbox, select, formBtn)



    // ---- extra settings ----
    window.scrollTo({  
        top: 0,
        behavior: "instant"})
    
    //-----------------------


    return form

}
