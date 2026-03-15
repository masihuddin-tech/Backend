async function github(){
    try{
        // console.log("I am inside the async function");

        const response = await fetch("https://api.github.com/users");
        if(!response.ok){
            throw new Error("Data is not present");
        }


        const data = await response.json();
        // console.log(data);
        
        const parent = document.getElementById("first");
        for(let user of data){      //Creating all users UI(Image,username,URL) using for loop
            const div = document.createElement("div");
            div.classList.add("user");

            const img = document.createElement("img");
            img.src = user.avatar_url;

            const userName = document.createElement("h2");
            userName.textContent = user.login;

            const anchor = document.createElement("a");
            anchor.href = user.html_url;
            anchor.textContent = "Visit Profile";

            div.append(img,userName,anchor);
            parent.append(div);
        }
    }
    catch(error){
        console.log("Error");
    }

}
github();


// //This is the code to check the above github api usage. 
fetch("https://api.github.com/rate_limit")
  .then(r => r.json())
  .then(d => console.log(d.rate));

// console.log("I am outside the async function");



// //Go back to index.js