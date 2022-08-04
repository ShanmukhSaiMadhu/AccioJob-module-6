
function validate () {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let cityInput = document.getElementById('city').value
    let stateInput = document.getElementById('state').value
    let zipInput = document.getElementById('zip').value
    let tnCInput = document.getElementById('tnC').checked

    if(firstNameInput.length >= 1) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    }else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
    }

    if(lastNameInput.length >= 1) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    }else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
    }

    if((/\S+@\S+\.\S+/).test(emailInput)) {
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }else {
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
    }

    if(cityInput.length >= 1) {
        document.getElementById('city-valid').style.display = 'block'
        document.getElementById('city-invalid').style.display = 'none'
    }else {
        document.getElementById('city-invalid').style.display = 'block'
        document.getElementById('city-valid').style.display = 'none'
    }

    if(zipInput.length >= 1) {
        document.getElementById('zip-valid').style.display = 'block'
        document.getElementById('zip-invalid').style.display = 'none'
    }else {
        document.getElementById('zip-invalid').style.display = 'block'
        document.getElementById('zip-valid').style.display = 'none'
    }

    if(tnCInput == false) {
        document.getElementById('tnC-invalid').style.display = 'block'
    } else {
        document.getElementById('tnC-invalid').style.display = 'none'
    }
}