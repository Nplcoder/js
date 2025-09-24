const addCardBtn = document.querySelector(".add-card");
const container = document.querySelector(".container");
const cardList = document.querySelector(".card");

let count = 1;

// Method 1 - EventListener in cards
// addCardBtn.addEventListener('click', () => {
//     console.log('click')
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     newCard.addEventListener('click', () =>{
//         newCard.remove()
//     })
// })

// Method 2 - EventListener in Parent

addCardBtn.addEventListener("click", () => {
  console.log("click");
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

container.addEventListener("click", (e) => {
  if (e.target !== container) {
    e.target.remove();
  }
});
