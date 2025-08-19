const userName = prompt ('Please enter your Name') || ('Pro')
const userAge = parseInt (prompt ('Please enter your Age')) || (22)

// const isCollegeStudent = 

console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);

if (userAge >= 25 && userAge <= 45){   
    console.log(`${userName} is a working professional and He is a WebDeveloper.`);
    // console.log('User is a college student and S/He is learning computer science');
 }

if (userAge > 45){   
    console.log("User is a Retired.");
 }
console.log('Program Ended!!');