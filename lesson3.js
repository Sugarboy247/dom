// const now = new Date()
// console.log(now)

// const now = new Date()
// console.log(now.getTime())


// let firstName = "Taiwo";
// let lastName = "Oladipupo";
// let country = "NGN";
// let city = "Lagos";
// let age = 24;
// let isMarried = false;
// let year = 2000;

// // Check data types
// console.log(typeof firstName);
// console.log(typeof lastName); 
// console.log(typeof country); 
// console.log(typeof city); 
// console.log(typeof age); 
// console.log(typeof isMarried); 
// console.log(typeof year); 


// console.log(typeof '10' == 10 )

// console.log(parseInt('9.8') == 10 )

// console.log(2 < 4);

// console.log( 4 !== '4');
// console.log( !(4 > 3));
// console.log( !(4 < 3));

// console.log(4 == '4')

// console.log(!(4 === '4'))
const object = new Date

console.log(object.getFullYear())

console.log(object.getMonth())

console.log(object.getDate())

console.log(object.getHours())

console.log(object.getMinutes())

let currentTimeMillis = new Date().getTime();

let currentTimeSeconds = Math.floor(currentTimeMillis / 1000);

console.log(`numbers of seconds elapsed: ${currentTimeSeconds}`)

console.log(object.getMilliseconds())

// let base = parseFloat(prompt('enter base'));

// let height = parseFloat(prompt('enter height'));

// alert(`The area of the triangle is: ${0.5 * base * height}`) 


// let sideA = parseFloat(prompt('enter side a'));

// let sideB = parseFloat(prompt('enter side b'));

// let sideC = parseFloat(prompt('enter side c'));

// alert(`The perimeter of the triangle is: ${sideA + sideB + sideC}`) 

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// let length = parseFloat(prompt('enter length of rectangle'))

// let width = parseFloat(prompt('enter width of rectangle'))

// alert(`area of rectangle is: ${length * width} and the perimeter of rectangle perimeter is: ${2 * length + width}`)

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// let radius = parseFloat(prompt('enter the radius of the circle'));

// if (!isNaN(radius) && radius > 0){
//     const pi = 3.14

//     const area = pi * radius * radius;
    
//     const circumference = 2 * pi * radius;
    
//     alert(`area of a circle: ${area} and circumference of a circle: ${circumference}`)
// }else {
//     alert("Invalid input. Please enter a valid positive number for the radius.");
// }

// If the length of your name is greater than 7 say, your name is long else say your name is short.


// const name = prompt('ennter your name');

// if (name.length > 7){
//     alert('your name is long')
// } else{
//     alert('your name is short')
// }

// Compare your first name length and your family name length and you should get this output.

// const firstName = prompt('ennter your firstName');

// const lastName = prompt('ennter your lastName');

// if (firstName.length > lastName.length && lastName.length < firstName.length ){

//     alert(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
// } else{
//     alert(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
// }


// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// let user = parseFloat(prompt('enter number of years'))


// alert(`you lived ${user * 60 * 60 * 24 * 365} seconds`)    


// let year = new Date()

// console.log(`${year.getFullYear()}/${year.getMonth()}/${year.getDate()}  ${year.getHours()}:${year.getMinutes()}: ${year.getSeconds()}`)         

// let today = new Date();
// let day = today.getDay();

// if( day >= 1 && day <= 5 ){
//     console.log('Today is weekday')
// } else{
//     console.log('today is weekend')
