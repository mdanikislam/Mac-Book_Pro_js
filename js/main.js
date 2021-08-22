// Total price with promo code 
var totalWithPromo = document.getElementById('totalWithPromo');

// Apply button 
var button = document.getElementById('btn');

// Promo code input
var promoCode = document.getElementById('promo-code');

function handlePrice(id, price) {
    // Clicked id previous value set as 0
    document.getElementById(id).innerHTML = 0;

    // Best price
    var bestPrice = Number(document.getElementById('best-price').innerHTML);

    // Memory cost
    var memoryCost = Number(document.getElementById('memory-cost').innerHTML);

    // Storage Cost 
    var storageCost = Number(document.getElementById('storage-cost').innerHTML);

    // Delivery charge
    var deliveryCharge = Number(document.getElementById('delivery-charge').innerHTML);

    // Update total price
    var total = bestPrice + memoryCost + storageCost + deliveryCharge + price;

    //Set updated item price
    document.getElementById(id).innerHTML = price;

    //Update total price
    document.getElementById('total').innerHTML = total;

    // Update total with promo code price
    totalWithPromo.innerHTML = total;

    // Enabled promo codes apply button
    button.disabled = false;
}

function handlePromoCode() {
    if ('stevekaku' === promoCode.value) { //Compare promo code
        // Get total before applying promo code
        var total = Number(totalWithPromo.innerHTML);

        //Set total after 20% discount
        totalWithPromo.innerHTML = total *= 0.8;

        //Set promo code input empty
        promoCode.value = "";

        //Disabled promo codes apply button
        button.disabled = true;
    }
}