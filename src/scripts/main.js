import { Letters } from "./LetterRender.js"
import { fetchAuthors, fetchLetters, fetchRecipients, fetchTopics } from "./dataAccess.js"



const mainContainer = document.querySelector("#container")

const render = () => {
    fetchAuthors()
    .then(fetchRecipients)
    .then(fetchTopics)
    .then(fetchLetters)
    .then(
        () => {
    mainContainer.innerHTML =  Letters()
}
    )
}

render()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})