function hz_kak_nazvat(){
    var hg = document.getElementById('bomj');
    hg.classList.add('bob')
    setInterval(ggg(), 1000)
}

hz_kak_nazvat()

function ggg(){
    var hg2 = document.getElementById('bomj');
    hg2.classList.add('ndn')
}


document.addEventListener(`keydown`, function(event){
    jump()
})

var re = 0
function jump(){
    var tim = document.getElementById('tim');
    var rek = document.getElementById('rek');
    const dino =  document.getElementById('dino');
    var click = re += Number(1);
    var p = localStorage.getItem("rekord")
    tim.innerHTML = "Счёт: " + click;
    if (localStorage.getItem("rekord") > click){
        rek.innerHTML = "Рекорд: " + p;
    }else if (localStorage.getItem("rekord") <= click){
        var g = click += Number(1);
        localStorage.setItem("rekord", click)
        rek.innerHTML = "Рекорд: " + p;
    }
    if (Number(localStorage.getItem('pian')) >= Number(100)){
        dino.classList.add('uru')
        setTimeout(function(){
            dino.classList.remove("uru")
        }, 1000)
    }else{
        if (dino.classList != "jump"){
            dino.classList.add("jump");
        }
        setTimeout(function(){
            dino.classList.remove("jump")
        }, 1000)
    }
}

var vodka2 = Number(localStorage.getItem('pian'))
var is = setInterval(function(){
    const cactus = document.getElementById('kaktus');
    const dino2 =  document.getElementById('dino');
    const vodka = document.getElementById('vodka');
    const rubl = document.getElementById('rubl');
    var dinoTop = parseInt(window.getComputedStyle(dino2).getPropertyValue("top", "right", "left", "bottom"));
    var cat = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    var vod = parseInt(window.getComputedStyle(vodka).getPropertyValue("left"));
    var muny = parseInt(window.getComputedStyle(rubl).getPropertyValue("left", "top"))
    var vodoch = document.getElementById('vodoch');
    var text_rub = document.getElementById('requ_rub');

    if (muny <= 10 && muny > 0 && dinoTop >= 100){
        var rubl_requ = Number(localStorage.getItem('rubley'));
        var r = rubl_requ += Number(1);
        text_rub.innerHTML = "Рублей: " + r
        localStorage.setItem("rubley", r)
        rubl.style.visibility = 'hidden'
        setTimeout(function(){
            rubl.style.visibility = 'visible';
        }, 100)
    }
    if (cat <= 50 && cat > -100 && dinoTop >= 50){
        window.location = 'stok_resh.html';   
    }
    if (vod <= 50 && vod > 0 && dinoTop >= 140){   
        vodka.style.visibility = 'hidden'
        setTimeout(function(){
            vodka.style.visibility = 'visible';
        }, 100)   
        setInterval(function(){
            dino2.classList.add('non');
            Med();
        }, 2000)
        var finish = vodka2 += Number(1);
        vodoch.innerHTML = 'Водочка в грамм: ' + finish;
        localStorage.setItem('pian', finish)
        function Med(){
            dino2.classList.remove('non')
        }  
    }
}, 10)


var p2 = localStorage.getItem("rekord")
var rek2 = document.getElementById('rek');
var text_rub2 = document.getElementById('requ_rub');
var l = localStorage.getItem("rubley")
var vodoch2 = document.getElementById('vodoch');
var l2 = localStorage.getItem('pian')

rek2.innerHTML = "Рекорд: " + p2;
text_rub2.innerHTML = "Рублей: " + l;

vodoch2.innerHTML = "Водочка в грамм: " + l2;



function main5(){
    window.location = 'shop.html'
}