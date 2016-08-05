$(document).ready(function () {
    $(".shopping-item-delete").click(function () {
        console.log('delete works');
    });
    $(".shopping-item-toggle").click(function () {
        console.log('check works');
        //  if ($())             
    });
    $("#js-shopping-list-form").submit(function () {
        $('.shopping-list').append('<li> <span class = "shopping-item" > '+'
            $('shopping-list-entry').val()
            '+' < /span> < div class = "shopping-item-controls" > < button class = "shopping-item-toggle" > < span class = "button-label" > check < /span> < /button> < button class = "shopping-item-delete" > < span class = "button-label" > delete < /span> < /button> < /div> < /li>');
            console.log('submit works'); event.preventDefault(););
    });
});
//delete =   shopping-item-delete
//check =    shopping-item-toggle
//add item = button type="submit -- add item to the list (think .append())
//$('.shopping-list').append('<li>
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