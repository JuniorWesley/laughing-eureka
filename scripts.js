const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputEmail = document.querySelector("#InputEmail1").value;
    const inputPassword = document.querySelector("#InputPassword1").value;

    if(inputEmail == "" || inputPassword == "") {
        alert("Please, fill the empty fields!");
    } else {
        alert("Congrats! You are now subben in our newsletter.");
    }
});

$(document).ready(function() {
    $("#Check1").click(function(){
        alert(`Do you confirm the data that you complet above?`);
    });
});