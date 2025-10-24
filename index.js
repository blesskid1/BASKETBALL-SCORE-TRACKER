let homeNumEl = document.getElementById("home-num")
let guestNumEl = document.getElementById("guest-num")
let homeNumber = 0
let guestNumber = 0

function add1Home(){
    homeNumber += 1
    homeNumEl.innerText = homeNumber
}
function add2Home(){
    homeNumber += 2
    homeNumEl.innerText = homeNumber
}
function add3Home(){
    homeNumber += 3
    homeNumEl.innerText = homeNumber
}
function eraseHome(){
    homeNumber = 0
    homeNumEl.innerText = homeNumber
}

//guest side
function add1Guest(){
    guestNumber += 1
    guestNumEl.innerText = guestNumber
}
function add2Guest(){
    guestNumber += 2
    guestNumEl.innerText = guestNumber
}
function add3Guest(){
    guestNumber += 3
    guestNumEl.innerText = guestNumber
}

function eraseGuest(){
    guestNumber = 0
    guestNumEl.innerText = guestNumber
}