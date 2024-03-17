import '/src/js/pages/formPage/form.scss'

export function getCheckboxButtons(name, id, title){

    let checkboxLi = document.createElement('li')
    checkboxLi.classList.add('checkbox__li')

    let btnLabel = document.createElement('label')

    let checkboxInput = document.createElement('input')
    checkboxInput.classList.add('checkbox__input', 'btn-hidden')
    let checkboxSpan = document.createElement('span')
    checkboxSpan.classList.add('checkbox__span')
    checkboxInput.name = name
    checkboxInput.id = id
    checkboxInput.type = 'checkbox'

    btnLabel.append(checkboxInput, checkboxSpan, title)
    checkboxLi.append(btnLabel)

    return checkboxLi
}