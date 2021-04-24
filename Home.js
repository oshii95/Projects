// Get the model 
var login_model = document.getElementById(login);

// when user click anywhere out the login poup, disappear the popup
window.onclick = function(event) {
    if (event.target == login_model) {
        login_model.style.display = "none";
    }
}