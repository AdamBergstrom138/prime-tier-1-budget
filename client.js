console.log('JS');

$( document ).ready( readyNow );

const budget = 25000;
let purchases = [];

function addPurchase() {
    console.log('in addPurchase');

    let newPurchase = {
        name: $('#purchaseNameIn').val(),
        price: $('#purchasePriceIn').val()
    }
    purchases.push( newPurchase );

    $('#purchaseNameIn').val( '' );
    $('#purchasePriceIn').val( '' );
}

function readyNow() {
    let el = $( '#budgetOut');
    el.empty();
    el.append( budget );

    $( '#addPurchaseButton' ).on( 'click', addPurchase );
}