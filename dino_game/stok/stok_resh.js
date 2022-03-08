var button = document.getElementById('button');

function main(){
    button.classList.add('hz')
    setInterval(function(){
        button.classList.remove('hz')
        button.classList.add('button2')
        button.innerHTML = "Он умер от спида..."
    }, 5000)
}

main()


function main2(){
    alert("в данный момент такая функция не лоступна")
}