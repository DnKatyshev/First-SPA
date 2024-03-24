import {getFormPage} from '/src/js/pages/formPage/form.js'

    export function setLocalStorage(){
        if(this.type != 'checkbox' && this.type != 'radio'){
            localStorage.setItem(this.name, this.value)
        }
        else{
            localStorage.setItem(this.id, this.checked)
        }
    }


    // export function startWidthLocalStorage(){

    //     for(let i = 0; i < formElements.length; i++){
    //         if(formElements[i].type != 'checkbox' && formElements[i].type != 'radio'){
    //             formElements[i].value = localStorage.getItem(formElements[i].name)
    //         }
    //         else{
    //             formElements[i].checked = localStorage.getItem(formElements[i].id)
    //         }
    //     }

    // }

    export function clearStorage(){
        localStorage.clear()
    }


 