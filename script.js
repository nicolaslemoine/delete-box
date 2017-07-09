// jQuery
$(document).ready(function(){

    // Confirm delete
    $('.delete-action').click(function() {
        //Select the <tr> and get height and value
        var itemTr = $(this).closest('tr');
        var itemTrHeight = itemTr.outerHeight();
        var itemTrValue = itemTr.html();


        //Display the confirm box in the <tr>
        itemTr.empty().append('<td colspan="3" height="'+itemTrHeight+'" class="delete-box">\
            Êtes-vous sûr de vouloir supprimer cet élément ? <a class="delete-yes">Oui</a><a class="delete-no">Non</a>\
        </td>');

        //Proceed with delete
        $('.delete-yes').click(function() {
            itemTr.remove();

            return true;
        });

        //Do not delete, remove the box
        $('.delete-no').click(function() {
            itemTr.empty().append(itemTrValue);

            return false;
        });

        return false;
    });
});