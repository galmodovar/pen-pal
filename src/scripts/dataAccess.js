const applicationState = {
    letters: [],
    authors: [],
    recipients: [],
    topics: []

}


const API = "http://localhost:8088"

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (author) => {
                // Store the external state in application state
                applicationState.authors = author
            }
        )
}

export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (recipient) => {
                // Store the external state in application state
                applicationState.recipients = recipient
            }
        )
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (topic) => {
                // Store the external state in application state
                applicationState.topics = topic
            }
        )
}

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (letter) => {
                // Store the external state in application state
                applicationState.letters = letter
            }
        )
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}
export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}
export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}
export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}

//Fetch call for POST
export const sendLetters = (userLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLetter)
    }


    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.dispatchEvent(new CustomEvent("stateChanged"))

        })
}

//Fetch call for DELETE
export const deleteLetter = (id) => {
    return fetch(`${API}/letters/${id}`, { method: "DELETE" })
        .then(
            () => {
                document.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}