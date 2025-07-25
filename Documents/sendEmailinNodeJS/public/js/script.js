const formEmail = document.getElementById("emailForm");

formEmail.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("The form was submitted");

    const emailInput = document.getElementById("email");
    // const email = emailInput.value;

    console.log("User enter email: ", emailInput.value);

    fetch("/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInput.value }),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Email succesfully sent", data)
    })
    .catch(error => {
        console.error("Email failed to send", error)
    });
});
