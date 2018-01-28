String.prototype.replaceAll = function (search, replace) {
    return this.split(search).join(replace);
}
function createPaymentButton_Click() {
    var iorder = "";
    simpleCart.each(function (item) {
        iorder += item.get('quantity') + " x " + item.get("name") + " x " + item.get("total")+" ; "
    });
    $('#Message').val("Order: " +
       /* $('.simpleCart_items').html().replaceAll("<", "@@").replaceAll(">", "@@@")*/
       iorder

        + " Comment: " + $('#PreComment_CheckOut').val())
    $('#createPaymentSubmit').click();
}
$(document).ready(function () {
    $('#createPaymentButton').bind('click', createPaymentButton_Click);
});