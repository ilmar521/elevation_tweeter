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


{/* <div class="post" data-id="p1">
<p class="post-text">First post!</p>
<div class="comments">
  <p data-id="c1">
    <button class="delete-comment">X</button> First comment on first post!
  </p>
  <p data-id="c2"><button class="delete-comment">X</button> Second comment on first post!!</p>
  <p data-id="c3"><button class="delete-comment">X</button> Third comment on first post!!!</p>
  <input class="input_comment" type="text" placeholder="Got something to say?">
  <button class="button_comment">Comment</button>
</div><button class="delete">Delete post</button>
</div> */}