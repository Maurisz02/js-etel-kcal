
let osszKcal = 0;

let kcalSzamlalo = document.getElementById('kcal');
kcalSzamlalo.textContent = "Össz Kalória: "+0; 

function addPizza(){
    let szoveg = "Pizza (800 kcal)"
    osszKcal += 800;
    let list = document.getElementById('lista');
    let listElem = document.createElement('li');
    listElem.classList.add('list-group-item');
    listElem.textContent = szoveg;

    let torles = document.createElement('button');
    torles.classList.add('btn');
    torles.classList.add('btn-danger')
    torles.textContent = "X";

    torles.addEventListener('click',()=>{
        listElem.remove();
        osszKcal -= 800;
        kcalSzamlalo.textContent = "Össz Kalória: "+ osszKcal;
    });
    torles.style.marginLeft = '40px';
    listElem.appendChild(torles);

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

    let torles = document.createElement('button');
    torles.classList.add('btn');
    torles.classList.add('btn-danger')
    torles.textContent = "X";

    torles.addEventListener('click',()=>{
        listElem.remove();
        osszKcal -= 1000;
        kcalSzamlalo.textContent = "Össz Kalória: "+ osszKcal;
    });
    torles.style.marginLeft = '40px';
    listElem.appendChild(torles);

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

    let torles = document.createElement('button');
    torles.classList.add('btn');
    torles.classList.add('btn-danger')
    torles.textContent = "X";

    torles.addEventListener('click',()=>{
        listElem.remove();
        osszKcal -= 350;
        kcalSzamlalo.textContent = "Össz Kalória: "+ osszKcal;
    });
    torles.style.marginLeft = '40px';
    listElem.appendChild(torles);

    list.append(listElem); 
    kcalSzamlalo.textContent = "Össz Kalória: "+ osszKcal;
}

function reset(){
    osszKcal = 0;
    kcalSzamlalo.textContent = "Össz Kalória: "+ osszKcal;
    document.getElementById('lista').remove();
}



function init (){
document.getElementById('pizza').addEventListener('click',addPizza);
document.getElementById('kfc').addEventListener('click',addKfc);
document.getElementById('monster').addEventListener('click',addMonster);
document.getElementById('resetButton').addEventListener('click',reset);
}

document.addEventListener('DOMContentLoaded',init);