const chefReceivedOrder =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Chef Received Order'
            resolve()
        }, 2000)
    })
}

const pizzaSauceAdded =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Pizza Sauce added'
            resolve()
        }, 10000)
    })
}

const firstLayerOfCheeseAdded =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'First layer of cheeze added'
            resolve()
        }, 5000)
    })
}

const toppingsAdded =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Toppings added'
            resolve()
        }, 12000)
    })
}

const secondLayerOfCheeseAdded =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Second layer of cheeze added'
            resolve()
        }, 5000)
    })
}

const pizzaBaked =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Pizza baked!'
            resolve()
        }, 15000)
    })
}

const oreganoAdded =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Oregano added and packed'
            resolve()
        }, 8000)
    })
}

const packageReceived =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Package received at counter'
            resolve()
        }, 2000)
    })
}