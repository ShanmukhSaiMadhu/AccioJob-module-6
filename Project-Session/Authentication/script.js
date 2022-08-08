const DB_USERS = []

const resetSignupFields = () => {
    document.getElementById('signup-first-name').value = ''
    document.getElementById('signup-last-name').value = ''
    document.getElementById('signup-email').value = ''
    document.getElementById('signup-phone-number').value = ''
    document.getElementById('signup-password').value = ''
}

const resetLoginFields = () => {
    document.getElementById('signup-email').value = ''
    document.getElementById('signup-password').value = ''
}

const signup = () => {
    let firstName = document.getElementById('signup-first-name').value
    let lastName = document.getElementById('signup-last-name').value
    let email = document.getElementById('signup-email').value
    let phone = document.getElementById('signup-phone-number').value
    let password = document.getElementById('signup-password').value

    let userDetails = {
        firstName,
        lastName,
        email,
        phone,
        password
    }

    DB_USERS.push(userDetails)
    console.log(DB_USERS)

    resetSignupFields()
}

const login = () => {
    let enteredEmail = document.getElementById('login-email')
    let enteredPassword = document.getElementById('login-password')

    let currentUser = DB_USERS.find(element => element.email === enteredEmail)

    resetLoginFields()
}

/* 
    2 steps:
    1. Check whether email exist in the DB
    2. match password with saved password for that user

    find() -> return a condition to find if value exits returns the value; else undefined
*/