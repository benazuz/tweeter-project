const tweeter = Tweeter()
const renderer = Renderer()
$("#post").on("click", function(){
    let text = $("#input").val()
    tweeter.addPost(text)
    renderer.renderPosts(tweeter.getPosts())
})
renderer.renderPosts(tweeter.getPosts())

$(".comButton").on("click", function(){
    let pId = $(this).closest(".post").attr("id")
    let text = $(".comInput").val()
    tweeter.addComment(pId, text)
    renderer.renderPosts(tweeter.getPosts())
})

// tweeter.addPost("Hello guys just testing")

// renderer.renderPosts(tweeter.getPosts())
