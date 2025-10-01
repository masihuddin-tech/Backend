////NOTE: Semicolons(;) are optional but using it is a best practise.  

//// alert("Hey Dev! From JS ;)")   (Will give error on VS Code terminal but can be run on Web browser)
console.log("This is the beginning of JS Journey (Message in the console)");

//// -------------------------------------Lec-1-------------------------------------
////***********Keywords used to declare variables.***********

////[I]Var---(Mostly we dont use var because of Debug issues)

////1]Var is a Function/Globally scoped.

 ////1)Function scoped--(Agr var function k andar initialized h, to wo function k andar hi access ho skta h, bahar nhi)
 //  function checkFunctionScope(){
   //     var level = "Beginner (HaHaa!! NOOB!!)"
   //     console.log("Your level of Programming is: ",level);
   //    }
   ////console.log(level);  //Error dega q k ye functionscoped h
   // checkFunctionScope();
     
 ////2)Global scoped--(Agr var function k bahar initialized h, to wo function k andar bhi access ho skta h or bahar bhi)
   //  var y = 21;
   //  console.log(y); // ✅ 20
   //  function checkGlobalScope(){
      //     console.log(y); // ✅ can access global y
      //  }
      //  checkGlobalScope();
      
////2]Re-initialization and Re-assingment/override of values is possible
      
 ////Ex:-1--Re-initialization  
      //  var age = 20;
      //  console.log(age);
      //  var age = 21;
      //  console.log(age);
      
 ////Ex:-2--Re-assingment/override
      //  var age2 = 20;
      //  console.log(age2);
      //  age2 = 21;
      //  console.log(age2);


////[II]Let 

////1]Let is a blocked scoped--(Mtlb jin brackets/block k beech me ise create kroge, unhi brackets/block k beech me access kr skte h)
// {
//    let a = 10;
//    console.log(a);
// }
////console.log(a);  //Error dega q k ye block scoped h

////2]Re-assingment/override of values is possible, but Re-initialization is not possible
// let check = 100;
// console.log("Before override value: ",check);
// check = 200;
// console.log("After override value: ",check);


////[III]Const

////1]Const variable values is fixed.(Re-initialization and Re-assingment/override of values is not possible)
// const greeting = "Assalamualaikum";
// console.log("It is a const message : ",greeting);



////***********Datatypes***********
////[I]Primitive Datatypes

// let data;
// console.log("Datatype: ",typeof(data));   //Undefined datatype

// data = 80;
// console.log("Value :",data," Datatype :",typeof(data));  //Number datatype (It can store big integers from range (-(2^53)-1 to (2^53)-1))

// data = "Khan";
// console.log("Value :",data," Datatype :",typeof(data));  //String datatype

// data = true;
// console.log("Value :",data," Datatype :",typeof(data));  //Boolean datatype

// data = null;
// console.log("Value :",data," Datatype :",typeof(data));  //Object datatype (Null kch nhi store krta h, isliye object datatype rhega)

// data = 98767898089n  //Adding 'n' means explicitly tells JS that its a BigInt type
// console.log("Value :",data," Datatype :",typeof(data));  //BigInt (It can store big integers beyond the range ((2^53)-1) )
////If you just write digits → it’s a number whether it is beyond the range ((2^53)-1)
////If you add 'n' at the end → it’s a bigint.



//// -------------------------------------Lec-2-------------------------------------
////[I]Operators

////1]Comparison Operators(<,>,<=,>=,etc)

 ////1)Loose equality--(Compares if Value is same, but not datatype)
//  console.log("5" == 5);
//  console.log("5" != 5);
 
 ////2)Strict equality--(Compares value and datatype both)
//  console.log("5" === 5);
//  console.log("5" !== 5);


////2]Ternary Operators
// age = 21;
// let ans = (age>18) ? "I can vote":"I cannot vote";   //Ye operator string return krta h isliye isko store krna pda 
// console.log(ans);


////[II]]Loops

 //1)For loop
//  for(let i = 1; i<=5; i++){
//   console.log(i);
//  }

 ////2)While loop
//  let i = 1;
//  while(i<=5){
//   console.log(i);
//   i++
//  }

 ////3)Do-while loop--(This loop executes atleast once, whether the condition is not satisfied)
//  let a = 1;
//  do{
//   console.log(a);
//   a++;
//  }while(a<=5);


////[III]Creation of strings

////1)Using 
let str1 = "Khan";  //Using("")
console.log(str1);

let str2 = 'Masihuddin';  //Using('') 
console.log(str2);

let str3 = `My name is  
Khan
Masihuddin
Assalamualaikum`;   //Using(``) Backtick(Before 1 on keyboard)
console.log(str3);