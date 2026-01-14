/*NOTE:
1--Semicolons(;) are optional but using it is a best practise.  
2--For notes, refer codehelp.in
*/

//// ====================================================DAY-1====================================================

////Printing types

////1]Using alert()
// alert("Hey Dev! From JS ;)")   (Will give error on VS Code terminal but can be run on Web browser)
console.log("This is the beginning of JS Journey (Message in the console)");
console.log("Hey Noob!!");

////2]Using Double inverted comma("")
// const str1 = "This is printed using double inverted comma"
// console.log(str1)

////3]Using Single inverted comma('')
// const str2 = "This is printed using single inverted comma"
// console.log(str2)

////4]Using backtick(``)  (Can be used in multiple line of string)
// const str3 = `This is 
// printed using 
// backtick`
// console.log(str3)

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
////Ex1)
  // function printName(firstName,lastName){     //Here, parameters are passed
  //   let fullName = firstName+" "+lastName;
  //   console.log("Your name is:",fullName);
  // }
  // printName("Khan","Masihuddin");     //Here, arguments are passed

////Ex2)
  // function printSum(num1,num2,num3){
  //   let sum = num1+num2+num3;
  //   console.log("Sum of the number is :",sum);
  // }
  // printSum(1,2,3);

////3]Funtion with dynamic parameters using rest operator(...)
// function addNum(...num){    //'Rest operator(...)' (Isse dynamic parameter create hojayega), Isse 'num' naam ka ek array create hoga jisme sb arguments store hote jayenge.
//   let sum = 0;
//   for(let n of num){
//     sum+=n;
//   }
//   console.log("Addition = ",sum)
// }

// addNum(2,3);  //Ye arguments 'num' naam k array me store hoga
// addNum(2,3,4);
// addNum(2,3,4,5,6,7,8,9,10);

////4]Function with return keyword
// function avgNum(n1,n2,n3){
//   let avg = (n1+n2+n3)/3;
//   return avg;     //Returns the avg but doesnt print it (Used when we have to print it later)
  ////Return k baad koi line of code run nhi hogao
// }
// let ans = avgNum(2,4,6);
// console.log("Average of number is :",ans);    //One way of printing

// console.log(avgNum(2,4,6));     //Another way of printing (Jb function me kch return krna hota h tb usko print krne k liye 'console.log()' ka use krte h)

////5]Function using variable
// const getMultipication = function(a,b){
//   let mul = a*b;
//   console.log("Multiplication of a number is :",mul);
// }
// getMultipication(5,2);

////6]Function using arrow
////Ex1)
// let getDivision = (x,y) => {
//   let div = x/y;
//   console.log("Division of a number is :",div);
// }
// getDivision(10,5);

////Ex2)
// const addNum = (num1,num2) => num1+num2;  //Jb koi 1 value ko hi return krana hota h tb usse aise bhi define kr skte h(No, curly braces, No brackets, nothing)
// console.log("Addition = ",addNum(2,3))

////Ex3)
// const sqrt = num => num*num;  //Jb koi ek hi parameter ko define krna hota h tb aise define kr skte h (No brackets, parameter without brackets)
// console.log("Square root = ",sqrt(2));

////Ex4)
// const greeting = ()=>({name: "Masihuddin", age: 22})  //Jb  koi obj ko return krna hota h tb aise return kr skte h.
// console.log(greeting());

////7]Function with default parameters
////Ex1)
// function sayName(fname = "Backend", lname = "Developer"){   //If no arguments are passed, then these default parameters will be automatically used in the arguments
//   console.log("Assalamualaikum! :",fname,lname);
// }
// sayName();

// ////Ex2)We can also pass an object as a default parameter
// function solve(info = {age:21, wt:80, ht: 120}){
//   console.log("Your name info is :",info);
// }
// solve();

// ////Ex3)We can also pass a list as a default parameter
// function hobby(hobby = ["Walking","Foodie","Learing Skills","Sleeping","Hardwork"]){
//   console.log("Your hobby is :",hobby);
// }
// hobby("Learning Skills");

////8]IIFE (Immediately Invoked Function Expressions) --(Isse function ko alg se call krne ki zrurat nhi rhti h)
// ( ()=> {
//   console.log("Assalamualaikum!!");
// }) ();

