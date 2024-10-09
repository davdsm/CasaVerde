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

const ContactsFormReducer = (state: ContactsFormState, action: ContactsFormActionType) => {
    switch (action.type) {

        case ContactsFormUpdateType.UPDATE_NAME:
            {
                return {
                    ...state,
                    name: action.payload.name || "",
                    invalidName: action.payload.name?.length === 0,
                    enableSumbit:
                        !(action.payload.name?.length === 0) && !state.invalidEmail && !state.invalidSubject && !state.invalidMessage,
                }
            };

        case ContactsFormUpdateType.UPDATE_EMAIL:
            {
                return {
                    ...state,
                    email: action.payload.email || "",
                    invalidEmail: action.payload.email?.length === 0,
                    enableSumbit:
                        !(action.payload.email?.length === 0) && !state.invalidName && !state.invalidSubject && !state.invalidMessage,
                }
            };

        case ContactsFormUpdateType.UPDATE_CONTACT:
            {
                return {
                    ...state,
                    contact: action.payload.contact || "",
                    invalidContact: action.payload.contact?.length === 0,
                    enableSumbit:
                        !(action.payload.contact?.length === 0) && !state.invalidName && !state.invalidEmail && !state.invalidMessage,

                }
            };

        case ContactsFormUpdateType.UPDATE_SUBJECT:
            {
                return {
                    ...state,
                    subject: action.payload.subject || "",
                    invalidSubject: action.payload.subject?.length === 0,
                    enableSumbit:
                        !(action.payload.subject?.length === 0) && !state.invalidName && !state.invalidEmail && !state.invalidMessage,

                }
            };

        case ContactsFormUpdateType.UPDATE_MESSAGE:
            {
                return {
                    ...state,
                    message: action.payload.message || "",
                    invalidMessage: action.payload.message?.length === 0,
                    enableSumbit:
                        !(action.payload.message?.length === 0) && !state.invalidName && !state.invalidSubject && !state.invalidEmail,

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