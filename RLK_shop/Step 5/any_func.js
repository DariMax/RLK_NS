// console.log(sum());

// //function declaration
// function sum(num = 4, num_1 = 0){
//     return num+num_1;
// }

// console.log(sum());

//function expression

// let Square = function(base,exp){
//     let b_new = 1;

//     for(let i = 1;  exp >= i; i++){
//         let b_old = b_new;
//         b_new =  b_old*base;
//     }
//       return b_new; 
// }

// console.log(Square(2,8));

let express = require('express');

//создаем новый объект экземпляр класса express
//далее все манипуляции будут производится с помощью 
//этого приложения app (его имя может быть любое)
let app = express();


