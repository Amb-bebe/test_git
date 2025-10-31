
const button_tem = document.getElementById('luna');
button_tem.addEventListener('click', () =>{
    const Temka = document.body.className;
    if(Temka === ''){
        document.body.className = 'dark-tem';
    } else {
        document.body.className = '';
    }
})
