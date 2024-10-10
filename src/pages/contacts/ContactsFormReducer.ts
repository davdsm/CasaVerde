export enum ContactsFormUpdateType {
    UPDATE_NAME = 'update-name',
    UPDATE_EMAIL = 'update-email',
    UPDATE_CONTACT = 'update-contact',
    UPDATE_SUBJECT = 'update-subject',
    UPDATE_MESSAGE = 'update-message',
    RESET = 'reset',
};

interface ContactsFormState {
    name: string,
    invalidName: boolean,
    email: string,
    invalidEmail: boolean,
    contact: string,
    invalidContact: boolean,
    subject: string,
    invalidSubject: boolean,
    message: string,
    invalidMessage: boolean,
    enableSumbit: boolean,
};

type ContactsFormActionType = {
    type: ContactsFormUpdateType,
    payload: {
        name?: string,
        email?: string,
        contact?: string,
        subject?: string,
        message?: string,
    }
};

const isSubmitEnabled = (
    state: ContactsFormState,
    newValue: string,
    type: "name" | "email" | "contact" | "subject" | "message",
) => {
    const validName = !(type === "name" ? newValue.length === 0 : state.name.length === 0);
    const validEmail = !(type === "email" ? newValue.length === 0 : state.email.length === 0);
    const validContact = !(type === "contact" ? newValue.length === 0 : state.contact.length === 0);
    const validSubject = !(type === "subject" ? newValue.length === 0 : state.subject.length === 0);
    const validMessage = !(type === "message" ? newValue.length === 0 : state.message.length === 0);

    return validName && validEmail && validContact && validSubject && validMessage
}

const ContactsFormReducer = (state: ContactsFormState, action: ContactsFormActionType) => {
    switch (action.type) {

        case ContactsFormUpdateType.UPDATE_NAME:
            {
                return {
                    ...state,
                    name: action.payload.name || "",
                    invalidName: action.payload.name?.length === 0,
                    enableSumbit: action.payload.name ? isSubmitEnabled(state, action.payload.name, "name") : false,
                }
            };

        case ContactsFormUpdateType.UPDATE_EMAIL:
            {
                return {
                    ...state,
                    email: action.payload.email || "",
                    invalidEmail: action.payload.email?.length === 0,
                    enableSumbit: action.payload.email ? isSubmitEnabled(state, action.payload.email, "email") : false,
                }
            };

        case ContactsFormUpdateType.UPDATE_CONTACT:
            {
                return {
                    ...state,
                    contact: action.payload.contact || "",
                    invalidContact: action.payload.contact?.length === 0,
                    enableSumbit: action.payload.contact ? isSubmitEnabled(state, action.payload.contact, "contact") : false,

                }
            };

        case ContactsFormUpdateType.UPDATE_SUBJECT:
            {
                return {
                    ...state,
                    subject: action.payload.subject || "",
                    invalidSubject: action.payload.subject?.length === 0,
                    enableSumbit: action.payload.subject ? isSubmitEnabled(state, action.payload.subject, "subject") : false,

                }
            };

        case ContactsFormUpdateType.UPDATE_MESSAGE:
            {
                return {
                    ...state,
                    message: action.payload.message || "",
                    invalidMessage: action.payload.message?.length === 0,
                    enableSumbit: action.payload.message ? isSubmitEnabled(state, action.payload.message, "message") : false,

                }
            };

        case ContactsFormUpdateType.RESET:
            {
                return {
                    ...state,
                    name: "",
                    invalidName: false,
                    email: "",
                    invalidEmail: false,
                    contact: "",
                    invalidContact: false,
                    subject: "",
                    invalidSubject: false,
                    message: "",
                    invalidMessage: false,
                    enableSumbit: false,
                }
            };
    }
};

export default ContactsFormReducer;