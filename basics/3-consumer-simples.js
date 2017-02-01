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

  // Quantas mensagens o consumidor irá pegar por vez.  Sem isso, ele irá pegar todas
  ch.prefetch(1);
  ch.consume('email', function(msg) {
    console.log('E-mail para ser enviado: %s', msg.content.toString());
    // Retorna o ACK para o servidor. Está tudo ok, tira da fila!
    ch.ack(msg);
  });
});
