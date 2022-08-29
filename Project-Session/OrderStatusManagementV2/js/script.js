const homeContainer = document.getElementById('home-container')
const trackingContainer = document.getElementById('tracking-container')

trackingContainer.style.display = 'none'
let billDetails = []

const displayHome = () => {
    homeContainer.classList.add = 'active'
    trackingContainer.classList.remove = 'active'

    homeContainer.style.display = 'block'
    trackingContainer.style.display = 'none'
}

const displayTracking = () => {
    trackingContainer.classList.add = 'active'
    homeContainer.classList.remove = 'active'

    trackingContainer.style.display = 'block'
    homeContainer.style.display = 'none'
}

let home = document.getElementById('home-items')

let generateItems = () => {
    return (home.innerHTML = homeItemsData.map((x) => {
        let {id, name, price, desc, img} = x

        return `
            <div class="col" id="product-id-${id}">
              <div class="card h-auto">
                <img src="${img}" class="card-img-top" alt="">
                <div class="card-body">
                  <h5 class="card-title fw-bold">${name}</h5>
                  <p class="card-text">${desc}</p>
                  <h2 class="float-start">$ ${price}</h2>
                  <a href="#javascript:void(0);" class="btn btn-outline-danger float-end" id="${id}" onclick="addToCart(${id})">Add to cart</a>
                </div>
              </div>
            </div>
        `
    }).join(''))
}

generateItems()


let addToCart = (id) => {

    let selectedItem = id

    let search = homeItemsData.find((x) => x.id == selectedItem)
    document.getElementById(id).innerText = 'Added!'
    document.getElementById(id).classList.replace('btn-outline-danger', 'btn-outline-success')
    document.getElementById(id).onmouseover = 'green'

    // console.log(homeItemsData[selectedItem].id)

    billDetails.push(
        {
            item: search.name,
            price: Number(search.price)
        }
    )
}

/* ----------Create Cards ------------ */

let currentOrderNumber = 1

const executeOrder = async () => {

        if(billDetails.length == 0) return

        document.getElementById('empty-order').style.display = 'none'
        

        generateItems()

        trackingContainer.style.display = 'block'
        homeContainer.style.display = 'none'

        let orderId = createOrderId()

        createOrderCard(orderId, billDetails)

        billDetails = []

        currentOrderNumber++

        document.getElementById(orderId).innerText = 'Order Placed'

        try {
            await chefReceivedOrder(orderId)
            await preparingFood(orderId)
            await preparationDone(orderId)
            await packing(orderId)
            await receivedAtCounter(orderId)
            await orderPickUp(orderId)
            await onYourWay(orderId)
            await packageReceived(orderId)

            document.getElementById(orderId).innerText = 'Delivered'

        }catch(err) {
            document.getElementById(orderId).innerText = err
        }
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


