<h1>Control an Arduino with Watson Assistant</h1>

Dependencies: 
    
    yarn 
    nodejs 
    Arduino

Connect your Arduino in the USB and go to ts-apistandart to use the following commands:

    npm i
    npm run compile
    npm start

    You can check if is running using http://localhost:3500/central?turn=on

Open a new terminal and go to /chat-bot and use:

    npm i
    yarn start

I made a deploy in firebase functions that you can all access. In /Assistant is the json that you can use as an example to IBM Watson Assistant Skills. You can create more entities to make your Arduino and your Bot more advanced

In /functions you can see the index.js that I used to call the Watson Assistant API.
