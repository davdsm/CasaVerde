import TranslationsHelper from "../../utils/TranslationsHelper";
import { ContactType } from "./Contact";

const PHONE_NUMBER: string = import.meta.env.VITE_PHONE_NUMBER;
const EMAIL: string = import.meta.env.VITE_EMAIL;
const ADDRESS: string = import.meta.env.VITE_ADDRESS;

const contactsInfo = [
    {
        type: ContactType.TELEFONE,
        name: TranslationsHelper.all.contacts.phone,
        value: PHONE_NUMBER,
    },
    {
        type: ContactType.EMAIL,
        name: TranslationsHelper.all.contacts.email,
        value: EMAIL,
    },
    {
        type: ContactType.MORADA,
        name: TranslationsHelper.all.contacts.adress,
        value: ADDRESS,
    }
];

export default contactsInfo;