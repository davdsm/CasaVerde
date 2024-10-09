const EMAIL: string = import.meta.env.VITE_EMAIL;

export const subscribeNewsletter = (email: string) => {
  console.log("");
  console.log("Nova subscrição de Newsletter", new Date());

  fetch(
    "https://api.davdsm.pt/sendMail", 
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "davdsmKey": 'd41d8cd98f00b204e9800998ecf8427e'
      },
      body: JSON.stringify({
        sender: "🏠Casa Verde",
        receiver: {
          email: EMAIL,
          name: "Casa Verde"
        },
        subject: "🔔 Subscrição Newsletter",
        message: `<h3>Olá!</h3><p>Foi efetuada uma nova subscrição à newsletter:</p><p><b>Email: </b>${email}</p><br><p>Casa verde</p>`
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

export const submitContactForm = ({
  name, email, contact, subject, message
}: {
  name: string,
  email: string,
  contact: string,
  subject: string,
  message: string,
}) => {
  console.log("");
  console.log("Pedido de contacto", new Date());

  fetch(
    "https://api.davdsm.pt/sendMail", 
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "davdsmKey": 'd41d8cd98f00b204e9800998ecf8427e'
      },
      body: JSON.stringify({
        sender: "🏠 Casa Verde",
        receiver: {
          email: EMAIL,
          name: "Administrador"
        },
        subject: `🔔 Nova Mensagem: ${subject}`,
        message: `<h3>Olá!</h3><p>Foi enviada uma nova mensagem:</p><p><b>Name: </b>${name}</p><p><b>Email: </b>${email}</p><p><b>Contacto: </b>${contact}</p><p><b>Message: </b>${message}</p><br><p>Casa verde</p>`
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
