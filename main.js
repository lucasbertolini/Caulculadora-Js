
//para fazer: o botão do ponto ainda não funciona. 

const calculadora = document.querySelector('#calculadora__principal');
const exibeValor = document.querySelector('#calculadora__principal--mostrador');


//variavéis para operação
let valorAtual = 0;
let valorAntigo = 0;
let ponto = false
var somar = false;
var subtrair = false;
var multiplicar = false;
var dividir = false;

calculadora.addEventListener('click', (evento) =>{
    const valorSelecionado = evento.target.textContent;

    if(evento.target.id == 'calculadora__principal--mostrador'){ //não deixa clicar na div de resultado
        return
    }

    if(valorSelecionado == '+' || valorSelecionado == '-' || valorSelecionado == '*' || valorSelecionado == '/'){
        //verifica se foi clicado em algum botão de operador
        switch(valorSelecionado){
            case "+":
                valorAntigo = parseFloat(exibeValor.textContent);
                exibeValor.innerHTML = '';
                somar = true;
                break;
            case "-":
                valorAntigo = parseFloat(exibeValor.textContent);
                exibeValor.innerHTML = '';
                subtrair = true;
                break;
            case "*":
                valorAntigo = parseFloat(exibeValor.textContent);
                exibeValor.innerHTML = '';
                multiplicar = true;
                break;
            case "/":
                valorAntigo = parseFloat(exibeValor.textContent);
                exibeValor.innerHTML = '';
                dividir = true;
                break;
        } 
        return
        
    }else if(valorSelecionado == 'C'){ //para zerar o calculadora
        valorAntigo = 0;
        valorAtual = 0;
        exibeValor.innerHTML = '';
        ponto = false;
        return;

    }else if(valorSelecionado == '='){ //concluir operação da calculadora
        if(somar){
            exibeValor.innerHTML = valorAntigo + valorAtual;
            console.log(`valor atual ${valorAtual} \nvalor antigo ${valorAntigo} \nResultado ${exibeValor.textContent + parseInt('.')}`);
            somar = false;
            return
        }else if(multiplicar){
            exibeValor.innerHTML = valorAntigo * valorAtual;
            multiplicar = false;
            return 
        }else if(dividir){
            exibeValor.innerHTML = valorAntigo / valorAtual;
            dividir = false;
            return
        }else if(subtrair){
            exibeValor.innerHTML = valorAntigo - valorAtual;
            subtrair = false;
            return
        }
    }else if(valorSelecionado == '.'){ //adiciona o ponto
        console.log(ponto);
        if(ponto)return
        exibeValor.innerHTML += '.';
        ponto = true;
        return

    }
    if(!parseInt(valorSelecionado)){ //apenas números são clicavéis
        if(!parseInt(valorSelecionado) && parseInt(valorSelecionado) == 0 ){ //regra para o 0 funcionar corretamente
            valorAtual = parseInt(valorSelecionado);
            exibeValor.innerHTML += valorAtual; 
            valorAtual = parseFloat(exibeValor.textContent)
            return
        }
        console.error('Clique em um número')
        return
    }
    valorAtual = parseFloat(valorSelecionado);
    exibeValor.innerHTML += valorAtual; 
    valorAtual = parseFloat(exibeValor.textContent);

   
   console.log(`valor atual ${valorAtual} \nvalor antigo ${valorAntigo} \nResultado ${exibeValor.textContent}`);
    

})

