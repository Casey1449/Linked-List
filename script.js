// var $nameField = $('.bookmark-name')
// var $urlField = $('.url-address')
var $nameInput = $('.bookmark-name');
var $urlInput = $('.url-address');
var $bookmarkButton = $('.bookmark-button')

function makeArticle(string1, string2){
  $('.bookmark-list').append('<article class="list-item"><p>' + string1 + '</p><p>' + string2 + '</p><button class="read-button">mark as read</button><button class="remove-button">remove</button></article>')}

  $('.bookmark-button').on('click', function() {
    makeArticle($nameInput.val(), $urlInput.val());
  })
















$('.bookmark-list').on('click', 'button.read-button', function(){
    $(this).parent().toggleClass('read');
});

$('.bookmark-list').on('click', 'button.remove-button', function(){
    $(this).parent().remove();
});
