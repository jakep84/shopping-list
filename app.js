$(document).ready(function () {
	$('.shopping-list').on('click', '.shopping-item-delete', function () {
		$(this).closest("li").remove();
			console.log("delete works");
	});
	
	$('.shopping-list').on('click', '.shopping-item-toggle', function() {
		$(this).closest('li').children('.shopping-item').toggleClass("shopping-item__checked");
				console.log('line-through works');
	});
	$("#js-shopping-list-form").submit(function () {
		console.log('submit works');
		event.preventDefault();
		var groceryThing = $('#shopping-list-entry').val();
		console.log("You added "+groceryThing);
		$('.shopping-list').append('<li><span class="shopping-item">'+ groceryThing +'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>') });
});

