// Get the modal - Henter ''Signup-popup'' fra HTML filen
var modal = document.getElementById("signup-popup");

// Get the button that opens the modal - Henter knappen fra HTML filen.
var btn = document.getElementById("signup-box_btn");

// Get the <span> element that closes the modal. Henter ''close'' fra HTML filen.
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal. signup-box_btn, bliver tilføjet et klik event, så popuppen dukker op, når du trykker på knappen og det der sker at der bliver tilføjet display block (vises på skærmen) hvilket er css. Css bliver tilføjet på modal(popup).
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal, clickevent på ''close'' krydset og får display none, som betyder at popup forsvinder fra skræmen igen. 
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it. Window clickevent, som lukker popuppen. If statement - kun hvis popuppen er fremme at dette har en effekt. 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}