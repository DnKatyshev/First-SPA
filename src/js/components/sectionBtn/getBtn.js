import '/src/js/components/sectionBtn/btn.scss'

export function getSectionBtn(btnText, img){
    let btn = document.createElement('a')
    btn.classList.add('section-btn')

    btn.textContent = btnText

    if(img){
        let newBtnImg = document.createElement('img')
        newBtnImg.src = img
        btn.append(newBtnImg)

        btn.classList.add('section-btn--mod')
    }

    return btn
}