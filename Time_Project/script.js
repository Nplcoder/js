const form = document.querySelector('form')
const user1Input = document.querySelector('input#user-1')
const user2Input = document.querySelector('input#user-2')
const p = document.querySelector('p')

const local = document.querySelector('.local span')
const utc = document.querySelector('.utc span')
const iso = document.querySelector('.iso span')

form.addEventListener('submit',(e) => {
    e.preventDefault()
    const user1AgeInMs = Date.now() - parseDateString(user1Input.value).getTime()
    const user2AgeInMs  = Date.now() - parseDateString(user2Input.value).getTime()
    
    if(user1AgeInMs > user2AgeInMs){
        p.innerText = ("User 1 is older than user 2");
    }else if(user1AgeInMs < user2AgeInMs) {
        p.innerText = ("User 2 in older than user 1");
    }else {
        p.innerText = ("Both are of same age");
    }
    
    // const user2Date = new Date(user2Input.value)

//     const timeStamp = Number(input.value)
//     const date =  new Date(timeStamp)
//     local.innerText = date.toLocaleDateString('en-GB', {
//         dateStyle: 'full',
//         timeStyle: 'full',
//     });
//     utc.innerText = date.toUTCString();
//     iso.innerText = date.toISOString();
})

function parseDateString(dobString){
    const [dateString, timeString] = dobString.split(' ');
    const [day, Month, Year] = dateString.split('/').map(el => Number(el))
    const [hour, minute] = timeString.split(':').map(el => Number(el))
    return new Date(
        Year, 
        Month -1, 
        day, 
        hour, 
        minute )
    
   ;
}