////9]Callback Function (Real life example)
// function blinkitOrderPlaced(){
//   console.log("Blinkit: We had started packing your Order");
// }
// function zomatoOrderPlaced(){
//   console.log("Zomato: We have started packing your order");
// }
// function payment(amount,callback){
//   console.log(amount,"payment has initialized...");
//   console.log("Payment received.");
//   callback();
// }
// payment(500,blinkitOrderPlaced);
// payment(300,zomatoOrderPlaced);


//// ---------------------------------LEC-5---------------------------------

//// [II]Non Primitive Datatypes-(Objects, Arrays, Functions)(Also known as Reference type Datatypes)
//// The variable of Non Primitive Datatype is stored in stack memory which has the reference(address) of heap memory, where the actual values is stored.


//// ***********OBJECTS***********  (A collection of key:value pairs) (CRUD operation is possible)

////Creating object (Behind The Scene sbhi object k keys as a string hi store hote h)
// let obj = {           //Here, 'obj' is stored in stack memory which contains the address of the heap memory where all the values are stored.
//   firstName : "Khan",
//   middleName : "Masihuddin",
//   0 : 18, //Keys can also be a number
//   1 : 22,
//   hobby : "Passionate about learning new skills",
//   greet : function(){
//     console.log("Assalamualaikum!! Sb Kheriyat?");
//   },
//   pocketMoney : 1000,
//   day : 15,
//   temporary : "Just a temporary key-value pair",
//   "home address" : "Mumbai, Maharashtra"   //Agr key me spacing use krna h to inverted comma("") ka use krna hi pdega(string ki trh). Normally spacing use nhi kr skte.
// }

////Read/Accessing object (Different ways of accessing obj)
// console.log(obj);
// console.log(obj["firstName"])
// console.log(obj.middleName);
// console.log(obj[1])  //Number wale keys ko 'obj.1' aise access nhi kr skte (Isse error ayega)
// obj.greet();
// console.log(obj["home address"]);  //Spacing wale key ko aise access krte h
// console.log("Its Datatype is :",typeof(obj));

////Using Object destructuring    //Syntax:const {accessing_element_1 : variable_name(optional) , accessing_element_1 : variable_name(optional) } 
// const {firstName : surName, middleName : realName} = obj; //Instead of accessing each elemment, we can print multiple element using 'Object destructuring'.
// console.log(surName,realName);


// //Update object
// //1]Insert new pair
// obj.aadhar = 2028;
// console.log(obj.aadhar);

// //2]Update existing pairs
// console.log(obj.pocketMoney);
// obj.pocketMoney = 2000;
// console.log(obj.pocketMoney);


// //Delete object
// delete obj.temporary;
// console.log(obj);


// let obj2 = obj;   //Here, a shallow copy is made 
// //Here, 'obj2' will also contain the same reference(address) as 'obj' of heap memory.(Means, both(obj,obj2) will contain the same reference(address) of heap memory). If a value is changed, then it will be reflected on both objects.
// obj2.day = 18;
// console.log(obj)

// // In-built methods (Important)
// console.log(Object.keys(obj));  //To access all keys (Returns an array which contains all the keys in it).
// console.log(Object.values(obj)); //To access all values (Returns an array which contains all the values in it).
// console.log(Object.entries(obj)); //To access key-value pairs (Returns an array which stores all the key-value pairs).

// //To access using loop

// //1]For in loop (Not recommended, can create confusion(will discuss later))
// for (let keys in obj){
//   console.log(keys, obj[keys])  //Loop will run like(obj[firstName],obj[lastName],obj[hobby],...)
// }

// //2]For of loop
// for (let elements of Object.entries(obj)) {
//   console.log(elements);
// }
// //Using Object destructuring
// for (let [keys,values] of Object.entries(obj)) {
//   console.log(keys,values);
// }


// //This Keyword(Pointer)
// const user = {
//   name : "Masihuddin",
//   age : 22,
//   greeting : function(){
//     console.log("Assalamualaikum! Sb khairiyat?",this.name);  //'This' ek particular object ko point/refer krega. Yaha 'this' keyword 'user'(object) p use hua h, to 'this' 'user'(oject) ko point krega
//   }
// }
// user.greeting();

