
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import "../../styles/components/SectionNavButton.scss";

interface ISectionNavButton {
  text: string;
  link: string;
}

const SectionNavButton: React.FunctionComponent<ISectionNavButton> = ({ text, link }: ISectionNavButton) => {

  const navigate = useNavigate();

  return (
    <button className="section-nav-button" onClick={() => navigate(link)}>
        <div className="link-arrow">
          <FontAwesomeIcon icon={faChevronRight} fontSize={"15px"} className="dark-green-60" />
          <FontAwesomeIcon icon={faChevronRight} fontSize={"15px"} className="dark-green" />
        </div>
        <div className="link-name">
          { text }
        </div>
    </button>
  )
}

export default SectionNavButton;
