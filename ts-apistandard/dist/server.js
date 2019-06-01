"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
//importado app do arquivo app.ts
let port = '3500';
//declarado qual a porta em que o server irá rodar
app_1.default.app.listen(port, function () {
    //o aplicativo inicia um servidor e "escuta" a porta 3500
    console.log(`O server está rodando na porta ${port}`);
});