// const user2 = {
//   name : "Programmer",
//   age : 25,
// }
// user2.greeting = user.greeting; //'user' wala greeting function 'user2' me add/update hua.
// user2.greeting(); //'user2' wala greeting function call hua or us funtion me jo 'this.name' tha wo is baar'user2' k 'name' ko point krega.


// //Nested object (Object k andar object)
// const data = {  //1st object(Lvl-1)
//   name : "Masihuddin",
//   age : 22,
//   address: {  //2nd object(Lvl-2)
//     city: "Mumbai",
//     state: "Maharashtra"
//   }
// }
// console.log(data);
// console.log(data.address);
// console.log(data.address.city);

// //To create separate copy
// //1]Using shallow copy (...{obj_name})   
// //NOTE: Ye sirf 'Lvl-1' k obj k content ki hi separate copy bnayega, Lvl-2 obj k content ab bhi combine rhenge (data or data2) me) (Mtlb shallow copy nested obj me sahi se kaam nhi krega.
// const data2 = {...data};   //'data'(object) k saare content 'data2'(object) me aa gye or dono object k alg alg copy ban gyi 
// data2.name = "Programmer"  //'data2'(object) me 'name' ki value ko change kr diye, isse 'data'(object) k name ki value change nhi hogi(q k dono alg alg copy h)
// console.log(data2)   

// data2.address.city = "Mumbra"   //Isse dono obj(data,data2) me changes hojayega (Q k iski shallow copy bni h, or shallow copy me nested obj(Lvl-2) k content same hi rhenge, uski alg se copy nhi bnegi)
// console.log(data2);
// console.log(data);

//2]Using deep copy (structuredClone(obj_name))
// //NOTE: Isse nested obj(Lvl-2) ki bhi separate copy bnegi (unlike shallow copy).
// const data3 = structuredClone(data);
// console.log(data3);
// data3.address.city = "Mumbra";  //Isse sirf 'data3' obj me changes hoga, 'data' obj me kch changes nhi hoga. 
// console.log(data3);
// console.log(data);



//// ***********ARRAYS***********
/*NOTE:
1--In other languages: An array is a collection of similar elements (same data type, stored in contiguous memory).
2--In JavaScript: An array is a special object that can hold elements of different data types in a single collection.*/

////1]Creation of arrays
 ////1)Normal creation
//  let arr = [1,2,"Khan",true,{profession : "Software Engineer"}, [3,4,5] ];    //Here,'arr' is stored at stack memory which has the reference of the heap memory, where the values[1,2,3]
//  console.log("Normal Array creation: ",arr);

 ////2)Using constructor
//  let arr2 = new Array(1,2,"Khan",{profession : "Software Engineer"}, true, [10,20,30] );
//  console.log("Array created using constructor :",arr2);
// console.log(typeof(arr2));

////Built-in methods
////1]
// arr2.push("Failure");  //Adds an element at the end
// console.log(arr2);
////2]
// arr2.pop();          //Removes an element from the end
// console.log(arr2);
////3]
// arr2.unshift("Start"); //Adds an element at the front
// console.log(arr2);
////4]
// arr2.shift();       //Removes an element from the front
// console.log(arr2);
////5]
// console.log(arr2.slice(2,5));    //Returns a part of an array

////6]Map--(It is used to perform a specific task on a set of existing values)
// let arr3 = [10,20,30];

// arr3.map((num) => {     //Here, map method takes 'arr3' as an input 'num' and perform the following tasks
//   console.log("Square of "+ num +" =",num*num);
// })
// arr3.map((num,index) =>{   //Here, map method takes 'num,index' as an input to print the values and index of an array
//   console.log("Value :",num);
//   console.log("Index :",index);
// })

////7]Filter  //Used to filter out something from an array
// let arr4 = [1,2,3,4,"Khan","Masihuddin",true,null];
// arr4.filter((values) =>{
//   if(typeof(values) === "string"){
//     console.log("Strings :",values);
//   }
// })
// arr4.filter((values) => {
//   if(typeof(values) === "number"){
//     console.log("Numbers :",values);
//   }
// })

