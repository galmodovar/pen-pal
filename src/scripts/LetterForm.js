import { sendLetters, getAuthors, getRecipients, getTopics } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submit") {
        // Get what the user typed into the form fields
        const userAuthor = document.querySelector('#authors').value
        const userRecipient = document.querySelector('#recipients').value
        const userLetter = document.querySelector(".letter").value
        const userTopic = document.querySelector("input[name='topics']:checked").value
        
        // Make an object out of the user input
        const dataToSendToAPI = {
            author: parseInt(userAuthor),
            recipients: parseInt(userRecipient),
            letter: userLetter,
            date: Date.now(),
            topics: parseInt(userTopic),
        }

        // Send the data to the API for permanent storage
        sendLetters(dataToSendToAPI)
    }
})



export const LetterForm = () => {
    let authors = getAuthors()
    let recipients = getRecipients()
    let topics = getTopics()
    let html = `
            <div class="field">
            <select class="authors" id="authors">
            <option value="">Choose author</option>
            ${
                authors.map(
                    author => {
                        return `<option value="${author.id}" name="author">${author.name}</option>`
                    }
                ).join("")
            }
            </select>
            </div>

            <div class="field">
            <label class="label" for="userLetter">Letter</label>
            <textarea class="letter" placeholder="Write your letter..."></textarea>
            </div>
            
            <div class="field">
            <label class="label" for="userTopic">Topics</label>
            <ul class="topics"
            ${
                topics.map(
                    topic => {
                        return `</li>
                        <input type="radio" name="topics" value="${topic.id}" /> ${topic.name}
                        </li>` 
                    }
                ).join("")
            }
            </ul>
            </div>

            <div class="field">
            <select class="recipients" id="recipients">
            <option value="">Choose recipient</option>
            ${
                recipients.map(
                    recipient => {
                        return `<option value="${recipient.id}" name="recipient">${recipient.name}</option>`
                    }
                ).join("")
            }
            </select>
            </div>
    
            <button class="button" id="submit">Send Letter</button>
        `

    return html
}