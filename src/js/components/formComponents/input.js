import '/src/js/pages/formPage/form.scss'

export function getInput(name, type, value){

    let formGroup = document.createElement('div')
    formGroup.classList.add('form__group')

    let formLabelBlock = document.createElement('div')
    formLabelBlock.classList.add('form__label-block')

    let formInput = document.createElement('input')
    formInput.classList.add('form__input')
    formInput.placeholder = ' '
    let formLabel = document.createElement('label')
    formInput.type = type
    formInput.name = name
    formLabel.textContent = value

    // для input-mask
    if(formInput.type = 'tel'){
        formInput.id = 'input-phone'
    }

    formLabelBlock.append(formInput, formLabel)
    formGroup.append(formLabelBlock)

    return formGroup

}
