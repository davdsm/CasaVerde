let login = <boolean>false;
let env = {
  api: {
    key: "d41d8cd98f00b204e9800998ecf8427e",
    header: "davdsmKey",
    address: "https://backend.davdsm.pt",
    email: "https://mailer.davdsm.pt",
  },
  pocketBase: {
    username: "joanigrave",
    password: "PocketBase2k23_!!",
  },
};

const myHeaders = new Headers();
myHeaders.append(env.api.header, env.api.key);
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

export const sendEmail = async (
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<number> => {
  const urlencoded = new URLSearchParams();
  urlencoded.append("name", name);
  urlencoded.append("email", email);
  urlencoded.append("subject", subject);
  urlencoded.append("message", message);

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  return fetch(`${env.api.email}/send`, requestOptions)
    .then((response) => response.text())
    .then(() => 200)
    .catch(() => 403);
};
