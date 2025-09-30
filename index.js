const homeScoreContainer = document.getElementById("home-score")
const guestScoreContainer = document.getElementById("guest-score")
const homeOne = document.getElementById("home-one")
const homeTwo = document.getElementById("home-two")
const homeThree = document.getElementById("home-three")
const guestOne = document.getElementById("guest-one")
const guestTwo = document.getElementById("guest-two")
const guestThree = document.getElementById("guest-three")
let homeScore = 0
let guestScore = 0

homeOne.addEventListener("click", function(){
    homeScore = homeScore + 1
    homeScoreContainer.textContent = homeScore
} )

homeTwo.addEventListener("click", function(){
    homeScore = homeScore + 2
    homeScoreContainer.textContent = homeScore
} )

homeThree.addEventListener("click", function(){
    homeScore = homeScore + 3
    homeScoreContainer.textContent = homeScore
} )

guestOne.addEventListener("click", function(){
    guestScore = guestScore + 1
    guestScoreContainer.textContent = guestScore
} )

guestTwo.addEventListener("click", function(){
    guestScore = guestScore + 2
    guestScoreContainer.textContent = guestScore
} )

guestThree.addEventListener("click", function(){
    guestScore = guestScore + 3
    guestScoreContainer.textContent = guestScore
} )