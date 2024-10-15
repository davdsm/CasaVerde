import Label from "../../components/label/Label";
import Title from "../../components/title/Title";
import OfficeCard from "../../components/office-card/OfficeCard";
import spaces from "../../components/our-spaces-section/spaces";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";

import "../../styles/pages/Offices.scss";

const Offices: React.FunctionComponent = () => {

  const intl = useIntl();

  return (
    <React.Fragment>
      <Helmet>
        <title>Casa Verde | {intl.formatMessage({ id: "header.offices" })}</title>
      </Helmet>
      <div className="offices container">
        <div className="label-and-title">
          <Label text={"offices.label"} />
          <Title text={"offices.title"} />
        </div>
        <div className="offices-grid">
          {spaces.map((space) => 
            <OfficeCard key={space.imageSrc} {...space} />
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Offices;
