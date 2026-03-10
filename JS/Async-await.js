async function github(){
    // console.log("I am inside the async function");
    const response = await fetch("https://api.github.com/users");
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
github();
// console.log("I am outside the async function");

// //31:55