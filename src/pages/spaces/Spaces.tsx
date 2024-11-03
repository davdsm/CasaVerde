import Label from "../../components/label/Label";
import Title from "../../components/title/Title";
import OfficeCard from "../../components/office-card/OfficeCard";
import spaces from "../../components/our-spaces-section/spaces";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";

import "../../styles/pages/Offices.scss";

export enum SpacesType {
  ALL = "all",
  COMMON_SPACES = "common-spaces",
  OFFICES = "offices",
  COMMERCIAL_SPACE = "commercial-space"
}

interface ISpaces {
  spacesType: SpacesType,
}

const Spaces: React.FunctionComponent<ISpaces> = ({ spacesType }: ISpaces) => {

  const intl = useIntl();
  const [visibleSpaces, setVisibleSpaces] = useState<typeof spaces>(spaces);

  useEffect(() => {
    if ( spacesType === SpacesType.ALL ) {
      setVisibleSpaces(() => [...spaces]);
    }
    else {
      setVisibleSpaces(() => [...spaces.filter(({ spaceType }) => spaceType === spacesType)])
    }
  }, [spacesType]);
  
  return (
    <React.Fragment>
      <Helmet>
        <title>
          Casa Verde
          &nbsp;|&nbsp;
          { spacesType === SpacesType.ALL ? intl.formatMessage({ id: "header.spaces" }) : "" }
          { spacesType === SpacesType.COMMON_SPACES ? intl.formatMessage({ id: "header.spaces.common-spaces" }) : "" }
          { spacesType === SpacesType.OFFICES ? intl.formatMessage({ id: "header.spaces.offices" }) : "" }
          { spacesType === SpacesType.COMMERCIAL_SPACE ? intl.formatMessage({ id: "header.spaces.commercial-space" }) : "" }
        </title>
      </Helmet>
      <div className="offices container">
        <div className="label-and-title">
          <Label text={
            spacesType === SpacesType.COMMON_SPACES && "header.spaces.common-spaces" ||
            spacesType === SpacesType.OFFICES && "header.spaces.offices" ||
            spacesType === SpacesType.COMMERCIAL_SPACE && "header.spaces.commercial-space" || 
            "header.spaces"
          } />
          <Title text={"offices.title"} />
          { spacesType !== SpacesType.ALL &&
            <div className="description" data-aos="fade-up" data-aos-duration="1500">
              { spacesType === SpacesType.COMMON_SPACES ? intl.formatMessage({ id: "spaces.common-spaces-description" }) : "" }
              { spacesType === SpacesType.OFFICES ? intl.formatMessage({ id: "spaces.offices-description" }) : "" }
              { spacesType === SpacesType.COMMERCIAL_SPACE ? intl.formatMessage({ id: "spaces.commercial-space-description" }) : "" }
            </div>
          }
        </div>
        <div className="offices-grid">
          {visibleSpaces.map((space) => 
            <OfficeCard key={space.imageSrc} {...space} />
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Spaces;
