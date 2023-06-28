
const Renderer = function () {
    
    const renderPosts = (posts) => {
        $('#posts').empty()

        for (const post of posts) {
            const newPost = $(`<div class="post" data-id=${post.id}></div>`) 
            $(newPost).append(`<p class="post-text">${post.text}</p>`)
            const newComments = $(`<div class="comments"></div>`) 
            for (const comment of post.comments) {
                $(newComments).append(`<p data-id=${comment.id}><button class="delete-comment" data-id=${comment.id} data-post-id=${post.id}>X</button> ${comment.text}</p>`)    
            }
            $(newComments).append(`<input class="input_comment" type="text" placeholder="Got something to say?">`) 
            $(newComments).append(`<button class="button_comment">Comment</button>`) 
            $(newPost).append(newComments)
            $(newPost).append(`<button class="delete" data-id=${post.id}>Delete post</button>`)
            $('#posts').append(newPost)
        }

    }

    return {
        renderPosts
    }
}