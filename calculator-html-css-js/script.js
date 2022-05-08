// Pegando os elementos li div input

let btn = document.querySelectorAll(".key li");
let input = document.querySelector(".input-valor");
let operador = document.querySelectorAll(".operador");

// Percorrer o array para usar todas as informações
for(let i = 0; i < btn.length; i++) {
    document.onkeypress = function(event) {
        let key = event.charCode; // Mudança de keyCode para chaarCode, por que o firefox não aceitou keyCode
        // console.log("key");
        // console.log(String.fromCharCode(47));
        for(let e = 0; e <=10; e++) {
            if(key === (48+e)) {
                input.innerHTML += e;
            }
        }
        switch (key){
            case 42:
                input.innerHTML += "*";
                break;
            case 43:
                input.innerHTML += "+";
                break;
            case 45:
                input.innerHTML += "-";
                break;
            case 46:
                input.innerHTML += ".";
                break;
            case 47:
                input.innerHTML += "/";
                break;
            case 13:
            case 61:
                let equacao = input.innerHTML;
                if (equacao) {
                    try {
                        input.innerHTML = eval(equacao);
                    } catch (e) {
                        alert('Erro na expressão');
                    }
                }
                break;
            default:
                // console.log("Procurando erros?");
                break;
        }

    };
    btn[i].addEventListener('click', function(){
        let btnVal = this.innerHTML,
        inputVal = input.innerHTML;
        // console.log(btnVal);

        // crio um clear caso o c for clicado
        switch (btnVal) {
            case "c":
                input.innerHTML = "";
                break;
            case "=":
                // Crio a variavel de equação aqui eu utilizo a função eval do javascript
                let equação = inputVal;
                
                if (equação){
                    try {
                        input.innerHTML = eval(equação);
                    } catch (e) {
                        alert("Erro na expressão");
                    }
                }
                break;
                default:
                    input.innerHTML += btnVal;
                    break;
            
        }
    });
}