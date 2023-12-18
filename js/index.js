const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

// para el prompt

function suscribirseNewsletter() {
   
  var email = prompt("Please enter your email address:");

 
  if (email !== null && email !== "") {

    alert("You have successfully subscribed!");
  } else {

    alert("No e-mail has been entered. The subscription has not been completed.");
  }
}


var suscribirseLink = document.getElementById("suscribirse");

suscribirseLink.addEventListener("click", function(event) {

  event.preventDefault();

  suscribirseNewsletter();
});



