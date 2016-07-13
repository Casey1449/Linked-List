// var $nameField = $('.bookmark-name')
// var $urlField = $('.url-address')
var $nameInput = $('.bookmark-name');
var $urlInput = $('.url-address');
var $bookmarkButton = $('.bookmark-button')
var $removeButton = $('.remove-button')
function checkBookmarkButton() {
  if ($urlInput.val() !== '' && $nameInput.val() !== '') {
  $($bookmarkButton).prop('disabled', false)
} else {
    $($bookmarkButton).prop('disabled', true)
  };
}

$('input').on('keyup', function() {
  checkBookmarkButton();
})





function makeArticle(string1, string2){

  $('.bookmark-list').append('<article class="list-item"><p>' + string1 + '<a href="' + string2 + '">' + 'Go!' + '</a>' + '</p><button class="read-button">mark as read</button><button class="remove-button">remove</button></article>')}

  $('.bookmark-button').on('click', function() {
    if ($nameInput.val() ==='' || $urlInput.val() === '')
    {alert("Please enter a name AND a URL")}
    else {
      makeArticle($nameInput.val(), $urlInput.val());
    }
  })

$('.bookmark-list').on('click', 'button.read-button', function(){
    $(this).parent().toggleClass('read');
});

$('.bookmark-list').on('click', 'button.remove-button', function(){
    $(this).parent().remove();
});

// $('.url-address').on('input', function(){
//     if ($('.bookmark-name').val() !== '') {
//       $('.bookmark-button').disabled = false;
//       }
// });

$()