////8]Sort
 ////1)To sort in ascending order
  ////Ex1.Sorting
  // let arr5 = [5,7,3,1,6,2,9,8,4];
  // console.log(arr5.sort());   //To sort arrays which has single digit numbers
  ////Ex2.
  //  let arr6 = [34,212,5678,98,7,3,1,8]   //To sort arrays which has more than 1 digit numbers
  //  console.log(arr6.sort((a,b) => a-b));

   ////Ex3.Sorting of strings
  //  let arr7 = ["Masihuddin","Khan","A","B","Software Engineer","Kalsekar"];
  //  console.log(arr7.sort((a,b) => a.localeCompare(b)));   //(localeCompare) is a built in method which is used to compare the strings


 ////2)To sort in descending order
//  let arr8 = [45,3,235,588,9,1,23,575,75,1000,0];  //To sort arrays in desceding order
//  console.log(arr8.sort((a,b) => b-a));   

 ////Sorting of strings
//  let arr9 = ["Masihuddin","Khan","A","B","Software Engineer","Kalsekar"];
//  console.log(arr7.sort((a,b) => b.localeCompare(a)));

////9]IndexOf
// let arr10 = [5,7,3,1,6,2,9,8,4];
// console.log("Index =",arr10.indexOf(6));


////here


//// ====================================================DAY-3====================================================
//// ***********HOISTING***********
////**********(By LoveBabbar)**********
/*In JavaScript, before code runs, all variable and function declarations are moved to the top of their scope (this is called hoisting).
NOTE:1]In terms of variable only the declarations(variables) are hoisted, not the assignments (values).
     2]But,in terms of function, they are fully hoisted (both declaration and body (logic))*/

////1]Function Hositing
// myName("Masihuddin");     //Function calling se pehle hi pura function hoist hogya tha(mtlb apne scope me upr chala gya tha)
// function myName(name){
//   console.log("Assalamualaikum!",name);
// }

////2]Variable Hoisting(using var)
// console.log(a);       //Yaha pr khali variable declaration hoist hua h, values nhi
// var a = 20;
////[2 Days Wasted...(So,sad)]


////**********(By Coder Army(Rohit Negi) )**********
////Definition - Hoisting is JS's behaviour of knowing about a variable or funtions's existence before executing the code. How it treats that knowledge depends on the keyword (function,var,let or const)

/*[I]Hoisting for var.
Execution Context
1]Memory allocation
a = undefined
b = undefined
addNumber = (function code)
sumResult1 = undefined
sumResult2 = undefined
2]Execution phase
a = 10
b = 20
addNumber = (function code)
sumResult1 = 30
sumResult2 = 9
*/

// console.log(a);   //Here, 'undefined' will be printed(See hoisting process part above)
// var a = 10;
// var b = 20;
// console.log(a);

// var sumResult1 = addNumber(a,b);  //Here, the o/p will be printed(See hoisting process part above)
// console.log(sumResult1);

// function addNumber(num1,num2){
//   var sum = num1+num2;
//   return sum;
// }

// var sumResult1 = addNumber(a,b);
// console.log(sumResult1);
// var sumResult2 = addNumber(4,5);
// console.log(sumResult2);


/*[II]Hoisting for let and const
Execution Context
1]Memory allocation
a = uninitialized (Temporal dead zone - Memory is allocated, but it cant be access until a value is assigned)
b = uninitialized (Temporal dead zone - Memory is allocated, but it cant be access until a value is assigned)
addNumber = uninitialized (Temporal dead zone)
result = uninitialized (Temporal dead zone)
2]Execution phase
a = 10
b = 20
addNumber = (function code)
result = 30
*/
////console.log(a);  //It will give an error bcoz it is unintialized
// let a = 10; 
// const b = 20;
// console.log(a);

// const addNumber = function(num1, num2){
//   const sum = num1+num2;
//   return sum;
// }

// const result = addNumber(a,b);
// console.log(result);



//// ***********CLASSES AND OBJECTS(OOP)***********
// class Human{
//   Properties
//   age = 21;   //Public property-(Mtlb ye class k andar or bhr dono jgh access kr skte h)
//   #weight = 75;   //# (Private property)-(Mtlb ye sirf class k andar hi access ho skta h, bhr nhi)
//   height = 180;
  
