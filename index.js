/*//Zadatak 1.
var C = prompt('Upisite vrijednost temeperature u Celzijusima!');
var F = C * 1.8 + 32;

document.write('<p>Temeperatura u Celzijusima: ' + C + ' &deg;C</p>');
document.write('<p>Temeperatura u Farenhajtima: ' + F + ' &deg;F</p>');

//Zadatak 2.
var p1 = prompt('Koji je glavni grad BiH?');
var p2 = prompt('Koliko je 2 + 2?');
var p3 = prompt('Da li su Java i Javascript isti programski jezici?');
var total = 0;
        
if(p1 == 'sarajevo'){
    total+=1;
}
if(p2 == '4'){
    total+=1;
}
if(p3 == 'ne'){
    total+=1;
}

document.write('<p>1. Koji je glavni grad BiH? Odgovor: <b>' + p1 + '</b></p>');
document.write('<p>2. Koliko je 2 + 2? Odgovor: <b>' + p2 + '</b></p>');
document.write('<p>3. Da li su Java i Javascript isti programski jezici? Odgovor: <b>' + p3 + '</b>' + '</p>');
document.write('<p>Broj osvojenih bodova: <b>' + total + '</b></p>');

//Zadatak 3.
var ocjena = prompt('Unesite vrijednost u intervalu od 1 do 5.');

switch (ocjena){
    case '5':
        document.write('<p>Odličan</p>ss');
        break;
    case '4':
        document.write('<p>Vrlo dobar</p>');
        break;
    case '3':
        document.write('<p>Dobar</p>');
        break;  
    case '2':
        document.write('<p>Dovoljan</p>');
        break;
    case '1':
        document.write('<p>Nedovoljan</p>');
        break;
    default:
        document.write('<p>Niste unijeli validnu ocjenu.</p>');
}

//Zadatak 4.
document.write('<p>Brojevi od 1 do 20: ');
for (var i = 1; i <= 20; i++){
    document.write(i + ' ');
}
document.write('</p>');

//Zadatak 5.
var pocetnaVrijednost = parseInt(prompt('Unesite početnu vrijednost niza.'));
var krajnjaVrijednost = parseInt(prompt('Unesite krajnju vrijednost niza.'));

document.write('<p>Početna vrijednost niza: ' + pocetnaVrijednost + '</p>');
document.write('<p>Krajnja vrijednost niza ' + krajnjaVrijednost + '</p>');
document.write('<p>Parni brojevi : ');

for(var i = pocetnaVrijednost; i <= krajnjaVrijednost; i++){
    if(i % 2 == 0){
        document.write(i + ' ');
    }
}
document.write('</p>');*/