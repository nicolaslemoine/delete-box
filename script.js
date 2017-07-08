// jQuery
$(document).ready(function(){

	// Confirm delete
    var $deleteAction = $('.delete-action');
    $deleteAction.click(function() {
        //Get the path of the href
        var itemLink = $deleteAction.attr('href');

        //Select the <tr> and get the height
        var itemTr = $deleteAction.closest('tr');
        var itemTrHeight = itemTr.outerHeight();
        var itemTrValue = itemTr.html();

        //Display the confirm box in the <tr>
        itemTr.empty();
        itemTr.append('<td colspan="3" height="'+itemTrHeight+'" class="delete-box">\
        	Are you sure you want to delete this entry? <a href="'+item_link+'" class="delete-yes">Yes</a><a class="delete-no">No</a>\
        </td>');

        //Proceed with delete
        $('.delete-yes').click(function() {
        	itemTr.remove();
            return false;
        });

        //Do not delete, remove the box
        $('.delete-no').click(function() {
            itemTr.empty().append(itemTrValue);

            return false;
        });

        return false;
    });
});