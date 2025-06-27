//append():-
const menuItem = document.getElementById("menuItems");
menuItem.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Clicked on:", event.target.textContent);
  }
})
const newItem = document.createElement('li');
newItem.textContent = "Login To start";
menuItem.append(newItem);


//appendChile():-
const menuItem = document.getElementById("menuItems");
menuItem.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Clicked on:", event.target.textContent);
  }
})
const newItem = document.createElement('li');
newItem.textContent = "Login To start";
menuItem.appendChild(newItem);
