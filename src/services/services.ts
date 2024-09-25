const sendEmail = (email: string) => {
  console.log("");
  console.log("Nova subscrição de Newsletter", new Date());

  fetch(
    "http://api.davdsm.pt/sendMail", 
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "davdsmKey": 'd41d8cd98f00b204e9800998ecf8427e'
      },
      body: JSON.stringify({
        sender: "Casa Verde",
        receiver: {
          email: "ana28.98@hotmail.com",
          name: "Ana"
        },
        subject: "Newsletter: nova subscrição",
        message: `<h3>Olá!</h3><p>O email seguinte acabou de subscrever a newsletter:</p><p>${email}</p><p>Casa verde</p>`
      })
    }
  ).then((response) => {
    console.log("✈️ Email Enviado? - ", response.body);
    console.log("---------------------------------------------------");
    console.log("");
  }).catch((response) => {
    console.log("✈️ Email Enviado? - ", response.body);
    console.log("---------------------------------------------------");
    console.log("");
  });
}

export default sendEmail;