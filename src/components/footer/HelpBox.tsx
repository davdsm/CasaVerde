import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

const HelpBox: React.FunctionComponent = () => {

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
          <Link to={"/contacts"} >
            {intl.formatMessage({ id: "footer.help.button" })}
            <FontAwesomeIcon icon={faArrowRight} fontSize={"15px"} />
          </Link>
        </div>
    </div>
  )
}

export default HelpBox;
