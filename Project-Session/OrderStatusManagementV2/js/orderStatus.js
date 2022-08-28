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
            document.getElementById(orderId).innerText = 'Preparing Food'
            resolve()
        }, 10000)
    })
}

const firstLayerOfCheeseAdded =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Preparation Done'
            resolve()
        }, 5000)
    })
}

const toppingsAdded =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Packing...'
            resolve()
        }, 12000)
    })
}

const secondLayerOfCheeseAdded =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Received at counter'
            resolve()
        }, 5000)
    })
}

const pizzaBaked =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Order picked up!'
            resolve()
        }, 15000)
    })
}

const oreganoAdded =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'On your way'
            resolve()
        }, 8000)
    })
}

const packageReceived =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Delivered'
            resolve()
        }, 3000)
    })
}