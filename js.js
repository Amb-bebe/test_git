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


