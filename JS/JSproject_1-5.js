//Projects-

//1]Random Quote Generator
const quotes = [
  "Believe in yourself and all that you are.",
  "Success comes from hard work and patience.",
  "Every day is a new opportunity to grow.",
  "Do not stop when you are tired, stop when you are done.",
  "Dream big and dare to fail.",
  "Consistency is more important than motivation.",
  "Small steps every day lead to big results.",
  "Learning never exhausts the mind.",
  "Discipline is the bridge between goals and success.",
  "Your future depends on what you do today.",
  "Mistakes are proof that you are trying.",
  "Focus on progress, not perfection.",
  "Hard times create strong people.",
  "Believe you can, and you are halfway there.",
  "Push yourself, because no one else will.",
  "Success is not for the lazy.",
  "Growth begins at the end of your comfort zone.",
  "Patience and persistence conquer all things.",
  "Work in silence, let success make the noise.",
  "Never give up on something you truly want."
];
const quote = document.getElementById("quote");
const btn = document.getElementById("btn");

btn.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*quotes.length);
    quote.textContent = `"${quotes[index].toUpperCase()}"`;   //Prints the quotees in inverted commas("").
})

/*Explanation:
1]Math.random() - generates a random decimal number between 0 and 1.
2]quotes.length - gives the total number of quotes in the array.
3]Math.random() * quotes.length - gives a random decimal number between 0 and (length − 1).
4]Math.floor(...) - removes the decimal part, giving a valid array index.
5]quotes[randomIndex] - prints the randomly selected quote from the array.
*/


// //2]Background Changer
const parent = document.getElementById("parent");

// //2.1)Using 'e.targert'
parent.addEventListener('click',(e)=>{
  const child = e.target;
  document.body.style.backgroundColor = child.id;   //Colors and ids are same.
})

// //2.2)Using 'for loop'
// for(let child of parent.children){
//   child.addEventListener('click',()=>{
//     document.body.style.backgroundColor = child.id;
//   })
// }


// //3]Rich Calculator
const form_1 = document.getElementById("form");
form_1.addEventListener('submit',(e)=>{   
  e.preventDefault();//Here, instead of 'click' we have to write 'submit', bcoz we initialized the button type = submit. 
  const surname = document.getElementById("Surname");
  
  const sur_name = surname.value.length;
  const res = sur_name*10;
  
  const result = document.getElementById('Result');
  result.textContent = res;
  result.textContent = `Result: ${res}%`;
})


// //4]Digital Clock
setInterval(() => {   //Its is a type of function which act as a callback function. Means, the code which is written inside it will be executed after each interval of time, and interval time is passed at the end of the function in miliseconds.
  const time = document.getElementById("time");
  let set_time = new Date(); 
  time.textContent = set_time.toLocaleTimeString();
}, 1000);   //Here, the time interval is passed in milisecods (1000 m/s = 1sec)


// //5]Countdown Timer
const timer = document.getElementById("timer");

setInterval(()=>{
  const current_time = new Date().getTime();  //Current date in miliseconds, .'getTime()' is used to convert the time in miliseconds
  const olympic_time = new Date(2028,6,14).getTime();  //Olympic Date, new Date(2028,6) 2028=Olympic year and 6=Month(July), Month starts with 0 based index (Ex: 0-Jan, 1-Feb ,2-Mar, 3-April...)
  let new_time = olympic_time-current_time;

  const days = Math.floor((new_time)/(1000*60*60*24));
  new_time %= 1000*60*60*24;
  const hours = Math.floor((new_time)/(1000*60*60));
  new_time %= 1000*60*60;
  const minutes = Math.floor((new_time)/(1000*60));
  new_time %= 1000*60;
  const seconds = Math.floor((new_time)/(1000));
  new_time %= 1000;

  timer.textContent = ` ${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
},1000);


// //6]Clicker --(Refer JSproject_6.js)


// //7]To Do List
// const form2 = document.getElementById("form2");
// const task = document.getElementById("task");  //It is inside a form but then too it has to be called inside DOM explicitly, bcoz its an input field and we have to access the value of that. [NOTE: Fields like 'Input', 'Textarea', 'Selects' contains value; and we have to access it using '.value()'] 

// const taskList = document.getElementById("taskList");

// form2.addEventListener('submit',(e)=>{
//   e.preventDefault();
//   const text = task.value.trim();

//   const parent = document.createElement("div");
//   parent.style.marginTop = "20px";

//   const span = document.createElement("span");
//   span.textContent = text;
//   span.style.marginRight = "20px";

//   const done_btn = document.createElement("button");
//   done_btn.textContent = "Done";
//   done_btn.style.marginRight = "20px";
//   done_btn.addEventListener('click',(e)=>{   //Yaha 'submit' nhi 'click' use krenge q k, 'submit' forms k btn me use hota h or ye btn form k bhr create kiya hua h.
//     span.style.textDecoration = "line-through";
//     span.style.color = "grey";
//   })

//   const dlt_btn = document.createElement("button"); 
//   dlt_btn.textContent = "Delete"; 
//   dlt_btn.addEventListener('click',(e)=>{
//     parent.remove();
//   })

//   parent.append(span,done_btn,dlt_btn);
//   taskList.append(parent);   //If we create any element, then it must be append in any element. Bcoz, when we create any element it just stores in a memory, but for diplaying it, we have to append to any UI element.

//   form2.reset();
// })


// //8]Quiz Form
const quiz_form = document.getElementById("quiz_form");
quiz_form.addEventListener(('submit'),(e)=>{
  e.preventDefault();
  let score = 0;  
  const ans = {
    q1 : "Sachin Tendulkar",
    q2 : "West Indies",
    q3 : "Virat Kohli",
    q4 : "264",
    q5 : "Muttiah Muralitharan",
  }
  const form_data = new FormData(quiz_form);  //FormData() -It is used to collect all the values of a form’s input fields and store them as key–value pairs.
  for(let [name,value] of form_data.entries()){   //.entries() - It returns key–value pairs so data can be easily looped over.
    if(value == ans[name]){   //Users selected value will be compared to ans[name]. Means in ans[name]; name stores the values of the corresponding keys. Means ans[name] --> ans [name=q1=Sachin Tendulkar] -->{q1 : Sachin Tendulkar} = ans[Sachin Tendulkar]
      score+=1;
    }
  }
  document.getElementById("disp_score").textContent = `Your score is ${score} out of 5`;
  quiz_form.reset();
})



// //Practice
// //To do list
const to_do_form = document.getElementById("to_do_form");
const task = document.getElementById("task");

to_do_form.addEventListener(('submit'),(e)=>{
  e.preventDefault();

  const text = task.value;

  const new_div = document.createElement("div");
  new_div.style.marginTop = "35px";

  const span = document.createElement("span");
  span.textContent = text;

  const done_btn = document.createElement("button");
  done_btn.textContent = "Done";
  done_btn.style.marginLeft = "120px";
  done_btn.addEventListener(('click'),(e)=>{
    span.style.textDecoration = "line-through"
    span.style.color = "Grey"
  })
  
  const dlt_btn = document.createElement("button");
  dlt_btn.textContent = "Delete";
  dlt_btn.style.marginLeft = "20px";
  dlt_btn.addEventListener(('click'),(e)=>{
    new_div.remove();
  })

  new_div.append(span,done_btn,dlt_btn);
  to_do_form.after(new_div);
  to_do_form.reset();
})