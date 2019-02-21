const watson = require('watson-developer-cloud/assistant/v1');
//const prompt = require('prompt-sync')();
//require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());


const chatbot = new watson({
    username: 'fa878a59-8507-4403-81b8-9c75fb28886d',
    password: 'h7clQiI8MLqP',
    version: '2018-10-18',
});


const workspace_id = 'fc582f37-201b-4cc7-ac0d-eaf8ed6dab2f'


//comecamos a conversacao com uma mensagem vazia
//chatbot.message({workspace_id}, trataResposta)

var payload = {
    workspace_id,
    context: req.body.contex || {},
    input: req.body.input || {}
};

chatbot.message(payload, function (err, data) {
    if(err){
        return resizeBy.status(err.code || 500 ).json(err);
    }

    return res.json(updadetaMessage(payload, data));
})

function updadetaMessage(input, resposta){
    var respostaTexto = null;
    if(!resposta.output){
        resposta.output = {};
    }else{
        return resposta;
    }
    return resposta;
}

module.exports = app;

//let FimConversa = false;

// function trataResposta(err, resposta){
//     if(err){
//         console.log(err)//caso tenha erro
//         return
//     }
//     console.log(resposta)
//     //detecta a intencao do usuario
//     if(resposta.intents.length > 0){
//         console.log('Eu detectei a intencao '+ resposta.intents[0].intent);
//         if(resposta.intents[0].intent == 'encerramento'){
//             FimConversa = true;
//         }
//     }

//     if(resposta.entities.length > 0 ){
//         var i;
//         var entidades = Number(resposta.entities.length)
//         for(i = 0; i < entidades; i++){
//             var armazena = resposta.entities[i].entity;
//             console.log(armazena)
//             //console.log('Detectei a intecao '+resposta.entities[i].entity)
//         }
        
        
//     }
//     //console.log(resposta)
//     //entao exibe a resposta do dialogo
//     if(resposta.output.text.length > 0){
//         console.log(resposta.output.text[0]);
//     }
//     if(!FimConversa){
//         const mensagemUsuario = prompt('>>');
//         chatbot.message({
//             workspace_id, 
//             input:{text: mensagemUsuario}
//         }, trataResposta);
//     }
// }
