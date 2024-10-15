import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";

const HelpBox: React.FunctionComponent = () => {

  const navigate = useNavigate();
  const intl = useIntl();

  return (
    <div className="contacts-box" data-aos="fade-up" data-delay="200" data-aos-duration="2000">
        <div className="left-column">
            <span className="title">
              {intl.formatMessage({ id: "footer.help.title" })}
            </span>
            <span className="description">
              {intl.formatMessage({ id: "footer.help.description" })}
            </span>
        </div>
        <div className="right-column" >
          <div className="bg-circle"></div>
          <button onClick={() => {
            if (location.pathname !== "/contacts") {
              navigate("/contacts");
            }
            else { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }
            }}
          >
            {intl.formatMessage({ id: "footer.help.button" })}
            <FontAwesomeIcon icon={faArrowRight} fontSize={"15px"} />
          </button>
        </div>
    </div>
  )
}

export default HelpBox;
