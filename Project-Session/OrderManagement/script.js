let orderStatus = document.getElementsByClassName('order-status-block')

const executeOrder = () => {
    let orderId = document.getElementById('order-id-input').value
    document.getElementById('order-id-input').value = ''
    
    document.getElementById('order-id-display').innerText = `Order Status ID: ${orderId}`
    let orderStatus = document.getElementsByClassName('order-status-block')
    orderStatus[0].classList.remove('btn-light')
    orderStatus[0].classList.add('btn-success')

    chefReceivedOrder()
    .then(pizzaSauceAdded)
    .then(firstLayerOfCheeseAdded)
    .then(toppingsAdded)
    .then(secondLayerOfCheeseAdded)
    .then(pizzaBaked)
    .then(oreganoAdded)
    .then(packageReceived)
    .then(() => {
        orderStatus[9].classList.remove('btn-light')
        orderStatus[9].classList.add('btn-success')
    } )
    .catch((err) => console.log(err))
}




const chefReceivedOrder =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            orderStatus[1].classList.remove('btn-light')
            orderStatus[1].classList.add('btn-success')
            resolve()
        }, 2000)
    })
}

const pizzaSauceAdded =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            orderStatus[2].classList.remove('btn-light')
            orderStatus[2].classList.add('btn-success')
            resolve()
        }, 10000)
    })
}

const firstLayerOfCheeseAdded =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            orderStatus[3].classList.remove('btn-light')
            orderStatus[3].classList.add('btn-success')
            resolve()
        }, 5000)
    })
}

const toppingsAdded =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            orderStatus[4].classList.remove('btn-light')
            orderStatus[4].classList.add('btn-success')
            resolve()
        }, 12000)
    })
}

const secondLayerOfCheeseAdded =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            orderStatus[5].classList.remove('btn-light')
            orderStatus[5].classList.add('btn-success')
            resolve()
        }, 5000)
    })
}

const pizzaBaked =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            orderStatus[6].classList.remove('btn-light')
            orderStatus[6].classList.add('btn-success')
            resolve()
        }, 15000)
    })
}

const oreganoAdded =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            orderStatus[7].classList.remove('btn-light')
            orderStatus[7].classList.add('btn-success')
            resolve()
        }, 8000)
    })
}

const packageReceived =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            orderStatus[8].classList.remove('btn-light')
            orderStatus[8].classList.add('btn-success')
            resolve()
        }, 2000)
    })
}
