const search = document.getElementById('search');
const wini = document.getElementById('win');
document.getElementById('luna').addEventListener('click', (ivent) =>{
    ivent.preventDefault();
    const Temka = document.body.className;
    if(Temka === 'light-tem'){
        document.body.classList = 'dark-tem';
        search.classList = 'searchdark'
        wini.classList = 'windowwdark'
    } else {
        document.body.classList = 'light-tem';
        search.classList = 'search'
        wini.classList = 'windoww'
    }

})
document.getElementById('add').addEventListener('click', (ivent) =>{
    ivent.preventDefault();
    wini.style.display = 'flex';
   
})
document.getElementById('closed').addEventListener('click', (ivent) =>{
    ivent.preventDefault();
    wini.style.display = 'none';
})
