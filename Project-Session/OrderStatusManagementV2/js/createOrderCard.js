const createOrderCard = (orderId) => {
	let orderCardsWrapper = document.getElementById('order-cards-wrapper')

	let colDiv = document.createElement('div')
	let cardDiv = document.createElement('div')
	let cardHeader = document.createElement('div')
	let cancelBtn = document.createElement('i')
	let cardBody = document.createElement('div')
	let cardText2 = document.createElement('p')
	let statusBadge = document.createElement('span')
	let cardFooter = document.createElement('div')

	colDiv.classList = 'col-md-3 order-status-card'
	cardDiv.classList = 'card text-center'
	cardHeader.classList = 'card-header'
	cancelBtn.classList = 'fa-solid fa-xmark cancel-btn'
	cardBody.classList = 'card-body'
	cardText2.classList = 'card-text'
	statusBadge.classList = 'badge rounded-pill bg-success'
	cardFooter.classList = 'card-footer'

	cardHeader.innerHTML = `<span>Order ID: <b>${orderId}</b></span>`
	statusBadge.innerText ='First layer of cheeze added'
	cardFooter.innerText = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
  });

	statusBadge.id = orderId

	let billTable = createOrderCardBillTable()

	cardHeader.appendChild(cancelBtn)
	cardDiv.appendChild(cardHeader)
	cardBody.appendChild(billTable)
	cardText2.appendChild(statusBadge)
	cardBody.appendChild(cardText2)
	cardDiv.appendChild(cardBody)
	cardDiv.appendChild(cardFooter)
	colDiv.appendChild(cardDiv)
	orderCardsWrapper.appendChild(colDiv)

	cancelBtn.addEventListener('click', () => {
		// orderCardsWrapper.removeChild(colDiv)
		colDiv.style.display = 'none'
	})
}