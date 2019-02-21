##Control an Arduino with Watson Assistant

Dependencies:
    yarn
    nodejs
    arduino

Conect your arduino in the USB and go to ts-apistandart to use the follow comands:
    npm i
    npm run compile
    npm start

    You can check if is running using http://localhost:3500/central?turn=on

Open a new terminal and go to /chat-bot and use
    npm i
    yarn start


I made a deploy in firebase functions that you can all acsess. In /Assistant is the json that you can use as exemple to IBM Watson Assistant Skills. You can create more entities to make your Arduino and your Bot more advanced

In /functions you can see the index.js that i used to call the Watson Assistant API.