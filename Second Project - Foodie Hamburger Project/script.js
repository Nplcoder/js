const hamburgerIcon = document.querySelector('.hamburger-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')
const nav = document.querySelector('nav')

hamburgerIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    headerContent.classList.add('menu-open')
})

headerContent.addEventListener('click',(e) => {
    e.stopPropagation()
} )

nav.addEventListener('click',(e) => {
    e.stopPropagation()
} )

closeIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})

window.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})