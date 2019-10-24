// let color = prompt("Préfères tu le blanc ou le noir?")

// if (color == "noir") {
//     console.log("Le noir, c'est super classe");
// } else if (color == "blanc"); {
//     console.log("Le blanc, c'est cool");
// } else {
//     console.log("Réponds");
// }

// let life = prompt("Tu préfères le jour ou la nuit");

// if (life.toLocaleLowerCase() == "jour") {
//     console.log("Tu vis le jour")
// } else if (life.toLocaleLowerCase() == "nuit") {
//     console.log("Tu vis la nuit")
// } else {
//     console.log("bah réponds!")
// }

// for (let chocolat = 0; chocolat < 10; chocolat++) {
//     console.log(`Ma variable est égale à ${chocolat}`);   
// }

//for (let life = 100; life > 0; life--) {
//     console.log(`A ${life}, t'es vivant`);
// }

// console.log(`Avec 0pv, TU ES MORT`)


// let list = ["Alexandre", "Mylène", "Pascal", "Paul", "Tristan", "Capucine", "Baudouin", "Agathe", "Clement", "Thomas"]

// console.log("Voici les élèves de la classe de CM2")

// list.forEach(apprenant => {
//     console.log(apprenant);
// });
    
// let chiant = prompt("Hey, on peut aller à disney?")

// while (chiant.toLocaleLowerCase() != "oui") {
//     chiant = prompt("alleeezzz stp")
// }

// console.log("Génial, tu as dit oui!")

// for (let care = 0; care < 11; care++) {
//     console.log(`Tu as récupéré ${care} P.V. !`)
// }

// console.log("Tu as été totalement soigné!")

// console.log("Quel est ton équipement?")

// let list = ["épée", "bouclier", "armure force+1", "talisman de régen", "bague de protection", "gants magie +1"]

// list.forEach(element => {
//     console.log(element)
// });

// console.log("Tu es bien équipé! Mais... ")

// let buy = prompt("Tu es certain de ne pas vouloir acheter ce superbe anneau de force +2?")

// while (buy != "Oui") {
//     buy = prompt("Allez ... 5000 Po")
// }

// console.log("Parfait!")

// let myLi = document.querySelectorAll("li")[2];
// myLi.innerHTML = "dix";

// let myP = document.querySelectorAll("p")[1];
// myP.innerHTML = "Pas de Lorem par ici"

// let myB = document.querySelector("button");
// myB.innerHTML

// document.querySelector("#title").addEventListener("click", function() {
// 	document.querySelector("#title").classList.toggle("maSuperClasse");
// });

// document.querySelectorAll("p")[2].addEventListener("dblclick", function() {
// 	document.querySelectorAll("p")[2].classList.toggle("maSuperClasse");
// });

document.querySelectorAll("input")[1].addEventListener("click", function() {
	console.log(document.getElementById("myInput").value);
});

document.querySelector("ul").addEventListener("mouseenter", function() {
	document.querySelector("ul").classList.toggle("monUl");
});

document.querySelector("ul").addEventListener("mouseleave", function() {
	document.querySelector("ul").classList.toggle("monUl");
});

document.querySelectorAll("button")[1].addEventListener("click", function() {
	document.querySelectorAll("p")[1].classList.toggle("visibility");
});

document.querySelectorAll("button")[2].addEventListener("click", function() {
	document.querySelectorAll("p")[2].classList.toggle("visibility");
});

document.querySelectorAll("button")[3].addEventListener("click", function(){
	document.querySelector("body").classList.toggle("blueText");
});

let calculate = Number(prompt("donnez moi un chiffre de 0 à 9")) + Number(prompt("donnez moi un chiffre de 0 à 9"));
console.log(calculate);