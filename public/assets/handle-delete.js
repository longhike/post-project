// $(document).ready(function () {


//     $(document).on("click", "button.delete", handlePostDelete);


//     function handlePostDelete() {
//         let currentPost = $(this).parent().parent().data("post");
//         deletePost(currentPost.id);
//       }

//     function deletePost(id) {
//         $.ajax({
//           method: "DELETE",
//           url: "/api/posts/" + id
//         })
//           .then(function() {
//               location.reload()
//           })
//       }


// })