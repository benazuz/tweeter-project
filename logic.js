const Tweeter = function () {

    let counterPId = 2
    let counterCId = 6
    const _posts = [{
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }]

    const getPosts = function () {
        return _posts
    }

    const addPost = function (text) {
        _posts.push({
            text: text,
            id: "p" + (counterPId + 1),
            comments: []
        })
        counterPId++
    }

    const removePost = function (pId) {
        for (let post in _posts) {
            if (_posts[post].id == pId) {
                _posts.splice(post, 1)
                console.log("the post with id of " + pId + " has been deleted")
            }
        }
    }

    const addComment = function (pId, text) {
        for (let post in _posts) {
            if (_posts[post].id == pId) {
                comment = {}
                const id = "c" + (counterCId + 1)
                counterCId++
                comment.id = id
                comment.text = text

                _posts[post].comments.push(comment)
            }
        }
    }

    const removeComment = function (postId, commentId) {
        for (let post in _posts) {
            if (_posts[post].id == postId) {
                for (let comment in _posts[post].comments)
                    if (_posts[post].comments[comment].id == commentId) {
                        _posts[post].comments.splice(comment, 1)

                    }
            }
            return
        }
    }

    return {
        posts: _posts,
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment,

    }


}

