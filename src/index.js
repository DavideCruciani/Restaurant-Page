import { headerContent, homeContent , footerContent } from "../home"
import { removeChild, menuContent } from "../menu"
import { contactContent } from "../contact"

headerContent()
content.appendChild(document.createElement('main'))
homeContent()
footerContent()

const menuBtn = document.getElementById("menuBtn")
const homeBtn = document.getElementById("homeBtn")
const contactBtn = document.getElementById("contactBtn")

menuBtn.addEventListener('click', removeChild)

menuBtn.addEventListener('click', menuContent)

homeBtn.addEventListener('click', removeChild)

homeBtn.addEventListener('click', homeContent)

contactBtn.addEventListener('click', removeChild)

contactBtn.addEventListener('click', contactContent)


