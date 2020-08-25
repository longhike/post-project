$(function () { 
    $(".create-form").on("submit", (e) => {
        e.preventDefault()

        let newPost = {
          username: $("#newUser").val().trim(),
          song_title: $("#newSong").val().trim(),
          song_artist: $("#newArtist").val().trim(),
          user_inst: $("#userPlays").val().trim(),
          user_post: $("#newPost").val().trim(),
          media: $("#ytLink").val().trim(),
        };
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