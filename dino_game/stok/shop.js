var dengi = localStorage.getItem('rubley');
var dengi_text = document.getElementById('dengi_text');

dengi_text.innerHTML = 'Бабки в кармане: ' + dengi + 'р'


function menu_button(){
    window.location = 'menu.html'
}

var stoim = new Object({
    pivo: Number(100)
})

function opianNon(){
    var babki = localStorage.getItem('rubley');
    var dengi = document.getElementById('dengi_text');
    if (babki < stoim.pivo){
        alert("недостаточно средств")
    }else if (babki >= stoim.pivo){
        var itog = Number(localStorage.getItem('rubley')) - Number(stoim.pivo);
        dengi.innerHTML = "Бабки в кармане: " + itog + "p";
        localStorage.setItem('rubley', itog)
        var pian = localStorage.getItem('pian');
        var finish = Number(pian) - Number(pian)
        localStorage.setItem('pian', finish)
        var vodka_text = document.getElementById('vodka_text');
        vodka_text.innerHTML = "Опьянение: " + localStorage.getItem('pian')
    }
}

function pivoInfo_out(){
    var infa_pivo = document.getElementById('infa_pivo');
    var stoim_pivo = document.getElementById('stoim_pivo');

    stoim_pivo.style.marginTop = '-50px';
    infa_pivo.style.width = '200px'
    infa_pivo.style.fontSize = '20px'
    infa_pivo.style.borderColor = 'rgba(0, 0, 0, 0)';
    infa_pivo.style.color = 'rgba(0, 0, 0, 0)';
    infa_pivo.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    infa_pivo.style.top = '5px';
    infa_pivo.style.left = '70px';
    infa_pivo.style.paddingLeft = '15px';
    infa_pivo.style.paddingRight = '15px';
    infa_pivo.style.visibility = 'hidden'
    // infa_pivo.style.fontSize = '15px';
}

function pivoInfo(){
    var infa_pivo = document.getElementById('infa_pivo');
    var stoim_pivo = document.getElementById('stoim_pivo');

    stoim_pivo.style.marginTop = '-1px'

    infa_pivo.style.backgroundColor = 'white';
    infa_pivo.style.color = 'rgb(46, 155, 206)';
    infa_pivo.style.borderColor = 'rgb(46, 155, 206)';
    infa_pivo.style.width = '200px';
    infa_pivo.style.height = '100px';
    infa_pivo.style.paddingLeft = '15px';
    infa_pivo.style.paddingTop = '15px';
    infa_pivo.style.fontSize = '20px';
    infa_pivo.style.left = '70px';
    infa_pivo.style.visibility = 'visible'
}

function polnInfo(){
    var pup_bg = document.getElementById('pup_menu');
    var pup_tab = document.getElementById('tab_pup');

    pup_bg.style.visibility = 'visible'
    pup_tab.style.visibility = 'visible'

}

function exit(){
    var pup_bg = document.getElementById('pup_menu');
    var pup_tab = document.getElementById('tab_pup');

    pup_bg.style.visibility = 'hidden'
    pup_tab.style.visibility = 'hidden'
}

// function provwrkd(){
//     var babki = localStorage.getItem('rubley');
//     var dengi = document.getElementById('dengi_text');
//     if (babki < stoim.pivo){
//         alert("недостаточно средств")
//     }else if (babki >= stoim.pivo){
//         var itog = Number(localStorage.getItem('rubley')) - Number(stoim.pivo);
//         dengi.innerHTML = "Бабки в кармане: " + itog + "p";
//         localStorage.setItem('rubley', itog)
//         var pian = localStorage.getItem('pian');
//         var finish = Number(pian) - Number(pian)
//         localStorage.setItem('pian', finish)
//         var vodka_text = document.getElementById('vodka_text');
//         vodka_text.innerHTML = "Опьянение: " + localStorage.getItem('pian')
//     }
// }

var vodka_text2 = document.getElementById('vodka_text');
vodka_text2.innerHTML = "Опьянение: " + localStorage.getItem('pian')


//// function pup_exit(){
////     var pup_ex = document.getElementById('exit_pop');
////     pup_ex.style.visibility = 'hidden'
//// }