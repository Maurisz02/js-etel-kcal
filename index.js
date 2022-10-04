let food = [

];

function addPizza(){

}

function addKfc(){

}

function addMonster(){
    
}


function init (){
document.getElementById('pizza').addEventListener('click',addPizza);
document.getElementById('kfc').addEventListener('click',addKfc);
document.getElementById('monster').addEventListener('click',addMonster);
}

document.addEventListener('DOMContentLoaded',init);