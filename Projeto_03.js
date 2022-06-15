const prompt = require("prompt-sync")();
console.clear();

let WinPlayer1 = 0;
let WinPlayer2 = 0;

const tabuleiro = new Array(3);
let JP1 = '';
let JP2 = '';
let Player1 = '';
let Player2 = '';

Inicio: while(true){

console.log();
console.log("Bem-vindo ao Jogo da Velha!");
prompt();

while(true){
Player1 = prompt("Player 1, selecione entre 'X' ou 'O': ").toUpperCase();
    if(Player1 == 'X' || Player1 == 'O'){
        break;
    }else{
        console.log();
        console.log("Digite apenas 'X' ou 'O'...");
        prompt();
        console.clear();
        console.log();
    };
};
Player2;
    if(Player1 == 'X'){
        Player2 = 'O'
        
    } else{
    Player2 = 'X'
    Player1 = 'O'

};
console.clear();
console.log();

tabuleiro[0] = ['1','2','3'];
tabuleiro[1] = ['4','5','6'];
tabuleiro[2] = ['7','8','9'];

montaTabuleiro();
console.log();

JP1 = '';
JP2 = '';
let jogadas = 0;

while(true){

while(true){
JP1 = prompt("Player 1, qual o número respectivo a posição da sua jogada? ");
    if(JP1 >= '1' && JP1 <= '9'){
        break;
    }else{
        console.log();
        console.log('Digite um número de 1 a 9...');
        prompt();
        console.clear();
        console.log();
        montaTabuleiro();
        console.log();
    };
};

verificaJogadaP1();
jogadas++;

if(JP1 == '1'){
        tabuleiro[0].splice(0, 1, Player1)
}else if(JP1 == '2'){
        tabuleiro[0].splice(1, 1, Player1)
}else if(JP1 == '3'){
        tabuleiro[0].splice(2, 1, Player1)
}else if(JP1 == '4'){
        tabuleiro[1].splice(0, 1, Player1)
}else if(JP1 == '5'){
        tabuleiro[1].splice(1, 1, Player1)
}else if(JP1 == '6'){
        tabuleiro[1].splice(2, 1, Player1)
}else if(JP1 == '7'){
        tabuleiro[2].splice(0, 1, Player1)
}else if(JP1 == '8'){
        tabuleiro[2].splice(1, 1, Player1)
}else if(JP1 == '9'){
        tabuleiro[2].splice(2, 1, Player1)
}else{

};

if(verificaWin() == true){
    break;
};

if(jogadas > 8){
    console.clear();
    console.log('O jogo empatou!');
    break;
};

console.clear();
console.log();
montaTabuleiro();
console.log();

while(true){
JP2 = prompt("Player 2, qual o número respectivo a posição da sua jogada? ");
    if(JP2 >= '1' && JP2 <= '9'){
        break;
    }else{
        console.log();
        console.log('Digite um número de 1 a 9...');
        prompt();
        console.clear();
        montaTabuleiro();
        console.log();
    };
};

console.log();

verificaJogadaP2();
jogadas++

    if(JP2 == '1'){
        tabuleiro[0].splice(0, 1, Player2)
    }else if(JP2 == '2'){
        tabuleiro[0].splice(1, 1, Player2)
    }else if(JP2 == '3'){
        tabuleiro[0].splice(2, 1, Player2)
    }else if(JP2 == '4'){
        tabuleiro[1].splice(0, 1, Player2)
    }else if(JP2 == '5'){
        tabuleiro[1].splice(1, 1, Player2)
    }else if(JP2 == '6'){
        tabuleiro[1].splice(2, 1, Player2)
    }else if(JP2 == '7'){
        tabuleiro[2].splice(0, 1, Player2)
    }else if(JP2 == '8'){
        tabuleiro[2].splice(1, 1, Player2)
    }else if(JP2 == '9'){
        tabuleiro[2].splice(2, 1, Player2)
    }else{

};

if(verificaWin() == true){
    break;
};

console.clear();
console.log();
montaTabuleiro();
console.log()
};

console.log();
montaTabuleiro();
console.log();

console.log(`Pontuação Player 1: ${WinPlayer1}`);
console.log(`Pontuação Player 2: ${WinPlayer2}`)

console.log();

let again = '';
while(true){
again = prompt('Você gostaria de jogar novamente?').toLowerCase();
    if(again == 'sim' || again == 'não' || again == 'nao'){
        break;
    }else{
        console.log();
        console.log('Digite apenas "SIM" ou NÃO"!')
        prompt();
        console.clear();
        console.log();
    };
};

if(again == 'sim'){
    console.clear();
    continue Inicio;
}else{
    console.clear();
    break;
};

function verificaJogadaP1(){
    while(true){
        if(JP1 <= '3'){
            let find = tabuleiro[0].includes(JP1);
        
            if(find == false){
                console.clear();
                console.log();
                console.log("Esta posição já está ocupada, selecione outra... ");
                console.log();
                montaTabuleiro();
                console.log();
                JP1 = prompt("Player 1, qual o número respectivo a posição da sua jogada? ");
            } else{
                break;
            };

        }else if(JP1 > '3' && JP1 <= '6'){
            find = tabuleiro[1].includes(JP1);
            
            if(find == false){
                console.clear();
                console.log();
                console.log("Esta posição já está ocupada, selecione outra... ");
                console.log();
                montaTabuleiro();
                console.log();    
                JP1 = prompt("Player 1, qual o número respectivo a posição da sua jogada? ");
            }else{
                break;
            };     

        }else if(JP1 > '6' && JP1 <= '9'){
            find = tabuleiro[2].includes(JP1);

            if(find == false){
                console.clear();
                console.log();
                console.log("Esta posição já está ocupada, selecione outra... ");
                console.log();
                montaTabuleiro();
                console.log();    
                JP1 = prompt("Player 1, qual o número respectivo a posição da sua jogada? ");
            }else{
                break;
            };
        
        };
    };
};

function verificaJogadaP2(){
    while(true){
        if(JP2 <= '3'){
        let find = tabuleiro[0].includes(JP2);
        
            if(find == false){
                console.clear();
                console.log();
                console.log("Esta posição já está ocupada, selecione outra... ");
                console.log();
                montaTabuleiro();
                console.log();
                JP2 = prompt("Player 2, qual o número respectivo a posição da sua jogada? ");
            } else{
                break;
            };

        }else if(JP2 > '3' && JP2 <= '6'){
            find = tabuleiro[1].includes(JP2);
            
            if(find == false){
                console.clear();
                console.log();
                console.log("Esta posição já está ocupada, selecione outra... ");
                console.log();
                montaTabuleiro();
                console.log();    
                JP2 = prompt("Player 2, qual o número respectivo a posição da sua jogada? ");
            }else{
                break;
            };

        }else if(JP2 > '6' && JP2 <= '9'){
            find = tabuleiro[2].includes(JP2);

            if(find == false){
                console.clear();
                console.log();
                console.log("Esta posição já está ocupada, selecione outra... ");
                console.log();
                montaTabuleiro();
                console.log();    
                JP2 = prompt("Player 2, qual o número respectivo a posição da sua jogada? ");
            }else{
                break;
            };
          
        };        
    };
};

function montaTabuleiro(){
console.log(`Player 1: ${Player1} 
Player 2: ${Player2}`);
for(let t of tabuleiro){
    console.log();
    console.log(t);
    };
};

function verificaWin(){

    if(tabuleiro[0][0] == 'X' && tabuleiro[0][1] == 'X' && tabuleiro[0][2] == 'X'){
     
        if(Player1 == 'X'){
            console.clear();
            console.log('O Player1 venceu!');
            WinPlayer1++;
            return true;
        }else{
            console.clear();
            console.log('O Player2 venceu!');
            WinPlayer2++
            return true;
        };
    
    }else if(tabuleiro[1][0] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro [1][2] == 'X'){
     
        if(Player1 == 'X'){
            console.clear();
            console.log('O Player1 venceu!');
            WinPlayer1++;
            return true;
        }else{
            console.clear();
            console.log('O Player2 venceu!');
            WinPlayer2++
            return true;
        };

    }else if(tabuleiro[2][0] == 'X' && tabuleiro[2][1] == 'X' && tabuleiro[2][2] == 'X'){

        if(Player1 == 'X'){
            console.clear();
            console.log('O Player1 venceu!');
            WinPlayer1++;
            return true;
        }else{
            console.clear();
            console.log('O Player2 venceu!');
            WinPlayer2++
            return true;
        };

    }else if(tabuleiro[0][0] == 'X' && tabuleiro[1][0] == 'X' && tabuleiro[2][0] == 'X'){
    
        if(Player1 == 'X'){
            console.clear();
            console.log('O Player1 venceu!');
            WinPlayer1++;
            return true;
        }else{
            console.clear();
            console.log('O Player2 venceu!');
            WinPlayer2++
            return true;
        };
    }else if(tabuleiro[0][1] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[2][1] == 'X'){
        
        if(Player1 == 'X'){
            console.clear();
            console.log('O Player1 venceu!');
            WinPlayer1++;
            return true;
        }else{
            console.clear();
            console.log('O Player2 venceu!');
            WinPlayer2++
            return true;
        };    

    }else if(tabuleiro[0][2] == 'X' && tabuleiro[1][2] == 'X' && tabuleiro[2][2] == 'X'){
        
        if(Player1 == 'X'){
            console.clear();
            console.log('O Player1 venceu!');
            WinPlayer1++;
            return true;
        }else{
            console.clear();
            console.log('O Player2 venceu!');
            WinPlayer2++
            return true;
        };

    }else if(tabuleiro[0][0] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[2][2] == 'X'){

        if(Player1 == 'X'){
            console.clear();
            console.log('O Player1 venceu!');
            WinPlayer1++;
            return true;
        }else{
            console.clear();
            console.log('O Player2 venceu!');
            WinPlayer2++
            return true;
        };

    }else if(tabuleiro[0][2] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[2][0] == 'X'){

        if(Player1 == 'X'){
            console.clear();
            console.log('O Player1 venceu!');
            WinPlayer1++;
            return true;
        }else{
            console.clear();
            console.log('O Player2 venceu!');
            WinPlayer2++
            return true;
        };

// Começa O

    }else if(tabuleiro[0][0] == 'O' && tabuleiro[0][1] == 'O' && tabuleiro[0][2] == 'O'){
     
        if(Player1 == 'O'){
            console.clear();
            console.log('O Player1 venceu!');
            WinPlayer1++
            return true;
        }else{
            console.clear();
            console.log('O Player2 venceu!');
            WinPlayer2++
            return true;
        };
    
    }else if(tabuleiro[1][0] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro [1][2] == 'O'){
     

        if(Player1 == 'O'){
            console.clear();
            console.log('O Player1 venceu!');
            WinPlayer1++
            return true;
        }else{
            console.clear();
            console.log('O Player2 venceu!');
            WinPlayer2++
            return true;
        };

    }else if(tabuleiro[2][0] == 'O' && tabuleiro[2][1] == 'O' && tabuleiro[2][2] == 'O'){
    
        if(Player1 == 'O'){
            console.clear();
            console.log('O Player1 venceu!');
            WinPlayer1++
            return true;
        }else{
            console.clear();
            console.log('O Player2 venceu!');
            WinPlayer2++
            return true;
        };

    }else if(tabuleiro[0][0] == 'O' && tabuleiro[1][0] == 'O' && tabuleiro[2][0] == 'O'){
    
        if(Player1 == 'O'){
            console.clear();
            console.log('O Player1 venceu!');
            WinPlayer1++
            return true;
        }else{
            console.clear();
            console.log('O Player2 venceu!');
            WinPlayer2++
            return true;
        };

    }else if(tabuleiro[0][1] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[2][1] == 'X'){
        
        if(Player1 == 'O'){
            console.clear();
            console.log('O Player1 venceu!');
            WinPlayer1++
            return true;
        }else{
            console.clear();
            console.log('O Player2 venceu!');
            WinPlayer2++
            return true;
        };    

    }else if(tabuleiro[0][2] == 'O' && tabuleiro[1][2] == 'O' && tabuleiro[2][2] == 'O'){
        
        if(Player1 == 'O'){
            console.clear();
            console.log('O Player1 venceu!');
            WinPlayer1++
            return true;
        }else{
            console.clear();
            console.log('O Player2 venceu!');
            WinPlayer2++
            return true;
        };

    }else if(tabuleiro[0][0] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[2][2] == 'O'){

        if(Player1 == 'O'){
            console.clear();
            console.log('O Player1 venceu!');
            WinPlayer1++
            return true;
        }else{
            console.clear();
            console.log('O Player2 venceu!');
            WinPlayer2++
            return true;
        };

    }else if(tabuleiro[0][2] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[2][0] == 'O'){

        if(Player1 == 'O'){
            console.clear();
            console.log('O Player1 venceu!');
            WinPlayer1++
            return true;
        }else{
            console.clear();
            console.log('O Player2 venceu!');
            WinPlayer2++
            return true;
        };

    }else{ 
      return false;
    };
};
};
