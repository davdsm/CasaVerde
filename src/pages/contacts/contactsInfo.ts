import TranslationsHelper from "../../utils/TranslationsHelper";
import { ContactType } from "./Contact";

const contactsInfo = [
    {
        type: ContactType.TELEFONE,
        name: TranslationsHelper.all.contacts.phone,
        value: "+351 962 342 739",
    },
    {
        type: ContactType.EMAIL,
        name: TranslationsHelper.all.contacts.email,
        value: "sgoncalves@vertende-calorosa.pt",
    },
    {
        type: ContactType.MORADA,
        name: TranslationsHelper.all.contacts.adress,
        value: "Rua Padre José Maria Felgueiras, 51 - Caldelas (Guimarães)",
    }
];

export default contactsInfo;