////NOTE: Semicolons(;) are optional but using it is a best practise.  

//// alert("Hey Dev! From JS ;)")   (Will give error on VS Code terminal but can be run on Web browser)
console.log("This is the beginning of JS Journey (Message in the console)");

//// -------------------------------------Lec-1-------------------------------------
////Datatypes

////I-Var---(Mostly we dont use var)

////1]Re-initialization and Re-assingment/override of values is possible

 ////Ex:-1--Re-assingment/override  
 var age = 20;
 console.log(age);
 var age = 21;
 console.log(age);

 ////Ex:-2--Re-initialization
 var age2 = 20;
 console.log(age2);
 age2 = 21;
 console.log(age2);

////2]Var is a Function/Globally scoped.

 ////1)Function scoped--(Agr var function k andar initialized h, to wo function k andar hi access ho skta h, bahar nhi)
 function checkFunctionScope(){
     var level = "Beginner (HaHaa!! NOOB!!)"
     console.log("Your level of Programming is: ",level);
 }

 ////2)Global scoped--(Agr var function k bahar initialized h, to wo function k andar bhi access ho skta h or bahar bhi).
 var y = 20;
 console.log(y); // ✅ 20
 function show(){
   console.log(y); // ✅ can access global y
 }
 show();

//// console.log(level)  (Error ayega q k function k bhr access nhi kr skte h (Function/Globally scoped))
checkFunctionScope();