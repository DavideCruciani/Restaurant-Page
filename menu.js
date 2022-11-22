
export { removeChild, menuContent }

function removeChild() {
  const main = document.querySelector("main")

  main.firstChild.remove();
}

function menuContent() {

  const main = document.querySelector("main")

  const menuDiv = main.appendChild(document.createElement('div'));
  menuDiv.classList.add("menu");



  const MenuOption1 = menuDiv.appendChild(document.createElement('div'));
  MenuOption1.classList.add("menu-option")

  const Coffee1 = MenuOption1.appendChild(document.createElement('p'));
  Coffee1.classList.add("coffe-name")
  Coffee1.textContent = "Cold Brew"

  const img1 = MenuOption1.appendChild(document.createElement('img'));
  img1.setAttribute("id", "coffeImg");
  img1.setAttribute("src", "cold-coffee.jpg");

  const Price1 = MenuOption1.appendChild(document.createElement('p'));
  Price1.classList.add("price")
  Price1.textContent = "5$"



  const MenuOption2 = menuDiv.appendChild(document.createElement('div'));
  MenuOption2.classList.add("menu-option")

  const Coffee2 = MenuOption2.appendChild(document.createElement('p'));
  Coffee2.classList.add("coffe-name")
  Coffee2.textContent = "Americano"

  const img2 = MenuOption2.appendChild(document.createElement('img'));
  img2.setAttribute("id", "coffeImg");
  img2.setAttribute("src", "americano.jpg");

  const Price2 = MenuOption2.appendChild(document.createElement('p'));
  Price2.classList.add("price")
  Price2.textContent = "3$"



  const MenuOption3 = menuDiv.appendChild(document.createElement('div'));
  MenuOption3.classList.add("menu-option")

  const Coffee3 = MenuOption3.appendChild(document.createElement('p'));
  Coffee3.classList.add("coffe-name")
  Coffee3.textContent = "Macchiato"

  const img3 = MenuOption3.appendChild(document.createElement('img'));
  img3.setAttribute("id", "coffeImg");
  img3.setAttribute("src", "macchiato.jpg");

  const Price3 = MenuOption3.appendChild(document.createElement('p'));
  Price3.classList.add("price")
  Price3.textContent = "3$"



  const MenuOption4 = menuDiv.appendChild(document.createElement('div'));
  MenuOption4.classList.add("menu-option")

  const Coffee4 = MenuOption4.appendChild(document.createElement('p'));
  Coffee4.classList.add("coffe-name")
  Coffee4.textContent = "Flat White"

  const img4 = MenuOption4.appendChild(document.createElement('img'));
  img4.setAttribute("id", "coffeImg");
  img4.setAttribute("src", "flat-white.jpg");

  const Price4 = MenuOption4.appendChild(document.createElement('p'));
  Price4.classList.add("price")
  Price4.textContent = "3$"
}
