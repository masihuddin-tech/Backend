////NOTE: Semicolons(;) are optional but using it is a best practise.  

// alert("Hey Dev! From JS ;)")   //Will give error on VS Code terminal but can be run on Web browser
console.log("This is the beginning of JS Journey (Message in the console)");

// -------------------------------------Lec-1-------------------------------------
//Datatypes

//I-Var


//Var is a Function/Globally scoped -(Agr var function k andar initialized h, to wo function k andar hi access ho skta h, bahar nhi).
function checkFunctionScope(){
    var level = "Beginner (HaHaa!! NOOB!!)"
    console.log("Your level of Programming is: ",level);
}
// console.log(level)  (Error ayega q k function k bhr access nhi kr skte h (Function/Globally scoped))
checkFunctionScope();