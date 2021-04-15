setTimeout(function(){ {function Guerreiro(){
    
    var respondapergunta = prompt("Digite as opções correspondentes, mas lembre-se, sua jornada não será fácil");
    if(!(respondapergunta=="1"||respondapergunta=="2")){
    alert("Escolha 1 ou 2, sua vida depende disso!");
    }
    else if(respondapergunta=="1"){ 
    location.assign('SCARLETFASE3OPÇÃO1.html');
    }
    else if(respondapergunta=="2"){
    location.assign('SCARLETFASE3OPÇÃO2.html');
    return
    }}
   
}
Guerreiro(); },900)