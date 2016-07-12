var $nameInput = $('.bookmark-name');
var $urlInput = $('.url-address');
var $bookmarkButton = $('.bookmark-button');

function makeArticle(string1, string2){
  $('.bookmark-list').html('<article><p>' + string1 + '</p><p>' + string2 + '</p></article>');
}

$('.bookmark-button').on('click', function(){
  makeArticle($nameInput.val(), $urlInput.val());
});
