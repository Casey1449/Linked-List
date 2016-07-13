// var $nameField = $('.bookmark-name')
// var $urlField = $('.url-address')
var $nameInput = $('.bookmark-name');
var $urlInput = $('.url-address');
var $bookmarkButton = $('.bookmark-button')
var $removeButton = $('.remove-button')

function makeArticle(string1, string2){

  $('.bookmark-list').append('<article class="list-item"><p>' + string1 + '</p><p>' + '<a href="' + string2 + '">' + string2 + '</a>' + '</p><button class="read-button">mark as read</button><button class="remove-button">remove</button></article>')}

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

// $('.url-address').on('click', function(){
//   $('.bookmark-button').disabled = "false";
// })

// $('.bookmark-button').prop('disabled', true);
//      $('input').on('change', function() {
//         if($('.url-address').val() !== '' && $('.bookmark-name').val() !== ''){
//            $('.bookmark-button').prop('disabled', false);
//         }
//      });

$('input').on('keyup', function() {
  if( $('.url-address').val() !== '' && $('.bookmark-name').val() !== ''){
           $('.bookmark-button').prop('disabled', false);
        }else {
          $('.bookmark-button').prop('disabled', true);
        }
     });
