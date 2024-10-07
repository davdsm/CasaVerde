import Label from "../../components/label/Label";
import Title from "../../components/title/Title";
import OfficeCard from "../../components/office-card/OfficeCard";
import spaces from "../../components/our-spaces-section/spaces";
import TranslationsHelper from "../../utils/TranslationsHelper";
import React from "react";
import { Helmet } from "react-helmet-async";

import "../../styles/pages/Offices.scss";

const Offices: React.FunctionComponent = () => {

  return (
    <React.Fragment>
      <Helmet>
        <title>Casa Verde | Escritórios</title>
      </Helmet>
      <div className="offices container">
        <div className="label-and-title">
          <Label text={TranslationsHelper.all.offices.label} />
          <Title text={TranslationsHelper.all.offices.title} />
        </div>
        <div className="offices-grid">
          {spaces.map((space) => 
            <OfficeCard key={space.name} {...space} />
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Offices;
