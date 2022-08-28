const cells = document.querySelectorAll('td');
const atual = document.querySelector('#current');
const recomeca = document.querySelector('#recomeca');
var jogando = true;
var empate = false;
let checkwinner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let options = ["", "", "", "", "", "", "", "", ""];

Jogar();



recomeca.addEventListener('click', function(){
    options = ["", "", "", "", "", "", "", "", ""];
    jogando = true;
    for(var i=0;i<cells.length;i++){
        cells[i].innerHTML = '';
        options[i] = '';
        document.querySelector('#h2').innerHTML = 'Vez do';
        document.querySelector('#current').innerHTML = 'X';
    } 
})

    function Jogar(){
        for(var i=0;i<cells.length;i++){
            cells[i].addEventListener("click", function(){
                if(celulaVazia(this) == true && jogando == true){
                    this.innerHTML = atual.innerText;
                    options[this.getAttribute('index')] = this.innerHTML;
                    changePlayer(atual);
                    checaVencedor();
                }
        });

        }
    }





function checaVencedor(){
    let cont = 0;
    for(var i = 0; i < checkwinner.length; i++){
        const condition = checkwinner[i];
        const celA = options[condition[0]];
        const celB = options[condition[1]];
        const celC = options[condition[2]];
        if(celA != '' && celB != '' && celC != ''){
            if(celA === celB && celB === celC){
                document.querySelector('#h2').innerHTML = '';
                if (atual.innerText === 'X'){
                    document.querySelector('#current').innerHTML = 'O venceu';
                    jogando = false;
                    break;
                   
                 }else if(atual.innerText){
                    document.querySelector('#current').innerHTML = 'X venceu';
                    jogando = false;
                    break;
                }
            }
        
        }
    }
    if (jogando != false){
        for(var j = 0; j < options.length; j++){
            if(options[j] != ""){
            cont ++; 
            }
            if(cont == 9){
                document.querySelector('#h2').innerHTML = '';
                document.querySelector('#current').innerHTML = 'Empate';
                jogando = false;
                break;
            }
        }
    }
}

function changePlayer(atual){
     if (atual.innerText === 'X'){
        document.querySelector('#current').innerHTML = 'O';
     }else{
        document.querySelector('#current').innerHTML = 'X';
     }
}

function celulaVazia(cell){
    if(cell.innerText == 'X' || cell.innerText == 'O'){
        return false;
    }else{
        return true;
    }
}


