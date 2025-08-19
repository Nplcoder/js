console.log('Program Started');

// let i = 0

// debugger

// while (i <= 100){
//     console.log('i');
//     i = i += 1
// }

const friends = ['Bikash', 'Ram', 'Hari', 'Sita','Gita']

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);

let i = 0

while (i < friends.length){
    console.log(`${i + 1}. ${friends[i]}`);
    friends[i] = friends[i] + ' Procoderr'
    i++
}

console.log('Program Ended');