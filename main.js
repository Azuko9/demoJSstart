const leM = document.querySelector("#Mtitre"); // lettre M du titre
const leN = document.querySelector("#Ntitre"); // lettre N du titre

// pasage mode jour et mode nuit.
leM.addEventListener("click", function () {
  const bodynight = document.querySelector("body");
  if (bodynight.classList.contains("bodyNight")) {
    bodynight.classList.remove("bodyNight");
  } else {
    bodynight.classList.add("bodyNight");
  }
});

// changment des visuels des personnages
leN.addEventListener("click", function () {
  const mHD = document.querySelector("#mario");
  const bHD = document.querySelector("#bowser");

  if (mHD.classList.contains("marioHD")) {
    mHD.classList.remove("marioHD");
    mHD.classList.add("marioPX");
    bHD.classList.remove("bowserHD");
  } else {
    mHD.classList.add("marioHD");
    mHD.classList.remove("marioPX");
    bHD.classList.add("bowserHD");
  }
});

const caseSelect = document.querySelectorAll(".cell"); // sélection des cases de jeu.
const tourJoueur = document.querySelectorAll(".playerActive"); // tour du joueur.
let clickSouris = 0; // le nombre de click souris éffectué.
const scoreStarsM = document.querySelectorAll(".starM"); // les étoiles du score de Mario
const scoreStarsB = document.querySelectorAll(".starB"); // les étoiles du score de Bowser
const leRobotB = document.querySelector("#robotB"); // robot de Mario
const leRobotM = document.querySelector("#robotM"); // robot de Bowser
const robotM = document.querySelector("#boutonRobM"); // bouton du robot Mario
const robotB = document.querySelector("#boutonRobB"); // bouton du robot Bowser

const lewinner = document.querySelector("#scoreWinner"); // affichage du gagnant

// activation et désactivation du Bouton du robot Mario
robotM.addEventListener("click", function () {
  if (robotM.classList.contains("boutonRobON")) {
    robotM.classList.remove("boutonRobON");
  } else {
    robotM.classList.add("boutonRobON");
  }
});

// activation et désactivation du Bouton du robot Bowser
robotB.addEventListener("click", function () {
  if (robotB.classList.contains("boutonRobON")) {
    robotB.classList.remove("boutonRobON");
  } else {
    robotB.classList.add("boutonRobON");
  }
});

// début de partie, mise à zéro des étoiles et affichage du gagant désactivé
lewinner.classList.add("nodisplay");
let nbrStarsM = 0;
let nbrStarsB = 0;

//reprendre une partie après affichage du gagnant
lewinner.addEventListener("click", function () {
  lewinner.classList.add("nodisplay");
  clickSouris = 0;
  tourJoueur[0].classList.add("playerBoomboom", "playerColor");
  for (let i = 0; i < caseSelect.length; i++) {
    caseSelect[i].classList.remove("caseMario", "caseBowser");
    caseSelect[i].values = undefined;
    console.log(clickSouris);
    console.log("départ de i = " + i);
  }
});

