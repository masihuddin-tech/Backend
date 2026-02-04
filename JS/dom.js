// /* *****CRUD using DOM***** */

// const e1 = document.createElement("h2");    //Creates element (h2) and returns an object
// e1.textContent = "This is the beginning of Backend Journey";    //Assignes text for h2
// e1.id = "second";   //Assignes id for h2

// const d1 = document.getElementById("main_heading");   //Accesses HTML element by their id and stored in a variable 
// d1.after(e1);  //Prints 'e1' after 'element' (Prints (This is the beginning.....) after (Hey Dev!) )

// const e2 = document.createElement("h3");    //Creates new element(h3)
// e2.textContent = "Ramzan coming...";
// e2.id = "third";
// e2.className = "Ramzan" //Assignes class for h3 (Here, we have to write 'className' not just 'class', because 'class' is a reserved keyword)
// e2.style.background = "Green";
// e2.style.fontSize = "30px";

// e1.after(e2);   //Prints 'e2' after 'e1'

// // //Removing the line
// const s1 = document.getElementById("delete");
// s1.remove();

// // //*****Fragment*****
// // //Creating and displaying list elements in an unordered list using fragment. 

// const arr1 = ["Butter","Butter","Milk","Biscuit","Kheer","Sheer Kurma"];    //List elements content
// const html_ul = document.getElementById("listing");    //Accessing unoreder list

// /* Displaying list content.
// 1]Displaying using normal method--Arr,for of loop
// -> In this, we will access the array using for of loop, and for every iteration we will create a list element, assign textContent to list, and display that list content.
// Problem:- For every iteration the list element will be created and displayed, bcoz of which the web page will be reloaded for each time, resulting in taking more time in displaying the content.

// 2]Displaying using fragment method--Arr,for of loop, fragment
// -> In this, we will do the same thing as above, but we will not display the list element content, instead we will store all the list element content in the fragment, and after that we will append(display) that fragment at once rather than displaying one by one.  
// */ 
// const fragment = document.createDocumentFragment();     

// for(let list of arr1){
//     const l1 = document.createElement("li");
//     l1.textContent = list;
//     fragment.append(l1);
// }
// html_ul.append(fragment);



/* *****Event listener*****
For running the 'Event listener' part, comment all the above code.
*/

// //One way (Not preferrable)
function afterClick(){
    const el1 = document.getElementById("first");
    el1.textContent = "This is the one way of using an onclick event listener";
}

// //Modern way (Preferrable)
// //1]
const el2 = document.getElementById("second");
el2.addEventListener('click',()=>{
    el2.textContent = "This is the another modern way of onclick event listener";
});
el2.addEventListener('dblclick',()=>{
    el2.style.backgroundColor = "Brown";
});

// //2]
const el3 = document.getElementById("third");
const og_txt = el3.textContent;
const og_bg = el3.style.background;

el3.addEventListener('mouseenter',()=>{
    el3.textContent = "Keep Going, Keep Grinding!!";
    el3.style.background = "Green"
});
el3.addEventListener('mouseleave',()=>{
    el3.textContent = og_txt;
    el3.style.background = og_bg;
});

// //3]
// //3.1]Creating multiple 'Event Listener' (using for loop) 
// const parent = document.getElementById("parent");
// for(let child of parent.children){
//     child.addEventListener('click',()=>{
//         child.textContent = "I am Clicked";
//     });
// }
// //(Creating multiple 'Event listener' using 'for loop' is not much optimized, there is an another optimized method for creating multiple event listener known as 'e.target')

// //(Comment the above part code [3.1] for running this code)
// //3.2]Creating multiple 'Event Listener' (using 'e.target')(Most optimized method)
// const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     e.target.textContent = "Remove Event Listener";
// })

// //4]Removing event listener (When we create 'Event Listener', we have to remove it too using '.removeEventListener')
// //4.1]Using separate '.addEventListener' and '.removeEventListener' (Not much optimized)
// parent.removeEventListener('click',(e)=>{
//     e.target.textContent = "Event Listener Removed";
// })

// //4.2]Using function (Most Optimized for adding + removing)
// //(Comment the above [3-4.1] part)
const parent = document.getElementById("parent");
function handleClick(e){
    e.target.textContent = "I am clicked";
}

// //Comment '.removeEventListener' then run '.addEventListener' below. 
parent.addEventListener('click',handleClick);
// parent.removeEventListener('click',handleClick);

// //************** FINISHED **************
// //Return to (index.js) for further path