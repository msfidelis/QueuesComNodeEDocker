#!/usr/bin/env node

var amqp = require('amqplib');
var random = require('randomstring');

//Aguarda o Rabbitmq subir
setTimeout(function() {
  amqp.connect('amqp://rabbitmq:rabbitmq@rabbitmq')
  .then(function(conn) {
    return conn.createChannel();
  })
  .then(function(ch) {
    ch.assertQueue('email', {durable: false}); //Cria uma Queue Caso não exista

    setInterval(function() {
      var msg = {};
      msg.to = "destinatario@teste.com";
      msg.body = random.generate(10);
      message = JSON.stringify(msg);

      //Envia uma mensagem para a Queue em forma de Buffer
      ch.sendToQueue('email', Buffer(message));
      console.log("Enviando mensagem: " + message);
    }, 500);
  });
}, 7000);
