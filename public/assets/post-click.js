$(function () { 
    $(".create-form").on("submit", (e) => {
        e.preventDefault()

        let newPost = {
            username: $('#newUser').val().trim(),
            user_post: $('#newPost').val().trim()
        }
        console.log(newPost);

        $.ajax('/api/posts', {
            type: 'POST',
            data: newPost
        })
        .then(() => { 
                console.log("success!");
                location.reload()
            })
    })
 })