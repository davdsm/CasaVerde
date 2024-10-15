import React from "react";
import { useIntl } from "react-intl";

import casaVerdeProps from "./casaVerdeProps";

const CasaVerdePropsSection: React.FunctionComponent = () => {

  const intl = useIntl();

  return (
    <div className="props-section">
      {casaVerdeProps.map(({ title, description, icon: Icon }) =>
        <div className="prop-card" key={title} data-aos="fade-up" data-aos-duration="1500" >
          <div className="icon">
            <Icon />
          </div>
          <div className="title-and-description">
            <span className="title">
              { intl.formatMessage({ id: title }) }
            </span>
            <span className="description">
              { intl.formatMessage({ id: description }) }
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default CasaVerdePropsSection;
