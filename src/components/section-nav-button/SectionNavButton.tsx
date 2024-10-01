
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import "../../styles/components/SectionNavButton.scss";

interface ISectionNavButton {
  text: string;
  link?: string;
  onClick?: () => void;
}

const SectionNavButton: React.FunctionComponent<ISectionNavButton> = ({ text, link, onClick }: ISectionNavButton) => {

  const navigate = useNavigate();

  const onButtonClick = () => {
    if ( link ) { navigate(link) }
    if ( onClick ) { onClick() } 
  };

  return (
    <button className="section-nav-button" onClick={onButtonClick}>
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
