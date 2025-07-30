

document.getElementById("contactForm").onsubmit = function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const education = document.getElementById("education").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("feedback");

  if (!name || !email || !age || !education || !message) {
    feedback.textContent = "Please fill in all fields.";
  } else {
    feedback.style.color = "green";
    feedback.textContent = "Thank you! Your message was sent.";
    document.getElementById("contactForm").reset();
  }
};
