const Renderer = function () {
    const renderPosts = function(posts){
        $("#posts").empty()
        for(let index in posts){
            $("#posts").append(`<div class='post post-text' id=${posts[index].id}>${posts[index].text}</div>`)
            for(let index2 in posts[index].comments){
                let newComment = $(`<div class='comments' id=${posts[index].comments[index2].id}><i class="fas fa-minus-circle" id=i${posts[index].comments[index2].id.slice(1)}></i>${posts[index].comments[index2].text}</div>`)
                $(`#${posts[index].id}`).append(newComment)
            }
            $(`#${posts[index].id}`).append(`</br><input class="comInput" placeholder="add comment here"></input>`)
            $(`#${posts[index].id}`).append(`<button class="comButton">post</button>`)
            $(`#${posts[index].id}`).append(`<button class="postDel">Delete Post</button>`)
            $("#input").empty()
            
 
        }
    }
    return {
        renderPosts
    }
 }