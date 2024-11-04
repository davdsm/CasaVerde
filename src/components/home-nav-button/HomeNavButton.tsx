
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, IconDefinition } from "@fortawesome/free-solid-svg-icons";

import "../../styles/components/HomeNavButton.scss";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

interface IHomeNavButton {
  icon: IconDefinition;
  text: string;
  link: string;
}

const HomeNavButton: React.FunctionComponent<IHomeNavButton> = ({ icon, text, link }: IHomeNavButton) => {

  const intl = useIntl();

  return (
    <Link className="link" to={link} >
        <div className="link-name">
            <span className="link-icon" ><FontAwesomeIcon icon={icon} fontSize={"11px"} /></span>
            {intl.formatMessage({ id: text })}
        </div>
        <div className="link-arrow">
            <FontAwesomeIcon icon={faChevronRight} fontSize={"15px"} className="dark-green-60" />
            <FontAwesomeIcon icon={faChevronRight} fontSize={"15px"} className="dark-green" />
        </div>
    </Link>
  )
}

export default HomeNavButton;
