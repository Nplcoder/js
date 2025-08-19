const button = document.querySelector('button')
const popup = document.querySelector('.popup-container')
const closeIcon = document.querySelector('.close-icon')
const overLay = document.querySelector('.overlay')


button.addEventListener('click', () => {
    popup.classList.add('open')
})

closeIcon.addEventListener('click', () => {
    popup.classList.remove('open')
})

overLay.addEventListener('click', () => {
    popup.classList.remove('open')
})