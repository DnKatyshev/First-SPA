export function createMainTag(){
    const mainTag = document.createElement('main')
    mainTag.classList.add('main')

    let sectionContainer = document.createElement('div')
    sectionContainer.classList.add('container')

    mainTag.append(sectionContainer)

    return {mainTag, sectionContainer}
}