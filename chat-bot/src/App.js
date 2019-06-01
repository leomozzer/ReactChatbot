import React, { Component } from 'react'; //Biblioteca do React para criação de components em web
import './App.css'; //Arquivo responsável pelo visual do chat 
import Chatbot from './components/Chatbot'; //Importa o componente Chatbot
import store from './store' //Importa back-end store
import { Provider } from 'react-redux'; //Importa o componente Provider da biblioteca react-redux
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="conteudo">
          <Chatbot/>
        </div>
      </Provider>
    );
  }
}
export default App;
