var order = {
    product: new Array()
};

var Product = {
    ProductName : "",
    Price : 0
}

function freeShipping(order){
    let isFreeShip = false

    var price = Object.keys(order).map((key) => order[key]);

    let sum = 0
    price.forEach(item => {
        sum += item
    });

    if (sum > 50.00) {
        isFreeShip = true
    }

    return isFreeShip
}

console.log(freeShipping({ "apple": 11.99, "guava": 35.99, "strawberry": 13.99 }))