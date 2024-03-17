export function footerIcon(img, path){
    let iconLi = document.createElement('li')
    iconLi.classList.add('footer__icon-li')

    let iconLink = document.createElement('a')
    iconLink.classList.add('footer__icon-link')

    let iconImg = document.createElement('img')
    iconImg.classList.add('footer__icon')
    iconImg.src = img

    iconLink.append(iconImg)
    iconLink.href = path
    iconLi.append(iconLink)

    return iconLi
}