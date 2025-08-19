const container = document.querySelector('.container')

// for (i = 1; i < 100; i++){
//   const imgContainer = document.createElement('Div')
//   imgContainer.classList.add('img-container')

//   const newImage = document.createElement('img')
//   newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

//   const paragraph = document.createElement('p')
//   paragraph.innerText = i

//   imgContainer.append(paragraph, newImage)
//   container.append(imgContainer)
// }

let myHTML = ``

for (let i = 1; i <= 100; i++){
  myHTML += `
  <div class=img-container>
  <p> ${i} </p>
  <img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png>
  </div>
  `
}

container.innerHTML= myHTML;

const removeElement = document.querySelector("body > div > div:nth-child(6)")
//New Method
removeElement.remove();
container = null;

//Old Method
// removeElement.parentElement.removeChild(removeElement) 