// Select the item by its class
var items = document.getElementsByClassName('card');

// Loop through all items and add an event listener to each
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
      // Open a new page
      window.open('ourcars/ourcars.html','_self') ;
    });
  }