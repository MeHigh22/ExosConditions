//Des condtions, pourquoi? Exemples.
// let numerouno = 1
// let numerodos = "1"

// if (numerouno == numerodos){
//     console.log("Vrai");
// }

// if (numerouno === numerodos){
//     console.log("Nique ta mère");
// }
// else if(numerouno !== numerodos) {
//     console.log("Non");
// }
// // 

// let prenom = prompt("Donne moi ton prénom chien");

// if (prenom.length <= 5){
//     console.log("Ton nom est trop court");
// }
// else {
//     console.log("C'est cool mec, tu as un nom long");
// }

// let addition = prompt ("42 + 42 = ?");
// if (addition == "84"){
//     console.log("Tu as juste  mec");
// }
// else {
//     console.log("Tu dois écouter 42 en boucle 42 fois")
// }

// let multi = prompt('10 * 10 = ?')
// if (multi == "100"){
//     console.log("Tu as juste mon fils")
// }
// else {
//     console.log("Tu as faux")
// }

// let multi = prompt("10 * 10");

// if (multi == "100"){
//     console.log("Tu as juste mon fils");
// }
// else if(multi > 100){
// console.log(`Tu étais à ${multi - 100} de la bonne réponse `);
// }

// else {
//     console.log(`Tu étais à ${100-multi} de la réponse`);
// }

// let array = [];
// let question1 = prompt("Ajoute un élément dans ton array");
// let question2 = prompt("Ajoute un élément dans ton array");
// let question3 = prompt("Ajoute un élément dans ton array");

// array.push(question1, question2, question3);

// if (array.length == 3){
// alert("Tu es à trois fdp");
// }

let grandNombres = [];
let petitNombres = [];
let chiffres1 = prompt('Votre chiffre');
let chiffres2 = prompt('Votre chiffre');

if (chiffres1 >= 12 && chiffres2 >= 12) {
    grandNombres.push(chiffres1, chiffres2);
} else if (chiffres1 < 12 && chiffres2 < 12) {
    petitNombres.push(chiffres1, chiffres2);
} else if (chiffres1 >= 12 && chiffres2 < 12) {
    grandNombres.push(chiffres1);
    petitNombres.push(chiffres2);
} else {
    grandNombres.push(chiffres2);
    petitNombres.push(chiffres1);
}
alert(`votre bac contient ${grandNombres} et ${petitNombres}`);
