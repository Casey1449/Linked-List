var $nameInput = $('.bookmark-name');
var $urlInput = $('.url-address');
var $bookmarkButton = $('.bookmark-button')
var $removeButton = $('.remove-button')
var totalBookmarkCounter = 0;
var readBookmarkCounter = 0;
var unreadBookmarkCounter = 0;

function makeCounters() {
  $('.counters').html('<p>' + totalBookmarkCounter + ' total mark(s). </p>');
  $('.counters').append('<p>' + unreadBookmarkCounter + ' unread,  ' + readBookmarkCounter + ' read.</p>')
};

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
  if ($nameInput.val() ==='' || $urlInput.val() === ''){
    alert("Please enter a name AND a URL")
  } else if (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test($urlInput.val())){
      makeArticle($nameInput.val(), $urlInput.val());
      totalBookmarkCounter ++;
      unreadBookmarkCounter ++;
      makeCounters();
  } else {
      alert("invalid URL");
  };
})

$('.bookmark-list').on('click', 'button.read-button', function(){
    $(this).parent().toggleClass('read');
    readBookmarkCounter = $('.read').length;
    unreadBookmarkCounter = totalBookmarkCounter - readBookmarkCounter;
    makeCounters();
    if($(this).parent().hasClass('read')){
      $(this).text('mark as unread')
    } else {
      $(this).text('mark as read')
    }
});

$('.bookmark-list').on('click', 'button.remove-button', function(){
    $(this).parent().remove();
    totalBookmarkCounter --;
    readBookmarkCounter = $('.read').length;
    unreadBookmarkCounter = totalBookmarkCounter - readBookmarkCounter;
    makeCounters();
});
