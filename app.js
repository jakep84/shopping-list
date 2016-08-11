$(document).ready(function () {
    $(".shopping-item-delete").click(function () {
        console.log('delete works');
		
    });
	//strike through
	//http://www.w3schools.com/jsref/jsref_strike.asp
    $(".shopping-item-toggle").click(function () {
        console.log('check works');
    });
    $("#js-shopping-list-form").submit(function () {
        console.log('submit works');
		event.preventDefault();
		var groceryThing = $('#shopping-list-entry').val();
		console.log(groceryThing);
		//add new li element
		$('.shopping-list').append('<li><span class="shopping-item">'+ groceryThing +'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>') });
});
//delete =   shopping-item-delete
//check =    shopping-item-toggle
//add item = button type="submit -- add item to the list (think .append())
//something to this effect
//$('.shopping-list').Click.append('<li>
//        <span class="shopping-item">'+'$('shopping-list-entry').val()'+'</span>
//        <div class="shopping-item-controls">
//          <button class="shopping-item-toggle">
//            <span class="button-label">check</span>
//          </button>
//          <button class="shopping-item-delete">
//            <span class="button-label">delete</span>
//          </button>
//        </div>
//      </li>');