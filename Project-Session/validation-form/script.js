
function validate () {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let cityInput = document.getElementById('city').value
    let stateInput = document.getElementById('state').value
    let zipInput = document.getElementById('zip').value
    let addressInput = document.getElementById('address').value
    let tnCInput = document.getElementById('tnC').checked

    if(firstNameInput) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    }else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
    }

    if(addressInput.length > 10) {
        document.getElementById('address-valid').style.display = 'block'
        document.getElementById('address-invalid').style.display = 'none'
    }else {
        document.getElementById('address-invalid').style.display = 'block'
        document.getElementById('address-valid').style.display = 'none'
    }

    if(emailInput && emailInput.includes('@') && emailInput.includes('.') && emailInput.lastIndexOf('.') <= emailInput.length - 3 && emailInput.indexOf('@') != 0) {
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }else {
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
    }

    if(cityInput && cityInput.length >= 3 && !parseInt(cityInput) ) {
        document.getElementById('city-valid').style.display = 'block'
        document.getElementById('city-invalid').style.display = 'none'
    }else {
        document.getElementById('city-invalid').style.display = 'block'
        document.getElementById('city-valid').style.display = 'none'
    }

    if(stateInput != 'choose') {
        document.getElementById('state-valid').style.display = 'block'
        document.getElementById('state-invalid').style.display = 'none'
    }else {
        document.getElementById('state-invalid').style.display = 'block'
        document.getElementById('state-valid').style.display = 'none'
    }

    if(zipInput && parseInt(zipInput) && zipInput.length === 6) {
        document.getElementById('zip-valid').style.display = 'block'
        document.getElementById('zip-invalid').style.display = 'none'
    }else {
        document.getElementById('zip-invalid').style.display = 'block'
        document.getElementById('zip-valid').style.display = 'none'
    }

    if(lastNameInput) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    }else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
    }

    if(tnCInput) {
        document.getElementById('tnC-invalid').style.display = 'none'
    } else {
        document.getElementById('tnC-invalid').style.display = 'block'
    }
}