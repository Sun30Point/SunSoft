simpleCart.bind("afterCreate", function () {
    $cart_table = $(".simpleCart_items table");
    $cart_table.addClass("timetable_sub");
    $('.item-image').addClass("invert-image");
    $('a.simpleCart_remove').html("<img src='/content/images/close_1.png' />");
});
simpleCart({
    checkout: {
        type: "PayPal",
        email: "you@yours.com"
    },
    cartColumns: [

        //{view:'image' , attr:'thumb', label: false},
        { view: "remove", class: "Remove", label: $('#remove_hide_label').val() },
        
        {
            view: function (item, column) {
                return "<a href=\"#\"><img class=\"img-responsive\" src='" + item.get('image') + "'></a>";
            },
            attr: 'image',
            label: $('#product_hide_label').val()
        },
        {
            view: function (item, column) {
                return"<div class=\"quantity\">"
                            +"<div class=\"quantity-select\">"
                +"<a href=\"javascript:;\" class=\"entry value-minus simpleCart_decrement\">&nbsp;</a>"
                    + "<div class=\"entry value\"><span>" + item.get('quantity') + "</span></div>"
                    + "<a href=\"javascript:;\" class=\"entry value-plus active simpleCart_increment\">&nbsp;</a>"
                +"</div>"
                        +"</div>"
                ;
            },
            attr: 'quantity',
            label:$('#quantity_hide_label').val()
        },
       //{view:"decrement", label:false, text:"-"},
       // { attr: "quantity", /*label: "Qty"*/ label: $('#quantity_hide_label').val() },
       // { view: "increment", label: false, text: "+" },
        { attr: "name", /*label: "Qty"*/label: $('#productName_hide_label').val() },
        { attr: "total", label: $('#price_hide_label').val() /*label: "SubTotal"*/, view: 'currency' },
        
    ],
    cartStyle: "table"
});