//   //Constructor
//   constructor(newAge,newWeight,newHeight){
//       this.age = newAge;
//       this.#weight = newWeight;
//     this.height = newHeight;
//   }
  
//   //Functions
//   walking(){      //We don’t need to write the 'function' keyword before function name
//     console.log("I am walking",this.#weight);   //(1)This keyword is used as a pointer to point an object. (2)'weight' is a private property so it can be accessed within a class.
//   }
//   running(){
//     console.log("I am running");
//   }
    
//     /*Getter and Setter--Jb koi private property ko class k bhr use krna hota h tb getter and setter ka use krte h
//       You hide the data (#weight) for safety.
//     ->Use getter to read it.
//     ->Use setter to update it.*/
    
//   get fetchWeight(){    //To get the value of a private property
//     console.log("My weight is :",this.#weight);
//   }
//   set modifyWeight(wt){    //To set/update the value of a property.
//     this.#weight = wt;
//   }    
// }

// let obj = new Human();
// console.log(obj.age);
// //console.log(obj.weight);  //(O/p:-undefined) Cannot be accessed outside the class(Private property)
// console.log(obj.height);
// obj.walking();
// obj.running();
// obj.fetchWeight;    //To print weight using getter. No brackets'()'
// obj.modifyWeight = 80;  //To assign/update weight using setter. Use '=' to assign, no brackets'()'
// obj.fetchWeight;    //To print weight using getter. No brackets'()'
    
// obj2 = new Human(20,60,150);
// console.log(obj2.age);
// console.log(obj2.height);
// obj2.walking();
// obj2.running();
// obj2.fetchWeight;    //To print weight using getter. No brackets'()'
// obj2.modifyWeight = 80;  //To assign/update weight using setter. Use '=' to assign, no brackets'()'
// obj2.fetchWeight;    //To print weight using getter. No brackets'()'

////[1 Day Wasted...(So,sad)]




//// ====================================================DAY-4====================================================
//// ***********MATHS INBUILT METHODS***********
// console.log("Following are the Maths inbuilt methods:-");

// //1]To print pi value(a constant property)
// console.log("Value of PI :",Math.PI);

// //2]To find max no
// console.log("Max value :",Math.max(60,30,23,1435,5230,12,1));

// //3]To find min no
// console.log("Min value :",Math.min(60,30,23,1435,5230,12,1));

// //4]To find round no
// console.log("Floor of (1.8) :",Math.floor(1.8));

// //5]To find ceil no
// console.log("Ceil of (1.2) :",Math.ceil(1.2));

// //6]To print absolute value (positive value)
// console.log("Absolute value :",Math.abs(-5));

// //7]To print random no  
// //Ex1] Returns no from 0 to 1 (Inbuilt)
// console.log(Math.random());

// ////Ex2] Return no from 1 - 100
// console.log(Math.ceil((Math.random()*100)+1));
// /*
// Math.random() * 100 → gives decimal between 0 and 99.999…
// Math.floor(...) → removes decimal, gives integer 0–99
// +1 → shifts range to 1–100
// */ 

// ////8]To print sqrt of a no
// console.log(Math.sqrt(5));

// //9]To print pow of a no 
// console.log(Math.pow(2,10));  //2¹⁰


//// ***********DATE FUNCTIONS***********
// console.log("Following are the Date inbuilt functions");
// console.log(Date());  //Prints the current date

// let date = new Date("November 18 2003 10:15");  //Prints the passed date
// console.log(date);

// let newDate = new Date(2003,10,18,10);  //Prints the passed date (2nd method)
// console.log(newDate);

// //To get the Date,Day,Year
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());

// ////To set the Date,Day,Year
// console.log(date.setFullYear(2001));
// console.log(newDate);


/* ***********Error handling***********
[I]Types of errors
 1]Compile Time(Syntax error) - Jo error code run krne se pehle pta chlta h (IDE/Code Editor me red mark ajata h)
 Ex: console.log(1;

 2]Runtime error(Reference error) - Jo error code run krne k baad pta chlta h
 Ex: console.log(x);*/

