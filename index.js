fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(data => {
        const posts = data.slice(0, 5) 
        let html = ''
        for (let post of posts){
            html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr>
            `
        }
        document.querySelector('#blog-post').innerHTML = html 
    })

document.getElementById("btn").addEventListener('submit', function(e){
    e.preventDefault()
    const postTitle = document.getElementById("title").value
    const postBody = document.getElementById("body").value
    const data = {
        title : postTitle,
        body : postBody
    }
})


