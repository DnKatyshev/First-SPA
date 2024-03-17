import '/src/js/components/sectionTitle/getSectionTitle.scss'

export function getSectionTitle(text){

    let title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = text

    return title
}
