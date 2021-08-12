import { getAuthors, getLetters, getRecipients, getTopics, deleteLetter } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("letter--")) {
        const [,letterId] = click.target.id.split("--")
        deleteLetter(parseInt(letterId))
    }
})


export const Letter = () => {
    let letters = getLetters()
    let authors = getAuthors()
    let recipients = getRecipients()
    let topics = getTopics()
    //let recipients = getRecipients()
   
    let html =  `
        ${
            letters.map(letter => {
                const author = authors.find(author => letter.author === author.id)
                const recipient = recipients.find(recipient => letter.recipients === recipient.id)
                const topic = topics.find(topic => letter.topics === topic.id)
        //if (item.recipientId === recipients.id) {}
                return `<div class="sentLetter">
                            <h3>Dear ${recipient.name},</h3>
                        <div class="letter__body">
                        ${letter.letter}.
                        </div>
                        <h3>Sincerely,${author.name}</h3>
                
                        Sent On: ${new Date(letter.date).toLocaleDateString('en-US')}
                        <span>${topic.name}</span>

                                <button class="letter__delete"
                                id="letter--${letter.id}">
                                Delete
                                </button>
                        </div>
                    `

        
        
    }).join("")
}`
        
        return html
    }