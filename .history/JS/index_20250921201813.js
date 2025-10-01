/*NOTE:
1--Semicolons(;) are optional but using it is a best practise.  
2--For notes, refer codehelp.in
*/

//// ====================================================DAY-1====================================================

//// alert("Hey Dev! From JS ;)")   (Will give error on VS Code terminal but can be run on Web browser)
console.log("This is the beginning of JS Journey (Message in the console)");

//// ---------------------------------LEC-1---------------------------------

//// ***********KEYWORDS USED TO DECLARE VARIABLES***********

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


//// ***********DATATYPES***********
////[I]Primitive Datatypes--(They consumes/stores at stack memory)-----([II]Non Primitive Datatypes at LEC-5)

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



//// ---------------------------------LEC-2---------------------------------
//// ***********OPERATORS***********

////[I]Comparison Operators(<,>,<=,>=,etc)

 ////1]Loose equality(==,!=)--(Compares if Value is same, but not datatype)
//  console.log("5" == 5);
//  console.log("5" != 5);
 
 ////2]Strict equality(===,!==)--(Compares value and datatype both)
//  console.log("5" === 5);
//  console.log("5" !== 5);


////[II]Ternary Operators
// age = 21;
// let ans = (age>18) ? "I can vote":"I cannot vote";   //Ye operator string return krta h isliye isko store krna pda 
// console.log(ans);



//// ---------------------------------LEC-3---------------------------------
//// ***********LOOPS***********

////1]For loop
//  for(let i = 1; i<=5; i++){
//   console.log(i);
//  }

////2]While loop
//  let i = 1;
//  while(i<=5){
//   console.log(i);
//   i++
//  }

////3]Do-while loop--(This loop executes atleast once, whether the condition is not satisfied)
//  let a = 1;
//  do{
//   console.log(a);
//   a++;
//  }while(a<=5);


//// ***********CREATION OF STRINGS***********

////1]Using("")
// let str1 = "Khan";
// console.log(str1);

////2]Using('')
// let str2 = 'Masihuddin';   
// console.log(str2);

////3]Using(``) Backtick(Before 1 on keyboard)
// let str3 = `My name is  
// Khan
// Masihuddin
// Assalamualaikum!!`;   
// console.log(str3);

////4]Using object--(Generally we avoid using it)
// let str4 = new String("Khan Masihuddin");
// console.log(str4);


////5]Using '/'--(Used in cases where we had to put inverted commas("",'') inside a word of a string)
// let str5 = "If you want \"SUCCESS\" you have to \"GRIND\" ";
// console.log(str5);    //"The word 'SUCCESS' and 'GRIND' will be printed in (""). Bcoz when we use '\' in a string, it tells the compiler to treat the next character as a normal character".


//// ***********STRING OPERATIONS***********

// let str1 = "Khan ";
// let str2 = "Masihuddin";

////1]Concatenation
// let result = str1+str2;   //Concatenation(To joint 2 strings)
// console.log(result);

// let ans = `${str1}${str2}`   //Another way of concatenating
// console.log(ans);

////2]Length
// console.log("Length of the string is: ",str1.length);   //To calculate the length(alaong with spaces)

////3]Upper,Lower Cases
// console.log("Upper Case string: ",str1.toUpperCase());  //Converts the string to Upper Case
// console.log("Lower Case string: ",str2.toLowerCase());  //Converts the string to Lower Case

////4]Substring
// console.log(str2.substring(2));   //Returns the string from index 2 till last (Bcoz ending index is not declared)
// console.log(str2.substring(3,7))  //Returns the string from index 3 to 6 (Bcoz 7 is exclusive)

////5]Split
// let sentence ="Assalamualikum! Sb Khairiyat?";
// let words = sentence.split(" ");  //Splits the string by 'space' and returns it 
// console.log(words);   
// console.log(sentence.split("a")); //Splits the string by 'a' and returns it

////6]Join
// let fullSentence = words.join(" ");   //Joins the words into a single string
// console.log(fullSentence);    




//// ====================================================DAY-2====================================================

//// ---------------------------------LEC-4---------------------------------
//// ***********FUNTIONS***********

////1]Function wihtout parameters

// function greet(){     //function declaration
//   console.log("Assalamualikum!!");
// }
// greet();  //function calling

////2]Function with parameters
////Ex1]
  // function printName(firstName,lastName){     //Here, parameters are passed
  //   let fullName = firstName+" "+lastName;
  //   console.log("Your name is:",fullName);
  // }
  // printName("Khan","Masihuddin");     //Here, arguments are passed

////Ex2]
  // function printSum(num1,num2,num3){
  //   let sum = num1+num2+num3;
  //   console.log("Sum of the number is :",sum);
  // }
  // printSum(1,2,3);

////3]Function with return keyword

// function avgNum(n1,n2,n3){
//   let avg = (n1+n2+n3)/3;
//   return avg;     //Returns the avg but doesnt print it (Used when we have to print it later)
//   ////Return k baad koi line of code run nhi hogao
// }

// let ans = avgNum(2,4,6);
// console.log("Average of number is :",ans);    //One way of printing

// console.log(avgNum(2,4,6));     //Another way of printing

////4]Function using variable
// const getMultipication = function(a,b){
//   let mul = a*b;
//   console.log("Multiplication of a number is :",mul);
// }
// getMultipication(5,2);

////5]Function using arrow

// let getDivision = (x,y) => {
//   let div = x/y;
//   console.log("Division of a number is :",div);
// }
// getDivision(10,5);



//// ---------------------------------LEC-5---------------------------------

//// [II]Non Primitive Datatypes(Also known as Reference type Datatypes)
//// The variable of Non Primitive Datatype is stored in stack memory which has the reference(address) of heap memory, where the actual values is stored.

//// ***********ARRAYS***********
let arr = [1,2,3];    //Here,'arr' is stored at stack memory which has the reference of the heap memory, where the values[1,2,3]
console.log(arr);


//// ***********OBJECTS***********
let obj = {           //Here, obj is stored in stack memory which contains the address of the heap memory where all the values are stored
  firstName : "Khan",
  middleName : "Masihuddin",
  hobby : "Passionate about learning new skills",
  greet : function(){
    console.log("Assalamualaikum!! Sb Kheriyat?");
  }
}
console.log(obj);
obj.greet();
console.log("Its datatype is :",typeof(obj));

let obj2 = obj; //Here, a