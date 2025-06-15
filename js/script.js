
let wynik_komputera=0;
let wynik_gracza=0;
let computer_posibilities;
//let player_posibilities;
let tekst;
let figure;
let player_figure;
let how_many_rounds;
let how_many;
let typedvalue;
/*onsole.log(wynik_gracza);

console.log(wynik_komputera);*/
console.log("cześć zagrajmy w papier,kamień,nożyce");
how_many = prompt("ile gier chcesz zagrać");
how_many_rounds = parseInt(how_many);//deklaracja ilości zagranych rund

function getRockPaperorSc(computer_posibilities){

    computer_posibilities = Math.floor(Math.random() * computer_posibilities);
    
    switch(computer_posibilities){
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

function getHumanChoise(player_figure){

    if(player_figure=="Rock"){
       // console.log("hell");
    }else if(player_figure=="Paper"){

    }else if(player_figure=="Scissours"){

    }else {
        console.log("bad imput you lost a round");
    }

    return player_figure;

}

for( let i = 0; i < how_many_rounds ; i++){
    //chce wczytac napis
    tekst = prompt("Chose and type: Rock, Paper, Scissours");
    getHumanChoise(tekst);
    console.log(getRockPaperorSc(3));
}