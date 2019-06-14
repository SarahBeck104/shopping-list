//document ready
$(function(){

    // listen for form submission
    $('#js-shopping-list-form').submit(function(event) {
  
      // stop default form from submitting
      event.preventDefault();
  
  
  })

  // enter new items and add them as an 'li'
  $('.shopping-list').append(
    `<li>
    <span class="shopping-item">${listItem}</span>
    <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
    `
  )

  // permanently remove items from the list
//listen
$('shopping-list').on('click', '.shopping-item.delete', function(event) {
  //removes the closest shopping list item
  $(this).closest('li').remove();
})

  // check and uncheck items
  //checked off styling

$('shopping-list').on('click', '.shopping-item-toggle', function(event) {

  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
})


});
