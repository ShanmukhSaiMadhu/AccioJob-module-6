const homeConatiner = document.getElementById('home-container')
const trackingContainer = document.getElementById('tracking-container')


const displayHome = () => {
    homeConatiner.classList = 'active'
    trackingContainer.classList.remove = 'active'

    homeConatiner.style.display = 'block'
    trackingContainer.style.display = 'none'
}

const displayTracking = () => {
    trackingContainer.classList = 'active'
    homeConatiner.classList.remove = 'active'

    trackingContainer.style.display = 'block'
    homeConatiner.style.display = 'none'
}

const executeOrder = async () => {

    let orderId = document.getElementById('order-id-input').value

    if(document.getElementById('order-id-input').value == '') {
        document.getElementById('alert').style.display = 'block'
    }else {
        document.getElementById('alert').style.display = 'none'
        document.getElementById('order-id-input').value = ''

        createOrderCard(orderId)

        document.getElementById(orderId).innerText = 'Order Placed'

        try {
            await chefReceivedOrder(orderId)
            await pizzaSauceAdded(orderId)
            await firstLayerOfCheeseAdded(orderId)
            await toppingsAdded(orderId)
            await secondLayerOfCheeseAdded(orderId)
            await pizzaBaked(orderId)
            await oreganoAdded(orderId)
            await packageReceived(orderId)
            document.getElementById(orderId).innerText = 'Order Picked Up'
        }catch(err) {
            document.getElementById(orderId).innerText = err
            console.log(err)
        }
    }
    // chefReceivedOrder(orderId)
    // .then(pizzaSauceAdded)
    // .then(firstLayerOfCheeseAdded)
    // .then(toppingsAdded)
    // .then(secondLayerOfCheeseAdded)
    // .then(pizzaBaked)
    // .then(oreganoAdded)
    // .then(packageReceived)
    // .then(() => {
    //     document.getElementById(orderId).innerText = 'The order is ready and handed over to the Zomato delivery guy!'
    // } )
    // .catch((err) => console.log(err))
}

