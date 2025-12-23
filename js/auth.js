import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.login = function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Enter email and password");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      // SUCCESS
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
};