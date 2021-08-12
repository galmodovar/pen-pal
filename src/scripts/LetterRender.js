import { Letter } from "./Letter.js"
import { LetterForm } from "./LetterForm.js"


export const Letters = () => {
    return `
    <h1>Pen Pal Society</h1>
    <section class="letterForm">
        ${ LetterForm() }
    </section>

    <section class="letterRender">
        <h2>Letter</h2>
        ${ Letter() }
    </section>
    ` 
}