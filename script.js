
// ispisati prompt metodu omoguciti unos 5 brojeva i ispisati te brojeve
let brojevi = [];

for (let i = 0; i < 5; i++) {
    let broj = prompt("Unesite broj:");
    
    if (brojevi.includes(parseInt(broj))) {
     alert("Taj broj je već unešen. Molimo unesite drugi broj.");
      i--; // smanjimo vrijednost i kako bi korisnik ponovo unio broj
    } else {
      brojevi.push(parseInt(broj));
    }
  }
  
  document.write("Uneseni brojevi: " + brojevi.join(", "), "</br>");

//sortirati brojeve od manjeg ka vecem 
let brojevi2 = brojevi;
brojevi2.sort(function (a, b) {
  return a - b;
});
document.write("sortirani niz od manjeg ka vecem je: " + brojevi2.join(", "),"</br>");


// naci najveci broj u nizu
const najveciBroj = Math.max(...brojevi2);
document.write("Najveci broj u nizu je: " + najveciBroj, "</br>");


//izracunati prosjek u nizu
const prosjek = brojevi.reduce((a, b) => a + b) / brojevi.length;
document.write("Prosjecni broj u nizu je :" + prosjek.toFixed(2), "</br>");


//ispisati broj neparnih brojeva iz unosa
let neparni = 0;
let parni = 0;

for (let i = 0; i < brojevi.length; i++) {
  if (brojevi[i] % 2 !== 0) {
    neparni++;
  }
  else {
    parni++;
  }
}

document.write("Broj neparnih brojeva koji su upisani je: " + neparni, "</br>");
document.write("Broj parnih brojeva koji su upisani je: " + parni, "</br>");
