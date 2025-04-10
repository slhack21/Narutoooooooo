function toggleMenu() {
  document.getElementById("menuSlide").classList.toggle("active");
}

firebase.auth().onAuthStateChanged((user) => {
  const authBtn = document.getElementById("authBtn");
  if (user) {
    authBtn.textContent = "Déconnexion";
    authBtn.onclick = () => {
      firebase.auth().signOut();
      location.reload();
    };
  } else {
    authBtn.textContent = "Connexion";
    authBtn.href = "login.html";
  }
});