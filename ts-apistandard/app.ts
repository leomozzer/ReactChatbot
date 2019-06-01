import * as express from "express"
import * as bodyParser from "body-parser";
import * as five from 'johnny-five'
//import as três bibliotecas necessárias para construção do server
//npm run compile para compilar o projeto
//npm start para inicia-lo



class App { //Definicao da classe App
  public app: express.Application;
  private bodyParser;
  public board: any;
  public led_banheiro: any;
  public led_sala: any;
  public led_cozinha: any;
  public led_garagem: any;
  public led_quarto: any;
  public status: boolean = true;
  //Declarado os tipos de variáveis, e os valores que irão receber;


  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
    this.Arduino();
    //Funções que são executadas ao rodar o server;
  }

  middleware() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  Arduino() {
    //this.board = new five.Board({port : "COM5"});
    this.board = new five.Board();
    //variável board recebe o valor de board que está dentro de five
    this.board.on("ready", function() {
      //se board estiver conectada então executa uma função
      //essa função atribui a variável led_sala que está conectado ao pino 13 
      //ainda é declarado o tipo de componente que é conectado a este pino
      this.led_banheiro = new five.Led(13);
      this.led_sala = new five.Led(12);
      this.led_cozinha = new five.Led(11);
      this.led_garagem = new five.Led(10);
      this.led_quarto = new five.Led(9);
    });
  }

  routes() {
    //função de rotas
    this.app.route("/banheiro").get((req, res) => {
      //uma rota deste server é sala que espera dois parâmetros, requisião e resposta
      let estado = req.query.turn;
      //declarado a variável chamada de estado que espera uma requisão no parâmetro ?turn
      
      if (this.board.isReady) {
        //se a board estiver pronta então
        if (estado == "on") {
          // se acessar a url https://localhost:PORT/sala?turn=on
          this.board.led_banheiro.on();
          //então a variável led_sala é acionado
        } else {
          this.board.led_banheiro.off();
          //para os demais valores recebidos em ?turn, o led irá receber o valor desligado
        }
      }
      res.send({ result: estado });
      //mostra no navegador o atual estado o led
    });
    this.app.route("/sala").get((req, res) => {
      let _model = req.query.turn;
      if (this.board.isReady) {
        if (_model == "on") {
          this.board.led_sala.on();
        } else {
          this.board.led_sala.off();
        }
      }
      res.send({ result: _model });
    });
    this.app.route("/cozinha").get((req, res) => {
      let _model = req.query.turn;
      if (this.board.isReady) {
        if (_model == "on") {
          this.board.led_cozinha.on();
        } else {
          this.board.led_cozinha.off();
        }
      }
      res.send({ result: _model });
    });
    this.app.route("/garagem").get((req, res) => {
      let _model = req.query.turn;
      if (this.board.isReady) {
        if (_model == "on") {
          this.board.led_garagem.on();
        } else {
          this.board.led_garagem.off();
        }
      }
      res.send({ result: _model });
    });
    this.app.route("/quarto").get((req, res) => {
      let _model = req.query.turn;
      if (this.board.isReady) {
        if (_model == "on") {
          this.board.led_quarto.on();
        } else {
          this.board.led_quarto.off();
        }
      }
      res.send({ result: _model });
    });
    this.app.route("/").get((req, res) => {
      //caminho genérico para quando o usuário acessar o server em https://localhost:PORT
      res.send({ result: this.status });
    });
  }
}

export default new App();
//exporta a class App para que outros arquivos possam acessar as funções e variáveis declaradas
