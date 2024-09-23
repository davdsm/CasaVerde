export enum NewsletterFormUpdateType {
    UPDATE_EMAIL = 'update-email',
    UPDATE_AGREEMENT = 'update-agreement',
    VALIDATE_FORM = 'validate-form',
};

interface NewsletterFormState {
    email: string,
    invalidEmail: boolean,
    agreement: boolean,
    enableSumbit: boolean,
};

type NewsletterFormActionType = {
    type: NewsletterFormUpdateType,
    payload: {
        email?: string
    }
};

const isEmailValid = (email: string) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
}

const NewsletterFormReducer  = (state: NewsletterFormState, action: NewsletterFormActionType) => {
    switch (action.type) {

        case NewsletterFormUpdateType.UPDATE_EMAIL: 
            { 
                return {
                    ...state,
                    email: action.payload.email || "",
                    enableSumbit: action.payload.email ? isEmailValid(action.payload.email) && state.agreement : false,
                }
            };

        case NewsletterFormUpdateType.UPDATE_AGREEMENT:
            { 
                return {
                    ...state,
                    agreement: !state.agreement,
                    enableSumbit: !state.agreement && !state.invalidEmail,
                }
            };

        case NewsletterFormUpdateType.VALIDATE_FORM:
            { 
                return {
                    ...state,
                    invalidEmail: !isEmailValid(state.email) || false,
                }
            };
        }
};

export default NewsletterFormReducer;