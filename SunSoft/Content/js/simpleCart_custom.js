simpleCart({
    checkout: {
        type: "PayPal",
        email: "you@yours.com"
    },
    cartColumns: [

        //{view:'image' , attr:'thumb', label: false},
        {
            view: function (item, column) {
                return "<img src='" + item.get('image') + "'>";
            },
            attr: 'image'
        },

        { attr: "price", label: "Price", view: 'currency' },

        { attr: "quantity", label: "Qty" },

        { attr: "total", label: "SubTotal", view: 'currency' },
        { view: "remove", text: "Remove", label: false }
    ],
    cartStyle: "table"
});