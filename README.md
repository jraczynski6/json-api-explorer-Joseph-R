Instructions

You will add interaction with a public API to the small web application in this
https://github.com/LaunchCodeEducation/json-api-explorer Github repo by sending
and receiving JSON data using the fetch() method in JavaScript. This activity
reinforces how to:

● Make HTTP GET and POST requests
● Parse and display JSON responses
● Handle errors and loading states in asynchronous code
● Build user interfaces that reflect dynamic data

Tasks

1. Fetch and Display Posts

● Use fetch() to retrieve a list of posts from
https://jsonplaceholder.typicode.com/posts
● Convert the response to JSON
● Dynamically render the post titles and bodies inside the #postList div

2. Create and Send a New Post

● Add a form with title and body fields
● Use fetch() with the POST method to send the data as JSON to the API
● Show a confirmation message with the response data

3. Add Loading and Error States

● Show a “Loading…” message while the fetch is in progress
● Display an error message if the fetch fails

Deliverables:

● A working fetch call that loads and displays posts
    1
    ● A functional form that submits data via POST
    ● Error handling and user feedback (e.g., loading spinner or error messages)
    ● Clean and well-commented JavaScript code
    💡 Extensions
    ● Allow users to delete posts using a DELETE request
    ● Allow users to filter posts by keyword using an input field
        ○ Use async/await instead of .then()