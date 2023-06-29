const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

const post = function () {
    tweeter.addPost($('#input').val())
    renderer.renderPosts(tweeter.getPosts())
}

$('#posts').on('click', '.delete', function () {
    tweeter.removePost($(this).closest('.post').data('id'))
    renderer.renderPosts(tweeter.getPosts())   
})

$('#posts').on('click', '.delete-comment', function () {
    tweeter.removeComment($(this).closest('.post').data('id'), $(this).closest('p').data('id'))
    renderer.renderPosts(tweeter.getPosts())       
})

$('#posts').on('click', '.button_comment', function () {
    tweeter.addComment($(this).siblings('.input_comment').val(), $(this).closest('.post').data('id'))
    renderer.renderPosts(tweeter.getPosts())   
})
