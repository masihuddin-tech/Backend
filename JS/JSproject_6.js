// //6]Clicker
const body = document.querySelector("body");
body.addEventListener(('click'),(e)=>{
  console.log(e.clientX, e.clientY);

  const circleElement = document.createElement("div");
  circleElement.classList.add('circle');
  circleElement.textContent = "HI";

  const color = ['red','blue','green','pink','purple','orange']
  circleElement.style.backgroundColor = color[Math.floor(Math.random()*6)]

  circleElement.style.top = `${e.clientY-25}px`;
  circleElement.style.left = `${e.clientX-25}px`;

  body.append(circleElement);

  setTimeout(()=>{    //Ye ek baar run hoga, q k jb bubble create hoga to usko remove bhi krna pdega
    circleElement.remove();
  },4000)   //5 sec k baad remove hojayega

})

// //Return to (JSproject_1-5.js) for further path