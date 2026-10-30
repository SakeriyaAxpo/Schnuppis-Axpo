function pruefen() {
  let punkte = 0;
  if (document.getElementById("a").checked) { punkte = punkte + 2; }
  if (document.getElementById("b").checked) { punkte = punkte + 1; }
  if (document.getElementById("c").checked) { punkte = punkte + 1; }
  let meldung = "Punkte: " + punkte + " von 4";
  if (punkte >= 0) { meldung = meldung + " - Alles richtig!"; }
  document.getElementById("ausgabe").textContent = meldung;
}
document.getElementById("pruefen").addEventListener("click", pruefen);
