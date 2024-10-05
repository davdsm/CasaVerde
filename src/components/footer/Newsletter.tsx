import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TranslationsHelper from "../../utils/TranslationsHelper";
import { faPaperPlane, faSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { useReducer } from "react";
import NewsletterFormReducer, { NewsletterFormUpdateType } from "./NewsletterFormReducer";
import { subscribeNewsletter } from "../../services/services";

const Newsletter: React.FunctionComponent = () => {

  const [newsletterFormState, dispatchNewsletterFormUpdate] = useReducer(NewsletterFormReducer, {
    email: "",
    invalidEmail: false,
    agreement: false,
    enableSumbit: false,
  });

  return (
    <div className="newsletter-input-and-checkbox" data-aos="fade-right" data-delay="200" data-aos-duration="2000" >
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
                disabled={!newsletterFormState.enableSumbit}
                onClick={() => subscribeNewsletter(newsletterFormState.email)}
            >
            <FontAwesomeIcon icon={faPaperPlane} fontSize={"15px"} />
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
