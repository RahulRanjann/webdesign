// document.getElementById('roy').innerHTML="hello there";

// document.write("document.write");// this is for only write anywhere.

// let x = prompt('What is your age?'); // prompt is used to take input thorug alert.
// document.getElementById('age').innerHTML=x;

// var num1 = 1;
//  num1++; // increment by one .
// console.log(num1);
//  var num2 = 2;
//  num2--; // decrement by one.
//  console.log(num2);
// let y = 1;
// y  += 10;
//  console.log(y);

//function

/*
 function greating()
 {
     y = console.log("hello ranjan");
 }
 greating(); // function 
 
*/

// function greating()  // this fuction takes input as your name and gives us output as greating with your name.
// {
//     let name = prompt("what is your name?");
//     let result = "hello "+name;
//     return result; // return type
// }

// document.getElementById('Name').innerHTML= greating(); //function call in documetnt.get element by id.

/*  
// (Q)write a fuction which return sum of two number.

function sum()
{
    let x =parseInt( prompt("Enter your first no."));
    let y = parseInt(prompt("Enter your second no."));
    let result = x+y ;
    return result;   // this is return type.
}
 console.log(sum());

 */

/*
 // Argument in function.
 function greating(yourName)
 {
    var result = "hello"+" "+yourName; // concatneation.
    console.log(result);
 }
  
 var name = prompt("what is your name?"); // taking input from user in a variable(naem).
 greating(name);   //function call
*/

/*
// multiple argument function.

function multiple(num1, num2)
{
 var result = num1*num2;
 console.log("After subtraction of "+num1+ "*"+num2 +"="+ +result);
}

var no1 = parseInt(prompt("Enter your first no."));
var no2 = parseInt(prompt("Enter your second no."));
multiple(no1,no2);

*/

/*
// while loop.

var num = 0;
while(num<100) // this will execute untill the condition is not false.
{
    num = num+1;
    console.log(num);
}

*/

/*
// for lopp.

for(var i = 0; i<=100; i++) 
{
    console.log(i);
}
*/
// some programs on loop.
//(Q) print right angle tringle.

/*
let string = "";
for (var j = 0; j <= 5; j++) {
  for (var i = 0; i <= j; i++) {
    string += "*";
  }

  string += "\n";
  
}
console.log(string);
*/

// if-else

//(Q) to check a number is even or odd.

/*
  let num = prompt("Enter a number to check the no. is even or odd");
  if (num % 2 == 0) {
    console.log(num + " is even number");
  } else {
    console.log(num + " is odd number");
  }
*/

//(Q) to check a number is positive , negative or zero.

/*
let num = prompt("Ente a number to check positive or negative?");
if (num > 0) {
  console.log(num + " is positive");
} else if (num < 0) {
  console.log(num + " is negative");
} else {
  console.log(num + " is zero");
}

*/

//Switch case.

//(Q.)  Write a program if user enter 1 the our first day's week will print ,3  then the output comes wednesday and if numberes are apart form 1To7 the print wrong input.

let day = prompt("Enter day's of week?");

switch (day) {
  case "monday":
    console.log("first day of week");
    break;
  case "tuesday":
    console.log("second day of week");
    break;
    case "wednsday":
      console.log("Third day of week");
      break;
      case "thrushday":
        console.log("forth day of week");
        break;
        case "friday":
          console.log("fifth day of week");
          break;
          case "saturday":
            console.log("sixth day of week");
            break;
            case "sunday":
              console.log("seventh day of week");
              break;
  default:
    console.log("wrong input");
}
