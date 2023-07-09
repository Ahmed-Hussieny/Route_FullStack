
// Assignment 1


// -----1) Write a program that allow to user enter number then print it



// var number=prompt("Enter Number");
// console.log(number);



// -------------------------------------------------------------------------------------------------------------------------------------------------------------


//----2) Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// var number=prompt("Enter Number");
// if(number%3==0 && number%4==0){
//     console.log("YES");
// }else{
//     console.log("NO");
// }


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// ----3)Write a program that allows the user to insert 2 integers then print the

// var firstNumber = parseInt(prompt("Enter the first integer: "));
// var secondNumber = parseInt(prompt("Enter the second integer: "));
// if(firstNumber>secondNumber){
//     console.log(firstNumber);
// }else{
//     console.log(secondNumber);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// ---4) Write a program that allows the user to insert an integer then print negative if it isnegative number otherwise print positive.

// var number=prompt("Enter Number");
// if(number<0){
//     console.log("negative");
// }else if(number==0){
//     console.log("Zero");
// }else{
//     console.log("positive");
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// ---5)  Write a program that take 3 integers from user then print the max element and the min element.

// var firstNumber = parseInt(prompt("Enter the first integer: "));
// var secondNumber = parseInt(prompt("Enter the second integer: "));
// var thirdNumber = parseInt(prompt("Enter the third integer: "));
// if(firstNumber>secondNumber && firstNumber>thirdNumber && secondNumber>thirdNumber){
//     console.log(" max element "+firstNumber+" min element "+thirdNumber);
// }else if(firstNumber>secondNumber && firstNumber>thirdNumber && secondNumber<thirdNumber){
//     console.log(" max element "+firstNumber+" min element "+secondNumber);
// }
// else if(secondNumber>firstNumber && secondNumber>thirdNumber && firstNumber>thirdNumber){
//     console.log(" max element "+secondNumber+" min element "+thirdNumber);
// }
// else if(secondNumber>firstNumber && secondNumber>thirdNumber && firstNumber<thirdNumber){
//     console.log(" max element "+secondNumber+" min element "+firstNumber);
// }
// else if(thirdNumber>firstNumber && secondNumber<thirdNumber && firstNumber>secondNumber){
//     console.log(" max element "+thirdNumber+" min element "+secondNumber);
// }
// else if(thirdNumber>firstNumber && secondNumber<thirdNumber && firstNumber<secondNumber){
//     console.log(" max element "+thirdNumber+" min element "+firstNumber);
// }


// -------------------------------------------------------------------------------------------------------------------------------------------------------------

//----6) Write a program that allows the user to insert integer number then check If a number is oven or odd

// var number=prompt("Enter Number");
// if(number%2==0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// --7) Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// var char=prompt("Enter letter");
// if(char=='a' || char=='e' || char=='I' || char=='o' || char=='u'){
//     console.log("vowel");
// }else{
//     console.log("Consonant");
// }


// -------------------------------------------------------------------------------------------------------------------------------------------------------------

//----8)Write a program that allows user to insert integer then print all numbers between 1 to that’s number

// var number=prompt("Enter number");
// var str ="";
// for (let i = 1; i <= number; i++) {
//     str+=i+" ";
// }
// console.log(str);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// --- 9 )Write a program that allows user to insert integer then print a multiplication table up to 12.

// var number=prompt("Enter number");
// var str ="";
// for (let i = 1; i <= 12; i++) {
//     str+=i*number+" ";
// }
// console.log(str);


// -------------------------------------------------------------------------------------------------------------------------------------------------------------

//---10) Write a program that allows to user to insert number then print all even numbers between 1 to this number

// var number=prompt("Enter number");
// var res=" ";
// for (let i = 1; i <= number; i++) {
//   if(i%2==0){
//     res+=i+" ";
//   }
    
//   }
// console.log(res);



// -------------------------------------------------------------------------------------------------------------------------------------------------------------


//--11) Write a program that take two integers then print the power


// var number=prompt("Enter number");
// var power=prompt("Enter number");
// var res=1;
// for (let i = 0; i < power; i++) {
//     res*=number;
//   }
// console.log(res);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// ---12) Write a program to enter marks of five subjects and calculate total, average and percentage. 


