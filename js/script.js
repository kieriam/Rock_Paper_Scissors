
let wynik_komputera=0;
let wynik_gracza=0;
let posibilities;
let figure;
let how_many_rounds;
let how_many;
/*onsole.log(wynik_gracza);

console.log(wynik_komputera);*/
console.log("cześć zagrajmy w papier,kamień,nożyce");
how_many = prompt("ile gier chcesz zagrać");
how_many_rounds = parseInt(how_many);

function getRockPaperorSc(posibilities){

    posibilities = Math.floor(Math.random() * posibilities);
    
    switch(posibilities){
        case 0:
            figure = "Rock";
            break;
        case 1:
            figure = "Paper";
            break;
        case 2:
            figure = "Scissours";
    }

    return figure;
}
for( let i = 0; i < how_many_rounds ; i++){
    console.log(getRockPaperorSc(3));
}