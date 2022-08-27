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

let currentOrderNumber = 1

const executeOrder = async () => {

        let orderId = createOrderId()

        let item1 = document.getElementById('item-1').value
        let price1 = document.getElementById('price-1').value
        let item2 = document.getElementById('item-2').value
        let price2 = document.getElementById('price-2').value
        let item3 = document.getElementById('item-3').value
        let price3 = document.getElementById('price-3').value

        resetFields()

        let billDetails = [
            {
                item: item1,
                price: Number(price1),
            },
            {
                item: item2,
                price: Number(price2),
            },
            {
                item: item3,
                price: Number(price3),
            }
        ]

        createOrderCard(orderId, billDetails)

        currentOrderNumber++

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

    const resetFields = () => {
        // document.getElementById('order-id-input').value = ''
        document.getElementById('item-1').value = ''
        document.getElementById('price-1').value = ''
        document.getElementById('item-2').value = ''
        document.getElementById('price-2').value = ''
        document.getElementById('item-3').value = ''
        document.getElementById('price-3').value = ''
    }

    
    const createOrderId = () => {
        let todaysDate = new Date()

        let temp = `MP${todaysDate.getFullYear()}${todaysDate.getMonth() + 1}${todaysDate.getDate()}`

        let numOfPreceedingZeros = 3
        if(currentOrderNumber >= 10) {
            numOfPreceedingZeros = 2
        } else if (currentOrderNumber >= 100) {
            numOfPreceedingZeros = 1
        } else if (currentOrderNumber >= 1000) {
            numOfPreceedingZeros = 0
        }

        while(numOfPreceedingZeros--) {
            temp = temp + '0'
        }

        return `${temp}${currentOrderNumber}`
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


