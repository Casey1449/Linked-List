// var $nameField = $('.bookmark-name')
// var $urlField = $('.url-address')
var $nameInput = $('.bookmark-name');
var $urlInput = $('.url-address');
var $bookmarkButton = $('.bookmark-button')
var $removeButton = $('.remove-button')

function makeArticle(string1, string2){
<<<<<<< HEAD
  $('.bookmark-list').html('<article class="list-item"><p>' + string1 + '</p><p>' + '<a href="' + string2 + '">' + string2 + '</a>' + '</p><button class="read-button">READ</button><button class="remove-button">REMOVE</button></article>')}
=======
  $('.bookmark-list').append('<article class="list-item"><p>' + string1 + '</p><p>' + string2 + '</p><button class="read-button">mark as read</button><button class="remove-button">remove</button></article>')}
>>>>>>> master

  $('.bookmark-button').on('click', function() {
    if ($nameInput.val() ==='' || $urlInput.val() === '')
    {alert("Please enter a name AND a URL")}
    else {
      makeArticle($nameInput.val(), $urlInput.val());
    }
  })

<<<<<<< HEAD
  function removeParentArticle() {
    $(this).parent().remove();
  }

  $('.remove-button').on('click', function() {
    debugger;
    removeParentArticle();
  });
=======















$('.bookmark-list').on('click', 'button.read-button', function(){
    $(this).parent().toggleClass('read');
});

$('.bookmark-list').on('click', 'button.remove-button', function(){
    $(this).parent().remove();
});
>>>>>>> master
