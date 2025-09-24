const listcontainer = document.querySelector('#listContainer')

const mouseEventTest = document.querySelector('.mouseEvent')
// console.log(listcontainer)

for (let i =1; i <=3; i++){
    const li = document.createElement('li');
    li.textContent = `Item${i}`
    listcontainer.appendChild(li)
}

// ------------------------------------------------

const container = document.querySelector('#container')
const img = document.createElement('img')

img.src = 'image.jpg'
img.alt = 'Sample Image'

container.appendChild(img);

mouseEventTest.addEventListener('pointer', () => {
    console.log('click')
})