// var array = [];
// for (var i = 0; i < 5; i++) {
//   array.push(parseInt(prompt("Enter number " + (i + 1) + ": ")));
// }
// var sum=0;
// for (var i = 0; i < array.length; i++) {
//   sum+=array[i];
// }

// console.log("Total marks:", sum);
// console.log("Average Marks:", sum/5);
// console.log("Percentage:", (sum/500)*100);


// -------------------------------------------------------------------------------------------------------------------------------------------------------------
  
// --13) Write a program to input month number and print number of days in that month.

// var number=prompt("Enter number");

// var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// console.log(daysInMonth[number-1]);



// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// --14) Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade

// function calculateGrade(percentage) {
//   if (percentage >= 90) {
//     return "A";
//   } else if (percentage >= 80) {
//     return "B";
//   } else if (percentage >= 70) {
//     return "C";
//   } else if (percentage >= 60) {
//     return "D";
//   } else if (percentage >= 40) {
//     return "E";
//   } else {
//     return "F";
//   }
// }

//   var A = parseInt(prompt("Enter your A marks: "));
//   var B = parseInt(prompt("Enter your B marks: "));
//   var C = parseInt(prompt("Enter your C marks: "));
//   var D = parseInt(prompt("Enter your D marks: "));
//   var E = parseInt(prompt("Enter your E marks: "));

//   var totalMarks = A + B + C + D + E;
//   var percentage = (totalMarks / 500) * 100;

//   var grade = calculateGrade(percentage);
//   console.log("Your percentage is:", percentage, "%");
//   console.log("Your grade is:", grade);




// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// --15)  Write a program to print total number of days in month


// function getNumberOfDaysInMonth(month) {
//   switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       return 31;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       return 30;
//     case 2:
//       return 28;
//     default:
//       return -1;
//   }
// }
// var month = parseInt(prompt("Enter the month number: "));
// var numberOfDays = getNumberOfDaysInMonth(month);
// console.log("The number of days in month " + month + " is " + numberOfDays);


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// --16) Write a program to check whether an alphabet is vowel or consonant

// function getAlphabet(letter) {
//   switch (letter) {
//     case 'e':
//     case 'o':
//     case 'u':
//     case 'i':
//     case 'a':
//       return 'vowel';
//     default:
//       return 'consonant';
//   }
// }
// var letter = prompt("Enter the letter : ");
// var data = getAlphabet(letter);
// console.log("The letter " + letter + " is " + data);


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// --17) Write a program to find maximum between two numbers


// function maxOfTwo(number1, number2) {
//     switch (number1 > number2) {
//       case true:
//         return number1;
//       case false:
//         return number2;
//       default:
//         return "The numbers are equal";
//     }
//   }

//   var number1 = prompt("Enter the number 1 : ");
//   var number2 = prompt("Enter the number 2 : ");
//   var data = maxOfTwo(number1,number2);
//   console.log("The max between " + number1 + " and " + number2 +" is " + data);


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// --18) Write a program to check whether a number is even or odd

// function evenOrOdd(number) {
//     switch (number %2 == 0) {
//       case true:
//         return "even";
//       case false:
//         return "odd";
//       default:
//         return "The numbers is zero";
//     }
//   }

//   var number = prompt("Enter the number  : ");
//   var data = evenOrOdd(number);
//   console.log("The number is " + data);


// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// --19) Write a program to check whether a number is positive or negative or zero

// function checkNumber(number) {
//     var result;
    
//     switch (Math.sign(number)) {
//       case 1:
//         result = "Positive";
//         break;
//       case -1:
//         result = "Negative";
//         break;
//       case 0:
//         result = "Zero";
//         break;
//       default:
//         result = "Invalid number";
//         break;
//     }
    
//     return result;
//   }
  
//   var number = prompt("Enter the number  : ");
//   const numberType = checkNumber(number);

//   console.log("The number is: " + numberType);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// --20) Write a program to create Simple Calculator


// function calculate( num1 , operator , num2) {
//     var result;
    
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         result = num1 / num2;
//         break;
//       default:
//         result = "Invalid operator";
//         break;
//     }
    
//     return result;
//   }


    
//     var number1 = prompt("Enter the number1  : ");
//     var operator = prompt("Enter the operator  : ");
//     var number2 = prompt("Enter the number2  : ");

//   const calc = calculate(number1,operator,number2);

//   console.log("The result is: " + calc);