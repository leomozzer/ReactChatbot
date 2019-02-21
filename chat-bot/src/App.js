import React, { Component } from 'react';


import './App.css';


import Footer from './componets/Footer';

import Chatbot from './componets/Chatbot';



import store from './store'
import { Provider } from 'react-redux';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="conteudo">
          <Chatbot/>

          <Footer/>
        </div>
      </Provider>
    );
  }
}

export default App;
