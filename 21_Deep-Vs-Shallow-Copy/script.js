// const userName1 = 'Anurag'
// let userName2 = userName1
// userName2 = userName2 + ' Singh'

const fruits = ['Mango', 'Apple', 'Orange']

const myFruits = fruits

// myFruits.push('Dates')
// myFruits.push('kiwi')

// const myFruits = []
// Object.assign(myFruits, fruits)

const myFruits = [...fruits]

const user1 = {
    firstName: 'Anurag',
    lastName: 'Singh',
}

// const user2 = {}

// Object.assign(user2, user1) (old Method)


const user2 ={...user1}

