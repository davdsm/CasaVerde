import { ContactType } from "./Contact";

const PHONE_NUMBER: string = import.meta.env.VITE_PHONE_NUMBER;
const EMAIL: string = import.meta.env.VITE_EMAIL;
const ADDRESS: string = import.meta.env.VITE_ADDRESS;

const contactsInfo = [
    {
        type: ContactType.TELEFONE,
        name: "contacts.phone",
        value: PHONE_NUMBER,
    },
    {
        type: ContactType.EMAIL,
        name: "contacts.email",
        value: EMAIL,
    },
    {
        type: ContactType.MORADA,
        name: "contacts.adress",
        value: ADDRESS,
    }
];

export default contactsInfo;