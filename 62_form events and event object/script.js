const usernameInput = document.querySelector('#username')
const paragraph = document.querySelector('p')
const form = document.querySelector('form')

// usernameInput.addEventListener("click", function(){
//     alert("button Clicked");
// })
// usernameInput.addEventListener("dblclick", function(){
//     alert("button Clicked");
// })

//input Event
// let eventInput1

// usernameInput.addEventListener("input", (eventParam) =>  {
//     // console.log("input event fired");
//     console.log(eventParam.target.value);
//     paragraph.innerText = eventParam.target.value
//     eventInput1 = eventParam.target.value
// })

//change Event
// usernameInput.addEventListener("change", (eventParam) =>  {
//     // console.log("input event fired");
//     console.log(eventParam.target.value);
//     paragraph.innerText = eventParam.target.value
//     eventInput1 = eventParam.target.value
// })

//focus Event
// usernameInput.addEventListener("focus", (eventParam) =>  {
//     // console.log("input event fired");
//     console.log(eventParam.target.value);
//     paragraph.innerText = eventParam.target.value
//     eventInput1 = eventParam.target.value
// })

form.addEventListener('submit', (eventparam) => {
    eventparam.preventDefault()
    const myFormData = new FormData(form)
    // console.log(myFormData);

    // console.log(myFormData.entries());
    for (const p of myFormData.entries()){
        console.log(p);
    }
})

// form.addEventListener('click', (eventparam) => {
//     eventparam.preventDefault()
//     console.log(eventparam);
//     console.log(eventparam.currentTarget);
//     // console.log('From Clicked');
    
// })
