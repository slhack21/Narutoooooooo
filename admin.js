document.addEventListener("DOMContentLoaded", () => {
  const allowedAdmins = [
    "Slayooxytb@gmail.com",
    "ilhanlyoussfi@icloud.com"
  ];

  firebase.auth().onAuthStateChanged((user) => {
    if (!user || !allowedAdmins.includes(user.email)) {
      alert("Accès réservé aux administrateurs.");
      window.location.href = "index.html";
    }
  });

  const form = document.getElementById("adminForm");
  const status = document.getElementById("statusMessage");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const titre = document.getElementById("titre").value;
      const description = document.getElementById("description").value;
      const imageUrl = document.getElementById("imageUrl").value;

      try {
        const db = firebase.getFirestore(firebase.app);
        const col = firebase.collection(db, "ventes");
        await firebase.addDoc(col, {
          titre,
          description,
          imageUrl,
          date: new Date()
        });
        status.innerText = "Vente ajoutée avec succès !";
        form.reset();
      } catch (err) {
        status.innerText = "Erreur : " + err.message;
      }
    });
  }
});