
const postList = document.getElementById("postList");
const fetchButton = document.getElementById("fetchButton");
const error = document.getElementById("error");
const myForm = document.getElementById("postForm");

fetchButton.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(event.target)
   if (event.target.innerText === "Fetch Posts") {
        //console.log("WE DID IT")
        fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
            response.json().then(data => {
                console.log(data);
                // postList.innerHTML = `<p>${data[0].title}</p>`
                for (const post of data) {
                    // debugger
                    postList.innerHTML += `<p>${post.title}</p>`
                }
            })
            
        })
    }
})
