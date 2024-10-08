import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TranslationsHelper from "../../utils/TranslationsHelper";
import { faPaperPlane, faSquare, faCheck, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { useReducer, useState } from "react";
import NewsletterFormReducer, { NewsletterFormUpdateType } from "./NewsletterFormReducer";
import { subscribeNewsletter } from "../../services/services";

const Newsletter: React.FunctionComponent = () => {

  const [newsletterFormState, dispatchNewsletterFormUpdate] = useReducer(NewsletterFormReducer, {
    email: "",
    invalidEmail: false,
    agreement: false,
    enableSumbit: false,
  });

  const [submitButtonIcon, setSubmitButtonIcon] = useState<IconDefinition>(faPaperPlane);

  return (
    <div className="newsletter-input-and-checkbox" data-aos="fade-up" data-delay="200" data-aos-duration="2000" >
        <div className="newsletter">
            <input 
            className={`newsletter-input ${newsletterFormState.invalidEmail ? "invalid" : ""}`} 
            type="email" 
            placeholder={TranslationsHelper.all.footer.newsletter.placeholder}
            value={newsletterFormState.email}
            onChange={(event) => dispatchNewsletterFormUpdate({
                type: NewsletterFormUpdateType.UPDATE_EMAIL,
                payload: {
                email: event.target.value
                }
            })}
            />
            <button
                className={submitButtonIcon === faCheck ? "sent" : ""}
                disabled={!newsletterFormState.enableSumbit}
                onClick={() => {
                    subscribeNewsletter(newsletterFormState.email);
                    setSubmitButtonIcon(() => faCheck);

                    setTimeout(() => {
                        setSubmitButtonIcon(() => faPaperPlane);
                    }, 5000);

                    dispatchNewsletterFormUpdate({
                        type: NewsletterFormUpdateType.RESET,
                        payload: {}
                    })
                }}
            >
            <FontAwesomeIcon icon={submitButtonIcon} fontSize={"15px"} />
            </button>
        </div>
        <div className="checkbox-and-terms">
            <div className="checkbox">
            <input 
                type="checkbox"
                id="terms-and-conditions"
                onClick={() => dispatchNewsletterFormUpdate({
                type: NewsletterFormUpdateType.UPDATE_AGREEMENT,
                payload: {}
                })}
            />
            {
                newsletterFormState.agreement ?
                <FontAwesomeIcon className="checkbox-checked" icon={faSquareCheck} /> :
                <FontAwesomeIcon className="checkbox-non-checked" icon={faSquare} />
            }
            </div>
            <label htmlFor="terms-and-conditions">
            {TranslationsHelper.all.footer.newsletter.checkbox}
            </label>
        </div>
    </div>
)}

export default Newsletter;
