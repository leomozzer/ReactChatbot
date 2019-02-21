"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const five = require("johnny-five");
//npm run compile para compilar o projeto
//npm start para inicia-lo
class App {
    constructor() {
        this.status = true;
        this.app = express();
        this.middleware();
        this.routes();
        this.central();
    }
    middleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    central() {
        this.board = new five.Board();
        this.board.on("ready", function () {
            this.led_central = new five.Led(13);
        });
    }
    routes() {
        this.app.route("/central").get((req, res) => {
            let _model = req.query.turn;
            if (this.board.isReady) {
                if (_model == "on") {
                    this.board.led_central.on();
                }
                else {
                    this.board.led_central.off();
                }
            }
            res.send({ result: _model });
        });
        this.app.route("/").get((req, res) => {
            res.send({ result: this.status });
        });
    }
}
exports.default = new App();
