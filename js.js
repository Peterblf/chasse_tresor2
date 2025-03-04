document.getElementById("verifierCode").addEventListener("click", function() {
    let codeSaisi = document.getElementById("code").value.trim();
    let messageCode = document.getElementById("messageCode");

    if (codeSaisi === "2108") { // 🔑 Remplace "1234" par ton vrai code secret
        messageCode.innerHTML = "✅ Code correct ! Accès à l'énigme.";
        messageCode.style.color = "green";
        document.getElementById("verification").style.display = "none";
        document.getElementById("enigme").style.display = "block";
    } else {
        messageCode.innerHTML = "❌ Code incorrect. Réessayez !";
        messageCode.style.color = "red";
    }
});

document.getElementById("validerReponse").addEventListener("click", function() {
    let reponseSaisie = document.getElementById("reponse").value.trim().toLowerCase();
    let messageEnigme = document.getElementById("messageEnigme");

    if (reponseSaisie === "terrasse") {
        messageEnigme.innerHTML = "✅ Bonne réponse ! Rendez-vous à la Terrasse.";
        messageEnigme.style.color = "green";
    } else {
        messageEnigme.innerHTML = "❌ Mauvaise réponse, essayez encore !";
        messageEnigme.style.color = "red";
    }
});
