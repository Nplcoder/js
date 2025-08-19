const button = document.querySelector('button')
const closeIcon = document.querySelector('.close-icon')
const popup = document.querySelector('.popup')
const popupContainer = document.querySelector('.popup-container')

// const overLay = document.querySelector('.overlay')


button.addEventListener('click', () => {
    popupContainer.classList.add('open');
});

closeIcon.addEventListener('click', () => {
    popupContainer.classList.remove('open');
});

popup.addEventListener('click', (e) => {
    e.stopPropagation();
});

popupContainer.addEventListener('click', () => {
    popupContainer.classList.remove('open');
});

// overLay.addEventListener('click', () => {
//     popupContainer.classList.remove('open')
// })

// *************************

// button.addEventListener('click', () => {
//     popupContainer.classList.add('open')
//     popupContainer.classList.add('open')
// })

// closeIcon.addEventListener('click', () => {
//     popupContainer.classList.remove('open')
//     popupContainer.classList.remove('open')
// })

// popup.addEventListener('click', (e) => {
//     e.stopPropagation()
// })

// popupContainer.addEventListener('click', () => {
//     popupContainer.classList.remove('open')
//     popupContainer.classList.remove('open')
// })