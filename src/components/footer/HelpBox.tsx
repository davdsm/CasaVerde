import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TranslationsHelper from "../../utils/TranslationsHelper";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const HelpBox: React.FunctionComponent = () => {

  const navigate = useNavigate();

  return (
    <div className="contacts-box" data-aos="fade-down" data-delay="200" data-aos-duration="2000">
        <div className="left-column">
            <span className="title">
              {TranslationsHelper.all.footer.help.title}
            </span>
            <span className="description">
              {TranslationsHelper.all.footer.help.description}
            </span>
        </div>
        <div className="right-column" >
          <div className="bg-circle"></div>
          <button onClick={() => navigate("/contact")}>
            {TranslationsHelper.all.footer.help.button}
            <FontAwesomeIcon icon={faArrowRight} fontSize={"15px"} />
          </button>
        </div>
    </div>
  )
}

export default HelpBox;
