const chefReceivedOrder =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Chef Received Order'
            resolve()
        }, 2000)
    })
}

const preparingFood =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Preparing Food'
            resolve()
        }, 10000)
    })
}

const preparationDone =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Preparation Done'
            resolve()
        }, 5000)
    })
}

const packing =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Packing...'
            resolve()
        }, 12000)
    })
}

const receivedAtCounter =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Received at counter'
            resolve()
        }, 5000)
    })
}

const orderPickUp =(orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Order picked up!'
            resolve()
        }, 15000)
    })
}

const onYourWay =(orderId) => {
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