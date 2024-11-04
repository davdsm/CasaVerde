import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

import "../../styles/components/SectionNavButton.scss";

interface ISectionNavButton {
  text: string;
  link?: string;
  onClick?: () => void;
}

const SectionNavButton: React.FunctionComponent<ISectionNavButton> = ({ text, link, onClick }: ISectionNavButton) => {

  const intl = useIntl();

  return (
    <React.Fragment>
      { link ?
        <Link className="section-nav-button" to={link} onClick={onClick} >
          <div className="link-arrow">
            <FontAwesomeIcon icon={faChevronRight} fontSize={"15px"} className="dark-green-60" />
            <FontAwesomeIcon icon={faChevronRight} fontSize={"15px"} className="dark-green" />
          </div>
          <div className="link-name">
            {intl.formatMessage({ id: text })}
          </div>
        </Link> :
        <button className="section-nav-button" onClick={onClick}>
          <div className="link-arrow">
            <FontAwesomeIcon icon={faChevronRight} fontSize={"15px"} className="dark-green-60" />
            <FontAwesomeIcon icon={faChevronRight} fontSize={"15px"} className="dark-green" />
          </div>
          <div className="link-name">
            {intl.formatMessage({ id: text })}
          </div>
        </button>
      }
    </React.Fragment>
  )
}

export default SectionNavButton;
