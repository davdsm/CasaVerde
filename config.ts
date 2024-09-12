function sendEmail(parents) {
  console.log("");
  console.log("⚡ SMS Sent - ", parents.length);
  console.log("⚡ Done for today - ", new Date());

  // send email noticing admin
  request({
    url: "http://api.davdsm.pt/sendMail",
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "davdsmKey": 'd41d8cd98f00b204e9800998ecf8427e'  // <--Very important!!!
    },
    body: JSON.stringify({
      sender: "⭐ StarDancers",
      receiver: {
        email: debug ? "samuel_david_8@hotmail.com" : "stardancers2017@gmail.com",
        name: "Admnistradora Ana"
      },
      subject: `✈️ (${parents.length}) SMS Enviados`,
      message: `<h3>Olá Ana</h3><p>Este mês sairam ${parents.length} mensagens, segue a lista de pais que receberam o aviso de não pagamento:<br/> ${parents.map(parent => `${parent} <br/>`)}</p>Contacto>    })
  }, function (error, response, body) {
    console.log("✈️ Email Enviado? - ", response.body);
    console.log("---------------------------------------------------");
    console.log("");
  });
}
