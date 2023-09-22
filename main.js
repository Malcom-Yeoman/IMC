function calculerIMC() {
    let poids = parseFloat(document.getElementById("poids").value);
    let taille_cm = parseFloat(document.getElementById("taille").value);

    if (isNaN(poids) || isNaN(taille_cm) || taille_cm <= 0) {
        alert("Veuillez entrer des valeurs valides.");
        return;
    }

    let taille_m = taille_cm / 100;
    let imc = poids / (taille_m * taille_m);
    let resultat = document.getElementById("resultat");
    let indicateur = document.getElementById("imc-indicateur");

    resultat.innerHTML = `Votre IMC est : ${imc.toFixed(2)}`;

    if (imc < 18.5) {
        indicateur.innerHTML = "Maigreur";
        indicateur.style.backgroundColor = "#f3d650";
    } else if (imc < 25) {
        indicateur.innerHTML = "Normal";
        indicateur.style.backgroundColor = "#4caf50";
    } else if (imc < 30) {
        indicateur.innerHTML = "Surpoids";
        indicateur.style.backgroundColor = "#ff9800";
    } else {
        indicateur.innerHTML = "Obésité";
        indicateur.style.backgroundColor = "#f44336";
    }
}