//comportement du jeu.
for (let i = 0; i < caseSelect.length; i++) {
  let j = Math.floor(Math.random() * 8);

  caseSelect[i].addEventListener("mouseenter", function (e) {
    console.log("valeur de i dévoilée = " + i);
  });

  caseSelect[i].addEventListener("click", function () {
    console.log("valeur au click de i = " + i);
    if (caseSelect[i].values == undefined) {
      clickSouris++;
      console.log("click de J1, clickSouris = " + clickSouris);
      console.log(caseSelect[i].values);

      // action du jeu actif pour Mario
      if (
        clickSouris == 1 ||
        clickSouris == 3 ||
        clickSouris == 5 ||
        clickSouris == 7 ||
        clickSouris == 9
      ) {
        caseSelect[i].classList.add("caseMario"); // ajout du jeton de mario sur la casde cliquée
        caseSelect[i].values = "M"; //case joué par mario définit
        tourJoueur[0].classList.remove("playerBoomboom", "playerColor");
        tourJoueur[1].classList.add("playerBoomboom", "playerColor");
        console.log("la valeur de i  pour J1 est : " + i);

        if (robotB.classList.contains("boutonRobON")) {
          leRobotB.classList.add("playerBoomboom");
          tourJoueur[1].classList.remove("playerBoomboom");
          setTimeout(() => {
            j = Math.floor(Math.random() * 8);
            console.log("la valeur de i pour J2 est : " + i);

            if (clickSouris < 9) {
              while (caseSelect[j].values != undefined) {
                j = Math.floor(Math.random() * 8);
                console.log("la valeur de i pour J2 est : " + i);
                console.log(" la valeur est " + caseSelect[i].values);
                console.log("click de J2, clickSouris = " + clickSouris);
              }
            }

            if (caseSelect[j].values == undefined) {
              caseSelect[j].classList.add("caseBowser");
              caseSelect[j].values = "B";
              tourJoueur[1].classList.remove("playerBoomboom", "playerColor");
              tourJoueur[0].classList.add("playerBoomboom", "playerColor");
              leRobotB.classList.remove("playerBoomboom");
              if (clickSouris < 9) {
                clickSouris++;
              }
              console.log("click de J2, clickSouris = " + clickSouris);
              console.log("la valeur  de i  au final pour J2 est : " + i);
            }
          }, 1000);
        }
      }

      //action du jeu actif pour Bowser
      if (
        clickSouris == 2 ||
        clickSouris == 4 ||
        clickSouris == 6 ||
        clickSouris == 8
      ) {
        caseSelect[i].classList.add("caseBowser"); //
        caseSelect[i].values = "B";
        tourJoueur[1].classList.remove("playerBoomboom");
        tourJoueur[0].classList.add("playerBoomboom");

        if (robotM.classList.contains("boutonRobON")) {
          leRobotM.classList.add("playerBoomboom");
          tourJoueur[0].classList.remove("playerBoomboom");
          setTimeout(() => {
            j = Math.floor(Math.random() * 8);
            console.log("la valeur de i pour J1 est : " + i);

            if (clickSouris < 9) {
              while (caseSelect[j].values != undefined) {
                j = Math.floor(Math.random() * 8);
                console.log("la valeur de i pour J1 est : " + i);
                console.log(" la valeur est " + caseSelect[i].values);
                console.log("click de J1, clickSouris = " + clickSouris);
              }
            }

            if (caseSelect[j].values == undefined) {
              caseSelect[j].classList.add("caseMario");
              caseSelect[j].values = "M";
              tourJoueur[0].classList.remove("playerBoomboom", "playerColor");
              tourJoueur[1].classList.add("playerBoomboom", "playerColor");
              leRobotB.classList.remove("playerBoomboom");
              leRobotM.classList.remove("playerBoomboom");
              if (clickSouris < 9) {
                clickSouris++;
              }
              console.log("click de J1, clickSouris = " + clickSouris);
            }
          }, 1000);
        }
      }
    }

    if (clickSouris > 9) {
      for (let i = 0; i < caseSelect.length; i++) {
        caseSelect[i].classList.remove("caseMario", "caseBowser");
        caseSelect[i].values = undefined;
      }
      clickSouris = 0;
      lewinner.classList.add("nodisplay");
    }

    let ligne1 =
      caseSelect[0].values + caseSelect[3].values + caseSelect[6].values;
    let ligne2 =
      caseSelect[1].values + caseSelect[4].values + caseSelect[7].values;
    let ligne3 =
      caseSelect[2].values + caseSelect[5].values + caseSelect[8].values;
    let ligne4 =
      caseSelect[0].values + caseSelect[1].values + caseSelect[2].values;
    let ligne5 =
      caseSelect[3].values + caseSelect[4].values + caseSelect[5].values;
    let ligne6 =
      caseSelect[6].values + caseSelect[7].values + caseSelect[8].values;
    let ligne7 =
      caseSelect[0].values + caseSelect[4].values + caseSelect[8].values;
    let ligne8 =
      caseSelect[2].values + caseSelect[4].values + caseSelect[6].values;

    if (
      ligne1 === "MMM" ||
      ligne2 === "MMM" ||
      ligne3 === "MMM" ||
      ligne4 === "MMM" ||
      ligne5 === "MMM" ||
      ligne6 === "MMM" ||
      ligne7 === "MMM" ||
      ligne8 === "MMM"
    ) {
      console.log("mario win");
      lewinner.classList.remove("nodisplay");
      lewinner.innerHTML = "Mario Win";
      lewinner.classList.add("marioWin");
      lewinner.classList.remove("bowsrWin", "matchNul");
      tourJoueur[0].classList.remove("playerBoomboom", "playerColor");
      tourJoueur[1].classList.remove("playerBoomboom", "playerColor");
      leRobotB.classList.remove("playerBoomboom");
      leRobotM.classList.remove("playerBoomboom");
      clickSouris = 10;
      scoreStarsM[nbrStarsM].style.filter = "brightness(1)";
      nbrStarsM++;
      console.log(" la valeur de i après Mario win = " + i);
    }

    if (
      ligne1 === "BBB" ||
      ligne2 === "BBB" ||
      ligne3 === "BBB" ||
      ligne4 === "BBB" ||
      ligne5 === "BBB" ||
      ligne6 === "BBB" ||
      ligne7 === "BBB" ||
      ligne8 === "BBB"
    ) {
      console.log("Bowser win");
      lewinner.classList.remove("nodisplay");
      lewinner.innerHTML = "Bowser Win";
      lewinner.classList.add("bowserWin");
      lewinner.classList.remove("marioWin", "matchNul");
      tourJoueur[0].classList.remove("playerBoomboom", "playerColor");
      tourJoueur[1].classList.remove("playerBoomboom", "playerColor");
      leRobotB.classList.remove("playerBoomboom");
      leRobotM.classList.remove("playerBoomboom");
      clickSouris = 10;
      scoreStarsB[nbrStarsB].style.filter = "brightness(1)";
      nbrStarsB++;
      console.log(" la valeur de i après Bowser win = " + i);
    }

    if (clickSouris == 9) {
      lewinner.classList.remove("nodisplay");
      lewinner.innerHTML = "Match NUL";
      lewinner.classList.remove("marioWin", "bowsrWin");
      tourJoueur[0].classList.remove("playerBoomboom", "playerColor");
      tourJoueur[1].classList.remove("playerBoomboom", "playerColor");
      leRobotB.classList.remove("playerBoomboom");
      lewinner.classList.add("matchNul");
      leRobotM.classList.remove("playerBoomboom");
      clickSouris++;
      console.log(" la valeur de i aprés match null = " + i);
    }

    if (nbrStarsM == 3) {
      lewinner.innerHTML = "mario est Vainqueur";
      lewinner.classList.remove("bowsrWin", "matchNul");
      lewinner.classList.add("playerBoomboom");
      tourJoueur[0].classList.remove("playerBoomboom", "playerColor");
      tourJoueur[1].classList.remove("playerBoomboom", "playerColor");

      leRobotB.classList.remove("playerBoomboom");
      lewinner.classList.add("marioWin");
      lewinner.addEventListener("click", function () {
        location.reload(true);
      });
    }

    if (nbrStarsB == 3) {
      lewinner.innerHTML = "Bowser est Vainqueur";
      lewinner.classList.remove("marioWin", "matchNul");
      lewinner.classList.add("playerBoomboom");
      tourJoueur[0].classList.remove("playerBoomboom", "playerColor");
      tourJoueur[1].classList.remove("playerBoomboom", "playerColor");
      leRobotB.classList.remove("playerBoomboom");
      lewinner.classList.add("bowserWin");
      lewinner.addEventListener("click", function () {
        location.reload(true);
      });
    }
  });
}
