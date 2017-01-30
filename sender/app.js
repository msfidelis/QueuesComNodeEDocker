#!/usr/bin/env node

var amqp = require('amqplib');

amqp.connect('amqp://rabbitmq:rabbitmq@0.0.0.0')
.then(function(conn) {
  return conn.createChannel();
})
.then(function(ch) {
  var msg = '{"to" : "destinatario@teste.com", "body": "Olá!"}';
  ch.assertQueue('email', {durable: false}); //Cria uma Queue Caso não exista
  ch.sendToQueue('email', Buffer(msg)); //Envia uma mensagem para a Queue
  console.log("Mensagem enviada");
  return;
});
