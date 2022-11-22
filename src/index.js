import { headerContent, homeContent , footerContent } from "../home"
import { removeChild, menuContent } from "../menu"

headerContent()
content.appendChild(document.createElement('main'))
homeContent()
footerContent()

const menuBtn = document.getElementById("menuBtn")
const homeBtn = document.getElementById("homeBtn")

menuBtn.addEventListener('click', removeChild)

menuBtn.addEventListener('click', menuContent)

homeBtn.addEventListener('click', removeChild)

homeBtn.addEventListener('click', homeContent)
