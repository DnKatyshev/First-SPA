import '/src/js/pages/formPage/form.scss'

export function getSelectionOption(text){

    let option = document.createElement('option')
    option.classList.add('option')
    option.name = 'district'
    option.textContent = text

    return option
}