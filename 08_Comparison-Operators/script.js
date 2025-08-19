const userAge1 = 18
const userAge2 = '18'
const userAge3 = '24'
const userAge4 = 24

console.log(userAge1 == userAge2);
console.log(userAge1 === userAge2);
console.log(parseInt(userAge2) === userAge1);
console.log(userAge1 === +userAge2);

console.log(userAge1 != userAge2);
console.log(userAge1 != userAge3);

console.log(userAge1 !== +userAge2);
console.log(userAge1 !== +userAge3);


console.log(userAge1 > userAge4);
console.log(userAge1 < userAge4);

console.log(userAge4 >= userAge1);
console.log(userAge1 <= userAge4);


