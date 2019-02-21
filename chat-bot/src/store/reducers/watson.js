const INITAL_STATE = {
    respostas: [],
    carregando: false,
    erro: false
}

export default function conversaWatson(state=INITAL_STATE, action){
    switch (action.type){
        case 'CONVERSA_WATSON_REQUEST':
            return {
                carregando: true,
                respostas: [],
                erro: false
            }
            
        case 'CONVERSA_WATSON_SUCESS':
            return{
                carregando: false,
                respostas: action.respostas,
                erro: false
            }
            
        case 'CONVERSA_WATSON_ERRO':
            return{
                carregando: false,
                respostas: [],
                erro: true
            }
        default: return state
    }
}