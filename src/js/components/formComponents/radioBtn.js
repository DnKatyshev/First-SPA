import '/src/js/pages/formPage/form.scss'

export function getRadioButtons(name, id, title){

    let radioLi = document.createElement('li')
    radioLi.classList.add('radio__li')

    let btnLabel = document.createElement('label')

    let radioInput = document.createElement('input')
    radioInput.classList.add('radio__input', 'btn-hidden')
    let radioSpan = document.createElement('span')
    radioSpan.classList.add('radio__span')
    radioInput.name = name
    radioInput.id = id
    radioInput.type = 'radio'

    btnLabel.append(radioInput, radioSpan, title)
    radioLi.append(btnLabel)

    return radioLi
}
