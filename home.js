export { headerContent, homeContent, footerContent };

const content = document.getElementById('content');

function headerContent() {

  const header = content.appendChild(document.createElement('header'));

  const title = header.appendChild(document.createElement('h1'));
  title.textContent = "Frog Cafè";

  const nav = header.appendChild(document.createElement('nav'));

  const ul = nav.appendChild(document.createElement('ul'));

  const li1 = ul.appendChild(document.createElement('li'));
  const a1 = li1.appendChild(document.createElement('a'));
  a1.classList.add("navigation-buttons")
  a1.textContent = "Home"

  const li2 = ul.appendChild(document.createElement('li'));
  const a2 = li2.appendChild(document.createElement('a'));
  a2.classList.add("navigation-buttons")
  a2.textContent = "Menu"

  const li3 = ul.appendChild(document.createElement('li'));
  const a3 = li3.appendChild(document.createElement('a'));
  a3.classList.add("navigation-buttons")
  a3.textContent = "Contact"

}



function homeContent() {
  
  const main = content.appendChild(document.createElement('main'));

  const div = main.appendChild(document.createElement('div'));
  div.classList.add("home");

  const p1 = div.appendChild(document.createElement('p'));
  p1.textContent = "Best coffee in the country";

  const p2 = div.appendChild(document.createElement('p'));
  p2.textContent = "Made with passion since 1999";

  const homeImg = div.appendChild(document.createElement('img'));
  homeImg.setAttribute("id", "coffee");
  homeImg.setAttribute("src", "coffee.jpg")

  const p3 = div.appendChild(document.createElement('p'));
  p3.textContent = "Come Visit Us";
}

function footerContent() {
  const footer = content.appendChild(document.createElement('footer'));

  const author = footer.appendChild(document.createElement('p'));
  author.setAttribute("id", "author")
  author.textContent = "Made By Davide Cruciani"
}
