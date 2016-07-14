var $nameInput = $('.bookmark-name');
var $urlInput = $('.url-address');
var $bookmarkButton = $('.bookmark-button')
var $removeButton = $('.remove-button')
var totalBookmarkCounter = 0;
var readBookmarkCounter = 0;
var unreadBookmarkCounter = 0;
var clearReadButton = $('.clear-read');

function makeCounters() {
  $('.counters').html('<p>' + totalBookmarkCounter + ' total mark(s). </p>');
  $('.counters').append('<p>' + unreadBookmarkCounter + ' unread,  ' + readBookmarkCounter + ' read.</p>')
}

function checkBookmarkButton() {
  if ($urlInput.val() !== '' && $nameInput.val() !== '') {
    $($bookmarkButton).prop('disabled', false)
  } else {
    $($bookmarkButton).prop('disabled', true)
  };
}

function validateUrl(url){
  return /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(url);
}

function makeArticle(string1, string2){
  $('.bookmark-list').append('<article class="list-item"><p>' + string1 + '<a href="' + string2 + '">' + 'Go!' + '</a>' + '</p><button class="read-button">mark as read</button><button class="remove-button">remove</button></article>')}

function clearButtonCheck(){
  if (readBookmarkCounter > 0){
    $('.clear-read').css('visibility', 'visible');
  } else {
    $('.clear-read').css('visibility', 'hidden');
  }
}

$('input').on('keyup', function() {
  checkBookmarkButton();
})

$('.bookmark-button').on('click', function() {
  if (validateUrl($urlInput.val())){
      makeArticle($nameInput.val(), $urlInput.val());
      totalBookmarkCounter ++;
      unreadBookmarkCounter ++;
      makeCounters();
  } else {
      alert("That's not a valid URL, unfortch 😢");
  };
})

$('.bookmark-list').on('click', 'button.read-button', function(){
    $(this).parent().toggleClass('read');
    readBookmarkCounter = $('.read').length;
    unreadBookmarkCounter = totalBookmarkCounter - readBookmarkCounter;
    makeCounters();
    clearButtonCheck();
    if($(this).parent().hasClass('read')){
      $(this).text('mark as unread')
    } else {
      $(this).text('mark as read')
    };
});

$('.bookmark-list').on('click', 'button.remove-button', function(){
    $(this).parent().remove();
    totalBookmarkCounter --;
    readBookmarkCounter = $('.read').length;
    unreadBookmarkCounter = totalBookmarkCounter - readBookmarkCounter;
    makeCounters();
    clearButtonCheck();
});

$('.clear-read').on('click', function(){
  $('.read').remove();
  totalBookmarkCounter = totalBookmarkCounter - readBookmarkCounter;
  readBookmarkCounter = 0;
  unreadBookmarkCounter = totalBookmarkCounter - readBookmarkCounter;
  makeCounters();
  $('.clear-read').css('visibility', 'hidden');
})
