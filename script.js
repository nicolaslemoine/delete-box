// jQuery
$(document).ready(function(){

	// Confirm delete
    $('.delete-action').click(function() {
        //Get the path of the href
        var item_link = $(this).attr('href');

        //Select the <tr> and get the height
        var item_tr = $(this).closest('tr');
        var item_tr_height = item_tr.outerHeight();
        var item_tr_value = item_tr.html();

        //Display the confirm box in the <tr>
        item_tr.empty();
        item_tr.append('<td colspan="3" height="'+item_tr_height+'" class="delete-box">\
        	Are you sure you want to delete this entry? <a href="'+item_link+'" class="delete-yes">Yes</a><a class="delete-no">No</a>\
        </td>');

        //Proceed with delete
        $('.delete-yes').click(function() {
        	item_tr.remove();
            return false;
        });

        //Do not delete, remove the box
        $('.delete-no').click(function() {
            item_tr.empty().append(item_tr_value);

            return false;
        });

        return false;
    });
});