// //[II]Error Handling
// try{    //Isme wo code ayega jisme error aa skta h. Agr mltiple line h, to jis line q error aya, uske baad wale sb line of code execute nhi hoyenge
//   console.log("Try block started...");
//   console.log(x);
//   console.log("Try block ended...");    //Ye line execute nhi hoga q k 2nd line me error agya
// }
// catch(err){     //Error aane k baad kya krna h? /Error ka kya krna h? 
//   console.log("Catch block started....");
//   console.log("ERROR DETECTED!!. Your error is: ",err);
// }
// finally{
//   console.log("I am finally block and I will run everytime");
// }

// //[III]Custom error
// //1]
// try{
//   console.log(x);
// }
// catch(err){
//   throw new Error("Pehle initialize to krle, phr print krna");   //'Throw new Error()' - Used to throw custom error
// }
// //2]
// let errorCode = 100;
// if(errorCode == 100){
//   throw new Error("Invalid JSON");
// }




// //====================================================DAY-5====================================================
// //***********Filter, Map, Reduce***********

// //Sample Data (Real Life Example)
// const products = [
//   //Electronics
//   { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true},
//   { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true},
//   { id: 3, name: "Smartphones", category: "Electronics", price: 800, inStock: false},
//   { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true},
//   { id: 5, name: "Keyboard", category: "Electronics", price: 100, inStock: true},

//   //Books
//   { id: 6, name: "The Habbit", category: "Books", price: 25, inStock: true},
//   { id: 7, name: "A Bried History Of Time", category: "Books", price: 30, inStock: true},
//   { id: 8, name: "Dune", category: "Books", price: 28, inStock: false},

//   //Clothing
//   { id: 9, name: "T-Shirt", category: "Clothing", price: 20, inStock: true},
//   { id: 10, name: "Jeans", category: "Clothing", price: 60, inStock: false},
//   { id: 11, name: "Jacket", category: "Clothing", price: 110, inStock: true}
// ];

// //1]filter() - It only returns those elements which satisfy the given condition in a new array.
// const f1 = products.filter((product)=>product.price>50);  //Returns the products whose price is greater than 50
// console.log(f1);

// const f2 = products.filter((product)=> product.price>50).sort((a,b)=>b.price-a.price);  //Returns the products whose price is greater than 50 (descending order)
// console.log(f2);

// //2]map() - It accesses each and every elements and modifies it based on the condition, and returns in a new array.
// const m1 = products.map((product)=> ({name: product.name, price: product.price}))   //It returns the products name and price only   (Curly braces se pehle 1 round braces use krenge wrna compiler usko function ki trh treat krega) 
// console.log(m1);

// //3]reduce() - It is an array method that reduces all elements of an array to a single value by applying a condition or function step by step. It returns a new array.
// const r1 = products.reduce((accumulator,currentValue)=>{
//   if(currentValue.inStock)
//   return accumulator+currentValue.price;
//   else
//   return accumulator;
// },0);

// console.log(r1);




// //====================================================DAY-6====================================================
// //***********Set***********
// //Set is a type of array which only contains the unique value elements. If duplicate value element is detected, then too it gets count as a single element.

// //Array - (Creation of array)
const arr = [10,20,30,30,40,50,60,60];  
// console.log(arr); 

// // //Set - (Creation of set)
const s1 = new Set(arr);  //The 'arr' contains duplicate value, but set will count it once only. As it contains only unique value.
console.log(s1);

s1.add(100);  //Inserts an element
console.log(s1);

console.log(s1.has(100));   //Checks for the given element
console.log(s1.has(80));    //Checks for the given element

s1.delete(60);  //Deletes an element
console.log(s1);

console.log(s1.size);   //Prints the size of the elements

s1.clear();
console.log(s1);  //Deletes all the elements





// //====================================================DAY-6====================================================
//// ***********DOM(DOCUMENT OBJECT MODEL)***********

// //Love Babbar defination
/*HTML code ko JS k object me convert krte h (us JS object ko Document bolte h).
Is poore process ko DOM bolte h*/

// //Rohit Negi defination
/*To convert the HTML file in object using JS, so that we can manipulate that HTML file using JS
*/

/* ********** Refer (dom.html) and (dom.js) for more ********** */
