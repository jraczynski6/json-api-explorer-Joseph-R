const postList = document.getElementById("postList");
const fetchButton = document.getElementById("fetchButton");
const error = document.getElementById("error");
const myForm = document.getElementById("postForm");

fetchButton.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log(event.target)

    if (event.target.innerText === "Fetch Posts") {
        //console.log("fetch post successful")
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // postList.innerHTML = `<p>${data[0].title}</p>`;
                for (const post of data) {
                    // debugger
                    postList.innerHTML += `<p>${post.title}</p>`;
                }
            });
        }
    }
);

myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    //loading message
    formSuccess.textContent = "Loading...";
    formError.textContent = "";

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            formSuccess.innerHTML = `<p>${data[0].title}</p><br><p>${data[0].body}</p>`;
        })
        .catch(err => {
            console.log(err);
            formError.textContent = "Error submitting posts.";
            formSuccess.textContent = "";
        });
});