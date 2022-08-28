const homeContainer = document.getElementById('home-container')
const trackingContainer = document.getElementById('tracking-container')
trackingContainer.style.display = 'none'

const displayHome = () => {
    // homeConatiner.classList = 'active'
    // trackingContainer.classList.remove = 'active'

    trackingContainer.style.display = 'none'
    homeContainer.style.display = 'block'
    
}

const displayTracking = () => {
    // trackingContainer.classList = 'active'
    // homeContainer.classList.remove = 'active'

    trackingContainer.style.display = 'block'
    homeContainer.style.display = 'none'
}

let home = document.getElementById('home-items')

let basket = JSON.parse(localStorage.getItem('data')) || [];
console.log(basket)

let generateItems = () => {
    return (home.innerHTML = homeItemsData.map((x) => {
        let {id, name, price, desc, img} = x
        let search = basket.find((x) => x.id === id) || []

        return `
            <div class="col" id="product-id-${id}">
              <div class="card h-auto">
                <img src="${img}" class="card-img-top" alt="">
                <div class="card-body">
                  <h5 class="card-title fw-bold">${name}</h5>
                  <p class="card-text">${desc}</p>
                  <h2 class="float-start">$ ${price}</h2>
                  <a href="#${id}" class="btn btn-outline-danger float-end" id="${id}" onclick="addToCart(${id})">Add to cart</a>
                </div>
              </div>
            </div>
        `
        
    }).join(''))
}

generateItems()


let addToCart = ((id) => {
    document.getElementById(id).innerText = 'Added!'
    document.getElementById(id).classList.replace('btn-outline-danger', 'btn-outline-success')
    document.getElementById(id).onmouseover = 'green'

    let selectedItem = id

    let search = basket.find((x) => x.id === selectedItem.id)

    if(search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1
        })

        localStorage.setItem('data', JSON.stringify(basket))
    }
})


// let changeBtnText = (id) => {
//     let selectedBtn = id
//     console.log(selectedBtn)
//     let btn_id = document.getElementById(`${selectedBtn}-btn`);
//     console.log(btn_id)
//     let anchorTag = btn_id.getElementsByTagName('a');
//     anchorTag[0].innerText='High Quality'
// }



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


