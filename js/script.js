
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

const buttonRock = document.getElementById("Rock");
const buttonPaper = document.getElementById("Paper");
const buttonScissours = document.getElementById("Scissours");

const imageThinker =document.getElementById("thinker");
const imageRock =document.getElementById("rock");
const imagePaper =document.getElementById("paper");
const imageScissours =document.getElementById("scissours");


/*console.log("cześć zagrajmy w papier,kamień,nożyce");*/
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

function getBattle(player_figure){

    if(player_figure=="Rock"){
       if(figure=="Paper"){
        wynik_komputera++;
       }else if(figure=="Scissours"){
        wynik_gracza++;
       }
    }else if(player_figure=="Paper"){
        if(figure=="Scissours"){
        wynik_komputera++;
       }else if(figure=="Rock"){
        wynik_gracza++;
       }

    }else if(player_figure=="Scissours"){
        if(figure=="Paper"){
        wynik_gracza++;
       }else if(figure=="Rock"){
        wynik_komputera++;
       }

    }else {
        console.log("bad imput you lost a round");
        wynik_komputera++;
    }

    return player_figure;

}

/*for( let i = 0; i < how_many_rounds ; i++){
    //tekst = prompt("Chose and type: Rock, Paper, Scissours");
    
    console.log(getRockPaperorSc(3));
    getBattle(tekst);
    console.log("wynik komputera: " + wynik_komputera);
    console.log("wynik gracza: " + wynik_gracza);
}

    if(wynik_gracza > wynik_komputera){
        console.log("Gratulacje wygrałeś: "+ wynik_gracza + " do "+ wynik_komputera);
    }else{
        console.log("Niestety nie tym razem");
    }*/

buttonRock.addEventListener('click',function(){
    imageRock.style.display='block';
    imagePaper.style.display='none';
    imageScissours.style.display='none';
    imageThinker.style.display='none';

    console.log(getRockPaperorSc(3));
    tekst="Rock";
    console.log(getBattle(tekst));
    console.log("wynik komputera: " + wynik_komputera);
    console.log("wynik gracza: " + wynik_gracza);

    how_many_rounds--;

    if(how_many_rounds==0){
        if(wynik_gracza > wynik_komputera){
            console.log("Gratulacje wygrałeś: "+ wynik_gracza + " do "+ wynik_komputera);
        }else{
            console.log("Niestety nie tym razem");
        }
    }
})

buttonPaper.addEventListener('click',function(){
    imagePaper.style.display='block';
    imageRock.style.display='none';
    imageScissours.style.display='none';
    imageThinker.style.display='none';

    console.log(getRockPaperorSc(3));
    tekst="Paper";
    console.log(getBattle(tekst));
    console.log("wynik komputera: " + wynik_komputera);
    console.log("wynik gracza: " + wynik_gracza);

    how_many_rounds--;

    if(how_many_rounds==0){
        if(wynik_gracza > wynik_komputera){
            console.log("Gratulacje wygrałeś: "+ wynik_gracza + " do "+ wynik_komputera);
        }else{
            console.log("Niestety nie tym razem");
        }
    }
})

buttonScissours.addEventListener('click',function(){
    imageScissours.style.display='block';
    imageRock.style.display='none';
    imagePaper.style.display='none';
    imageThinker.style.display='none';

    console.log(getRockPaperorSc(3));
    tekst="Scissours";
    console.log(getBattle(tekst));
    console.log("wynik komputera: " + wynik_komputera);
    console.log("wynik gracza: " + wynik_gracza);

    how_many_rounds--;

    if(how_many_rounds==0){
        if(wynik_gracza > wynik_komputera){
            console.log("Gratulacje wygrałeś: "+ wynik_gracza + " do "+ wynik_komputera);
        }else{
            console.log("Niestety nie tym razem");
        }
    }
})