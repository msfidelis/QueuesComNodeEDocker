var amqp = require("amqplib");

/**
 * Exemplo de uma conexão cimples com servidor do Rabbitmq
 * @type {[type]}
 */
amqp.connect('amqp://rabbitmq:rabbitmq@0.0.0.0')
  .then(function (conn) {
    console.log("Conectado!")
    return conn.createChannel();
  }).then(function (ch) {
    console.log("Canal criado!");
  })
