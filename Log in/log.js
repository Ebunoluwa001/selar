document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const password = document.getElementById("password").value;

  const errorMsg = document.getElementById("errorMsg");

  // Dummy login: change these to whatever you want
  const validUser = "";
  const validPass = "1234";

  if (password === validPass) {
    errorMsg.style.color = "green";
    errorMsg.textContent = "Login successful! Redirecting...";

    // Redirect after 1 second (change to your page)
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 1000);
  } else {
    errorMsg.style.color = "red";
    errorMsg.textContent = "Invalid username or password!";
  }
});
