import {reviews} from '../data/reviews.js'

// inject current year in footer
const currentYear = new Date()
document.querySelector('#year').textContent = currentYear.getFullYear()

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open')
    document.getElementById('hamburgerBtn').classList.toggle('open')
}

const x = document.getElementById('hamburgerBtn')

x.onclick = toggleMenu

const myTarget = document.querySelector('#feedback')

//loop stuff
for (let x = 0; x < reviews.length; x++) {
    const mySection = document.createElement('section')
    const nameTitle = document.createElement('h3') //name part
    nameTitle.textContent = reviews[x].name
 
    const myRating = document.createElement('div') // star part

    for (let step = 0; step<reviews[x].stars; step++) {
        const starNumber = document.createElement('img')
        starNumber.src = "./images/star-outline.svg" //fixed for github
        myRating.appendChild(starNumber)
    }


    const reviewText = document.createElement('p')
    reviewText.textContent = reviews[x].review

    mySection.appendChild(nameTitle)
    mySection.appendChild(myRating)
    mySection.appendChild(reviewText)

    myTarget.appendChild(mySection)
}//end loop

