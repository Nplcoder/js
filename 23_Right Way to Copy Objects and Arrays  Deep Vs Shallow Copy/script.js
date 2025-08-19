
// const username1 = 'Anurag'
// let username2 = username1
// username2 = username2 + ' Singh'

const fruits = ['Mango', 'Apple', 'Orange']

// const myFruits = fruits

// myFruits.push('Dates')
// myFruits.push('Grapes')

// Object.assign(myFruits, fruits)
const myFruits = [...fruits]

// const myFruits = [].concat(fruits)
// const myFruits = fruits.slice()

const user1 = {
  firstName: 'Anurag',
  lastName: 'Singh',
  pata: {
    city: 'Delhi',
    pincode: 989888,
  },
  subject: ['Physics', 'CS', 'Maths']
}

// Shallow Copy

// const user2 = {}
// Object.assign(user2, user1)
// const user2 = { ...user1 }

//Deep copy
const user2 = JSON.parse(JSON.stringify(user1)); // Deep Copy
user2.subject.push('Social'); // Modify copied object

console.log(user1); // Original remains unchanged
console.log(user2); // New object with modified subject
