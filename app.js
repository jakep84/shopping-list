$(document).ready(function() {
  $(".shopping-item-delete").click(function() {
               console.log('delete works');
               });  
  $(".shopping-item-toggle").click(function() {
               console.log('check works');
               });  
  $("#js-shopping-list-form").submit(function(event) {
      console.log('submit works');
       event.preventDefault();
  });
});
//delete =   shopping-item-delete
//check =    shopping-item-toggle
//add item = button type="submit