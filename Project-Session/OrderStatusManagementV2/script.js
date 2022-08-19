const executeOrder = () => {
    let orderId = document.getElementById('order-id-input').value
    document.getElementById('order-id-input').value = ''
    
    let orderCardsWrapper = document.getElementById('order-cards-wrapper')

    let colDiv = document.createElement('div')
    let cardDiv = document.createElement('div')
    let cardHeader = document.createElement('div')
    let cardBody = document.createElement('div')
    let cardText1 = document.createElement('p')
    let cardText2 = document.createElement('p')
    let cardText3 = document.createElement('p')
    let statusBadge = document.createElement('span')
    let cardFooter = document.createElement('div')

    colDiv.classList = 'col-md-3 order-status-card'
    cardDiv.classList = 'card text-center'
    cardHeader.classList = 'card-header'
    cardBody.classList = 'card-body'
    cardText1.classList = 'card-text'
    cardText2.classList = 'card-text'
    cardText3.classList = 'card-text'
    statusBadge.classList = 'badge bg-success rounded-pill'
    cardFooter.classList = 'card-footer'

    cardHeader.innerHTML = `Order ID: <b>${orderId}</b>`
    cardText1.innerText = 'Medium size pizza - 2 Nos'
    cardText2.innerHTML = `Bill Amount: <b>$25</b>`
    statusBadge.innerText = 'First layer of cheeze added'
    cardFooter.innerText = '18-08-2022 PM'

    
    orderCardsWrapper.appendChild(colDiv)
    colDiv.appendChild(cardDiv)
    cardDiv.append(cardHeader, cardBody)
    cardBody.append(cardText1, cardText2, cardText3)
    cardText3.appendChild(statusBadge)
    cardDiv.appendChild(cardFooter)
}

