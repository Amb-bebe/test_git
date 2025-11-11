const search = document.getElementById('search');
const wini = document.getElementById('win');
const poisk = document.getElementById('poisk');
let luna = document.getElementById('luni');
let sol = document.getElementById('sol');
const temno = document.getElementById('temno');
document.getElementById('luna').addEventListener('click', (ivent) =>{
    ivent.preventDefault();
    const Temka = document.body.className;
    if(Temka === 'light-tem'){
        document.body.classList = 'dark-tem';
        search.classList = 'searchdark';
        wini.classList = 'windowwdark';
        poisk.classList = 'poiskdark';
        luna.classList = 'lunadark';
        sol.classList = 'soldakr';
    } else {
        document.body.classList = 'light-tem';
        search.classList = 'search';
        wini.classList = 'windoww';
        poisk.classList = 'poisk';
        luna.classList = 'luna';
        sol.classList = 'soli';
    }

})
document.getElementById('add').addEventListener('click', (ivent) =>{
    ivent.preventDefault();
    wini.style.display = 'flex';
    temno.style.display = 'block'
   
})
document.getElementById('closed').addEventListener('click', (ivent) =>{
    ivent.preventDefault();
    wini.style.display = 'none';
    temno.style.display = 'none'
})
const note_text = document.getElementById('name_note');
const note_list = document.getElementById('zamet');
const note = document.getElementsByClassName('note');
document.getElementById('apply').addEventListener('click', (eve)=>{
    eve.preventDefault();
    const buttons = document.createElement('button')
    buttons.className = 'buttons';
    const text_note = note_text.value;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'note';
    const zam = document.createElement('label');
    const new_task = document.createElement('span');
    new_task.className = 'text';
    new_task.innerHTML = text_note;
    const redakt = document.createElement('button');
    redakt.className = 'frame'
    const trash = document.createElement('button');
    trash.className = 'trash'


    note_list.appendChild(zam);
    zam.appendChild(checkbox);
    zam.appendChild(new_task);
    zam.appendChild(buttons);
    buttons.appendChild(redakt);
    buttons.appendChild(trash);
})

const search_input = document.getElementById('poisk');
search_input.addEventListener('input', ()=>{
    let listNotes = document.querySelectorAll('#zamet > label >span.text');
    for(let i = 0; i < listNotes.length; i++){
        listNotes[i].parentElement.style.display = 'flex';

        if(!listNotes[i].innerText.includes(search_input.value)){
            listNotes[i].parentElement.style.display = 'none';
        }
    }
})

