export { contactContent };

function contactContent() {
  const main = document.querySelector("main")

  const contactDiv = main.appendChild(document.createElement('div'));
  contactDiv.classList.add("contact");

  const number = contactDiv.appendChild(document.createElement('p'));
  number.setAttribute("id", "number");
  number.textContent = "☎️ 123 456 789";

  const adress = contactDiv.appendChild(document.createElement('p'));
  adress.setAttribute("id", "adress");
  adress.textContent = "🏢 999 NW N Lake Dr, Miami, FL 37148, USA";

  const locationImg = contactDiv.appendChild(document.createElement('img'));
  locationImg.setAttribute("src", "miami.PNG");
  locationImg.setAttribute("id", "location");
}