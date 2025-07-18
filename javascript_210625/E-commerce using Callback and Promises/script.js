// using CALLBACK

let walletBalance = 200000;
console.log(`Wallet Balence:Rs.${walletBalance}`)

const items = [
    { name: "Laptop", price: 45000 },
    { name: "Smartphone", price: 25000 },
    { name: "Headphones", price: 1500 },
    { name: "Backpack", price: 1200 },
    { name: "Smartwatch", price: 3000 },
    { name: "Keyboard", price: 700 },
    { name: "Mouse", price: 500 },
    { name: "Monitor", price: 9000 },
    { name: "Power Bank", price: 1500 },
    { name: "USB Cable", price: 150 }
];



console.log(items);

function createOrder(items, callback) {
    console.log("Order Created:");
    const selectItems = items.filter(item => item.price === 45000 || item.price === 1200 || item.price === 500)
    console.log("Order Details:", selectItems)
    callback(selectItems);
}

function payment(selectItems, callback) {
    const totalPrice = selectItems.reduce((sum, item) => sum + item.price, 0);
    console.log("Total Amount:", totalPrice)

    if (totalPrice <= walletBalance) {
        console.log(`Payement of Rs.${totalPrice} successful`);
        walletBalance = walletBalance - totalPrice;
        callback();
    } else {
        console.log("Payment Failed");
    }
}


function orderSummary(callback) {
    console.log("Order summary:")
    console.log("--Payment Succesful--")
     const selectItems = items.filter(item => item.price === 45000 || item.price === 1200 || item.price === 500)
    console.log("Order Details:", selectItems)

    callback();
}

function updateWallet(callback) {
    console.log(`Wallet Updated. New balence: Rs.${walletBalance}`);
}


//execution with callbacks
createOrder(items, function (selectItems) {
    payment(selectItems, function () {
        orderSummary(function () {
            updateWallet();
        })
    })
})

------------------------------------------------------------------------------------------------------------------------------------------

//using PROMISES

let walletBalance = 200000;
console.log(`Wallet Balence:Rs.${walletBalance}`)

const items = [
    { name: "Laptop", price: 45000 },
    { name: "Smartphone", price: 25000 },
    { name: "Headphones", price: 1500 },
    { name: "Backpack", price: 1200 },
    { name: "Smartwatch", price: 3000 },
    { name: "Keyboard", price: 700 },
    { name: "Mouse", price: 500 },
    { name: "Monitor", price: 9000 },
    { name: "Power Bank", price: 1500 },
    { name: "USB Cable", price: 150 }
];



console.log(items);

function createOrder(items) {
    return new Promise((resolve, reject) => {
        console.log("Order Created :");

        const selectItems = items.filter(item => item.price === 45000 || item.price === 1200 || item.price === 500)
        console.log("Order Details:", selectItems)

        if (selectItems.length > 0) {
            resolve(selectItems);
        } else {
            reject("No item selected");
        }

    });
}

function payment(selectItems) {
    return new Promise((resolve, reject) => {
        const totalPrice = selectItems.reduce((sum, item) => sum + item.price, 0);
        console.log("Total Amount:", totalPrice)

        if (totalPrice <= walletBalance) {
            console.log(`Payment of Rs.${totalPrice} successful`);
            walletBalance = walletBalance - totalPrice;
            resolve();
        } else {
            reject("Payment Failed");
        }
    })
}


function orderSummary() {
    return new Promise((resolve) => {
        console.log("Order Summary:")
        console.log("--Payment Succesful--")
        const selectItems = items.filter(item => item.price === 45000 || item.price === 1200 || item.price === 500)
        console.log("Order Details:", selectItems)
        resolve();
    })
}

function updateWallet(){
    return new Promise((resolve)=>{
         console.log(`Wallet Updated. New balance: Rs.${walletBalance}`);
         resolve();
    })
}

//execution
createOrder(items)
    .then(payment)
    .then(orderSummary)
    .then(updateWallet)
    .catch((error)=>{
        console.log("Error:",error)
    })
