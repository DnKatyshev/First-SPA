// import '/src/phpMailer/mailer.php'   -  почему при импорте ошибка?


export function getFetch(){


    function validation() { 

        function removeError(input) {
            let inputParent = input.closest('.form__group')

            if (input.classList.contains('error')) {
                inputParent.querySelector('.error-label').remove()
                input.classList.remove('error')
            }
        }

        function createError(input, text) {
            let inputParent = input.closest('.form__group')
            let errorParagraph = document.createElement('p')

            input.classList.add('error')
            errorParagraph.classList.add('error-label')
            errorParagraph.textContent = text

            inputParent.append(errorParagraph)
        }


        let result = true

        let formInputs = this.querySelectorAll('.form__input')
        formInputs.forEach(input => {

            removeError(input)

            if (input.value == '') {
                createError(input, 'Поле не заполнено!')
                result = false
            }
        })

        return result
    }

    
    // функция для отправки на ПОЧТУ
    async function postSend(e) {

        e.preventDefault()

        let formData = new FormData(this)

        if(validation.call(this)){

            let response = await fetch('mailer.php', {
                method: 'POST',
                body: formData
            })
    
            if (response.ok) {
                alert('Успешно отправлено!')
                this.reset()
                return await response.text()
            } else {
                alert('Ошибка на сервере!')
                this.reset()
            }

        }

    } 



    let allForms = document.querySelectorAll('form')
    allForms.forEach((form) => {
        form.addEventListener('submit', postSend);
    })

}
