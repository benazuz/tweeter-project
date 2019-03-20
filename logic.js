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

// console.log(_posts[0])
// let logic = Tweeter()
// console.log("hi")
// console.log(logic.getPost())
// logic.addPost("this is a lovely day guys")
// logic.addPost("this is a day guys")
// logic.addPost("this is a bad day guys")
// logic.addPost("gdfgsfdgsfdgsfdg")
// console.log(logic.getPost())
// logic.removePost("p2")
// console.log(logic.getPost())
// logic.addPost("this is a test")
// logic.addPost("this is a test2")
// logic.removePost("p5")
// logic.addComment("p4", "I LOVE THIS POST!!")
// logic.addComment("p1", "oh boy")
// logic.removeComment("p1", "c8")
// logic.removeComment("p1", "c1")

const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}