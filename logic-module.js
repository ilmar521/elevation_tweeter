
const Tweeter = function () {
    
    const _posts = [
        {
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
        }
    ]

    let postIdCounter = 2
    let commentIdCounter = 6

    const getRecordFromArray = (id, arr) => {
        const index = arr.findIndex(item => item.id === id)
        if (index !== -1) {
            return arr[index]
        }           
        return false
    }

    const getPosts = () => _posts

    const addPost = post => {
        postIdCounter++ 
        _posts.push({text: post, id: `p${postIdCounter}`, comments:[]})      
    }

    const removePost = (postId) => {
        const index = _posts.findIndex(item => item.id === postId)
        if (index !== -1) {
            _posts.splice(index, 1)
            postIdCounter--
        }     
    }

    const addComment = (comment, postId) => {       
        const post = getRecordFromArray(postId, _posts)
        commentIdCounter++ 
        post.comments.push({id: `c${commentIdCounter}`, text: comment})  
    }

    const removeComment = (postId, commentId)  => {
        const post = getRecordFromArray(postId, _posts)
        const index = post.comments.findIndex(item => item.id === commentId)
        if (index !== -1) {
            post.comments.splice(index, 1)
            commentIdCounter--
        }   
    }

    return {
        getPosts: getPosts, 
        addPost: addPost,
        removePost: removePost,   
        addComment: addComment,
        removeComment: removeComment
    }
        
}

const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

console.log('*************************************************')

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
console.log('*************************************************')

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

console.log('*************************************************')

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}