
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import "../../styles/components/HomeNavButton.scss";

interface IHomeNavButton {
  icon: IconDefinition;
  text: string;
  link: string;
}

const HomeNavButton: React.FunctionComponent<IHomeNavButton> = ({ icon, text, link }: IHomeNavButton) => {

  const navigate = useNavigate();

  return (
    <button className="link" onClick={() => navigate(link)}>
        <div className="link-name">
            <span className="link-icon" ><FontAwesomeIcon icon={icon} fontSize={"11px"} /></span>
            { text }
        </div>
        <div className="link-arrow">
            <FontAwesomeIcon icon={faChevronRight} fontSize={"15px"} className="dark-green-60" />
            <FontAwesomeIcon icon={faChevronRight} fontSize={"15px"} className="dark-green" />
        </div>
    </button>
  )
}

export default HomeNavButton;
