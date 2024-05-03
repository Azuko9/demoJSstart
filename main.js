const leM = document.querySelector("#Mtitre");
const lewinner = document.querySelector("#scoreWinner");

leM.addEventListener("click", function () {
    const bodynight = document.querySelector("body");
    if (bodynight.classList.contains("bodyNight")) {
        bodynight.classList.remove("bodyNight");
    } else {
        bodynight.classList.add("bodyNight");
    }


});

const leOv = document.querySelector("#leOvert");

leOv.addEventListener("click", function () {
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

})




const caseSelect = document.querySelectorAll(".cell");
let clickSouris = 0;
lewinner.classList.add("nodisplay");


for (let i = 0; i < caseSelect.length; i++) {


    caseSelect[i].addEventListener("click", function () {
        console.log(caseSelect[i].values)
        console.log(clickSouris);

        if (caseSelect[i].values == undefined) {
            clickSouris++;
            if (clickSouris == 1 || clickSouris == 3 || clickSouris == 5 || clickSouris == 7 || clickSouris == 9) {
                caseSelect[i].classList.add("caseMario");
                caseSelect[i].values = "M";

            }

            if (clickSouris == 2 || clickSouris == 4 || clickSouris == 6 || clickSouris == 8) {
                caseSelect[i].classList.add("caseBowser");
                caseSelect[i].values = "B";

            }



            console.log(clickSouris);
        }



        if (clickSouris > 9) {

            for (let i = 0; i < caseSelect.length; i++) {
                caseSelect[i].classList.remove("caseMario", "caseBowser")
                caseSelect[i].values = undefined;


            }
            clickSouris = 0;
            lewinner.classList.add("nodisplay");

        };




        let ligne1 = caseSelect[0].values + caseSelect[3].values + caseSelect[6].values;
        let ligne2 = caseSelect[1].values + caseSelect[4].values + caseSelect[7].values;
        let ligne3 = caseSelect[2].values + caseSelect[5].values + caseSelect[8].values;
        let ligne4 = caseSelect[0].values + caseSelect[1].values + caseSelect[2].values;
        let ligne5 = caseSelect[3].values + caseSelect[4].values + caseSelect[5].values;
        let ligne6 = caseSelect[6].values + caseSelect[7].values + caseSelect[8].values;
        let ligne7 = caseSelect[0].values + caseSelect[4].values + caseSelect[8].values;
        let ligne8 = caseSelect[2].values + caseSelect[4].values + caseSelect[6].values;





        if (ligne1 === "MMM" || ligne2 === "MMM" || ligne3 === "MMM" || ligne4 === "MMM" || ligne5 === "MMM" || ligne6 === "MMM" || ligne7 === "MMM" || ligne8 === "MMM") {
            console.log("mario win");
            lewinner.classList.remove("nodisplay");
            lewinner.innerHTML = "Mario Win";
            clickSouris = 10;


        };


        if (ligne1 === "BBB" || ligne2 === "BBB" || ligne3 === "BBB" || ligne4 === "BBB" || ligne5 === "BBB" || ligne6 === "BBB" || ligne7 === "BBB" || ligne8 === "BBB") {
            console.log("Bowser win");
            lewinner.classList.remove("nodisplay");
            lewinner.innerHTML = "Bowser Win";
            clickSouris = 10;
        };


        if (clickSouris == 9) {
            lewinner.classList.remove("nodisplay");
            lewinner.innerHTML = "Match NUL";
            clickSouris++;

        }





    })




}

