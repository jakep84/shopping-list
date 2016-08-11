$(document).ready(function () {
	//whenever you are changing something that isn't there yet ( but will be....)
	$('.shopping-list').on('click', '.shopping-item-delete', function () {
		console.log("new delete works");
		//actually delete
	});
	//strike through
	//http://www.w3schools.com/jsref/jsref_strike.asp
	$('.shopping-list').on('click', '.shopping-item-toggle', function() {
		console.log('new check works');
		//actually line through

	});
	$("#js-shopping-list-form").submit(function () {
		console.log('submit works');
		event.preventDefault();
		var groceryThing = $('#shopping-list-entry').val();
		console.log(groceryThing);
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