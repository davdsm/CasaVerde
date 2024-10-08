export enum NewsletterFormUpdateType {
    UPDATE_EMAIL = 'update-email',
    UPDATE_AGREEMENT = 'update-agreement',
    RESET = 'reset'
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

const NewsletterFormReducer  = (state: NewsletterFormState, action: NewsletterFormActionType) => {
    switch (action.type) {

        case NewsletterFormUpdateType.UPDATE_EMAIL: 
            { 
                return {
                    ...state,
                    email: action.payload.email || "",
                    invalidEmail: action.payload.email?.length === 0,
                    enableSumbit: !(action.payload.email?.length === 0) && state.agreement,
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
        
        case NewsletterFormUpdateType.RESET:
            { 
                return {
                    ...state,
                    email: "",
                    invalidEmail: false,
                    agreement: false,
                    enableSumbit: false,
                }
            };
        }
};

export default NewsletterFormReducer;