function auswerten() {
  let punkte = 0;
  // A4: Dieses Beispiel prüft bereits Frage 1.
  if (document.getElementById("frage1").value === "richtig") {
    punkte = punkte + 1;
  }
  // A4: Ergänze hier die Prüfungen für Frage 2, 3, 4 und 5.

  const ergebnis = document.getElementById("ergebnis");
  // A4: Passe die maximal erreichbare Punktzahl an.
  ergebnis.textContent = "Punkte: " + punkte + " von 1";

  // A5: Ergänze danach eine persönliche Rückmeldung zur Punktzahl.
}
function neuStarten() {
  // A5: Frage 1 wird bereits zurückgesetzt. Ergänze die anderen vier.
  document.getElementById("frage1").value = "";
  // A5: Setze auch den Ergebnistext zurück.
}
document.getElementById("auswerten").addEventListener("click", auswerten);
document.getElementById("neustart").addEventListener("click", neuStarten);
