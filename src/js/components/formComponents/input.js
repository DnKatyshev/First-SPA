import '/src/js/pages/formPage/form.scss'
import Inputmask from "inputmask"

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

    // TYPE: tel  InputMask
    if(formInput.type == 'tel'){
        let im = new Inputmask('+7 (999) 999-99-99', {
                showMaskOnHover: false
            })
        im.mask(formInput)
    }

    // //------------------------------

    formLabelBlock.append(formInput, formLabel)
    formGroup.append(formLabelBlock)

    return formGroup

}
