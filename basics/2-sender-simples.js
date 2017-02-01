var amqp = require("amqplib");

amqp.connect('amqp://rabbitmq:rabbitmq@0.0.0.0')
  .then(function (conn) {
    console.log("Conectado!")
    return conn.createChannel();
  }).then(function (ch) {
    console.log("Canal criado!");

    var msg = '{"to": "msfidelis01@gmail.com", "body": "Olá!"}';
    ch.assertQueue('email', {durable: false});
    ch.sendToQueue('email', Buffer(msg));
    
    console.log("Mensagem enviada!");
  })
