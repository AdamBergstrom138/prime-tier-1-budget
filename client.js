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

    calculateRemainingBudget();
    displayPurchases();
}

function calculateRemainingBudget() {
    console.log('in calculateRemainingBudget');
    let totalPrices = 0;
    for(let i = 0; i < purchases.length; i++) {
        totalPrices += Number(purchases[i].price);
    }
    console.log('totalPrices:', totalPrices);

    const remainingBudget = budget - totalPrices;

    let el = $( '#remainingBudgetOut' );
    el.empty();
    el.append( remainingBudget );
}

function displayPurchases(){
    console.log('in displayPurchases');
    let el = $( '#purchasesOut');
    el.empty();
    for (purchase of purchases ){
        el.append( '<li>' + purchase.name + ': $' + purchase.price + '</li>' );
    }
}

function readyNow() {
    let el = $( '#budgetOut');
    el.empty();
    el.append( budget );

    $( '#addPurchaseButton' ).on( 'click', addPurchase );

    calculateRemainingBudget();
}