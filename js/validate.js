function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Perform form validation here (e.g., check if required fields are filled)
  var name = document.getElementById("contactName").value;
  var email = document.getElementById("contactEmail").value;
  var message = document.getElementById("contactMessage").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all required fields.");
    return false; // Prevent form submission
  }

  // Form is valid, so display a success message
  var successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";
  successMessage.innerHTML = "Thank you for  submitting the form!";

  // You can also reset the form if needed
  document.getElementById("contactForm").reset();
}













