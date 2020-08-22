$(function () {
    $(".create-form").on("submit", function(event) {
    event.preventDefault();
        var newPost = {
            username: $("#newUser").val().trim(),
            user_post: $("#newPost").val().trim()
        }
        console.log(newPost);
    })
})