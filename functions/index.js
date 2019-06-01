//back-end do watson que será enviado ao firebase
const functions = require('firebase-functions');
const watson = require('watson-developer-cloud/assistant/v1');
require('dotenv').config() //biblioteca do .env. No arquivo .env são declaradas o username, password, versão e workspace id
const cors = require('cors')({ origin: true})
//importa as bibliotecas necessárias
const chatbot = new watson({
    username: process.env.USER_NAME,
    password: process.env.PASSWORD, 
    version: process.env.VERSION,
});
//atribui as credenciais no watson

const workspace_id = process.env.WORKSPACE_ID

exports.conversa = functions.https.onRequest((req, res)=>{
    cors(req, res, () =>{
        let payload = {
            workspace_id,
            context: req.body.context || {},
            input: { text: req.body.input } || {}
        };
        chatbot.message(payload, (err, data)=>{
            if(err){
                console.log(err)
                return res.status(err.code || 500).json(err)
            }
            return res.json(trataResposta(payload, data))
        })
    })  
})

const trataResposta = (payload, resposta) =>{
    return resposta; //resposta que deve ser enviada quando chama o back-end
}