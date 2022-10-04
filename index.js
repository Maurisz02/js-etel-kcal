let food = [
    
]


let osszKcal = 0;

let kcalSzamlalo = document.getElementById('kcal');

function addPizza(){
    let szoveg = "Pizza (800 kcal)"
    osszKcal += 800;
    let list = document.getElementById('lista');
    let listElem = document.createElement('li');
    listElem.classList.add('list-group-item');
    listElem.textContent = szoveg;
    list.append(listElem); 
    kcalSzamlalo.textContent = "Össz Kalória: "+ osszKcal;
}

function addKfc(){
    let szoveg = "Kfc (1000 kcal)"
    osszKcal += 1000;
    let list = document.getElementById('lista');
    let listElem = document.createElement('li');
    listElem.classList.add('list-group-item');
    listElem.textContent = szoveg;
    list.append(listElem); 
    kcalSzamlalo.textContent = "Össz Kalória: "+ osszKcal;
}

function addMonster(){
    let szoveg = "Arany Monster (350 kcal)"
    osszKcal += 350;
    let list = document.getElementById('lista');
    let listElem = document.createElement('li');
    listElem.classList.add('list-group-item');
    listElem.textContent = szoveg;
    list.append(listElem); 
    kcalSzamlalo.textContent = "Össz Kalória: "+ osszKcal;
}



function init (){
document.getElementById('pizza').addEventListener('click',addPizza);
document.getElementById('kfc').addEventListener('click',addKfc);
document.getElementById('monster').addEventListener('click',addMonster);
}

document.addEventListener('DOMContentLoaded',init);