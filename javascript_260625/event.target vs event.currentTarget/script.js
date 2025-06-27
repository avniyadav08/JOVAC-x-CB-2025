const menu = document.getElementById("menu");
menu.addEventListener("click", (event) => {
  console.log("You clicked:", event.target.textContent);
  console.log("Listener is on:", event.currentTarget.tagName);
});
