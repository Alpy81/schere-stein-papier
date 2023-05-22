// Runden anzahl
const roundDisplay = document.querySelector(".round-counter");
const roundsSelctor = document.querySelector(".rounds");
const gespielteRunden = document.querySelector(".gespielte-runden");
const gesamtRunden = document.querySelector(".gesamte-runden");

// Spielstand anzeige
const userSpielstand = document.querySelector(".spielstand-user");
const compSpielstand = document.querySelector(".spielstand-comp");

// Textanzeige wer gewonnen hat
const winOrLoos = document.querySelector(".win-or-loos");

// Buttons für auswahl
const btnArea = document.querySelector(".btn-area");

// Spielstand von User und PC
let spielstandUser = 0;
let spielstandComp = 0;

// Zählt gepielte runden
let gespielteRundenAnzahl = 0;

// Schaut was PC gewählt hat
let compAuswahl = "";

// - Comp Auswahl

const computeAuswahl = () => {
  let randomNum = Number(Math.round(Math.random() * 2 + 1));

  if (randomNum === 1) {
    compAuswahl = "Schere";
  } else if (randomNum === 2) {
    compAuswahl = "Stein";
  } else {
    compAuswahl = "Papier";
  }

  console.log("Computerauswahl ist:", compAuswahl);
};

// - Main Funktion
const playGame = (meineAuswahl) => {
  console.log("Userauswahl ist:", meineAuswahl);
  computeAuswahl();

  const roundAnzahl = Number(
    document.querySelector('input[name="rounds"]:checked').value
  );

  console.log(roundAnzahl);

  // Runden werden in das HTML angezeigt
  gesamtRunden.innerHTML = roundAnzahl;
  roundsSelctor.classList.add("display-none");
  roundDisplay.classList.add("display-block");

  // Jede Runde wird hochgezählt und in das HTML geschrieben
  gespielteRundenAnzahl++;
  gespielteRunden.innerHTML = gespielteRundenAnzahl;

  // hier wird geschaut wer gewonnen oder verloren hat und demnach Punkte vergeben
  if (
    (meineAuswahl == "Schere" && compAuswahl == "Papier") ||
    (meineAuswahl == "Stein" && compAuswahl == "Schere") ||
    (meineAuswahl == "Papier" && compAuswahl == "Stein")
  ) {
    spielstandUser++;
    winOrLoos.innerHTML = "User hat gewonnen";
  } else if (meineAuswahl == compAuswahl) {
    spielstandUser++;
    spielstandComp++;
    winOrLoos.innerHTML = "Unenschieden";
  } else {
    spielstandComp++;
    winOrLoos.innerHTML = "Comp hat gewonnen";
  }

  // Schreibt den Spielstand ins html
  userSpielstand.innerHTML = spielstandUser;
  compSpielstand.innerHTML = spielstandComp;

  // Wann ist das Spiel zuende?
  if (gespielteRundenAnzahl === roundAnzahl) {
    if (spielstandComp === spielstandUser) {
      winOrLoos.innerHTML = `Beide haben gleich viele Punkte! <br /> User: ${spielstandUser} - Comp: ${spielstandComp}`;
    } else if (spielstandUser > spielstandComp) {
      winOrLoos.innerHTML = `Du hast gewonnen :-)!!! <br /> User: ${spielstandUser} - Comp: ${spielstandComp}`;
    } else {
      winOrLoos.innerHTML = `Du hast Verloren :-(!!! <br /> User: ${spielstandUser} - Comp: ${spielstandComp}`;
    }
    gameIsOver();
  }
};

// Game Over Funktion
const gameIsOver = () => {
  gespielteRundenAnzahl = 0;
  btnArea.classList.add("display-none");
};

// Reset Funktion
const reset = () => {
  // reset von Spielstand
  spielstandUser = 0;
  spielstandComp = 0;

  gespielteRundenAnzahl = 0;

  winOrLoos.innerHTML = "Let´s Play";

  // reset in html
  userSpielstand.innerHTML = 0;
  compSpielstand.innerHTML = 0;

  // klassen werden wieder gelöscht
  roundsSelctor.classList.remove("display-none");
  roundDisplay.classList.remove("display-block");
  btnArea.classList.remove("display-none");
};