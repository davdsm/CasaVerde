import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import GallerySection from "../../../components/gallery-section/GallerySection";
import OurSpacesSection from "../../../components/our-spaces-section/OurSpacesSection";
import IndividualOfficeInfo from "./IndividualOfficeInfo";
import OfficeSlider from "./OfficeSlider";
import { Helmet } from "react-helmet-async";

import offices from "./offices";

import "../../../styles/pages/IndividualOffice.scss";

const IndividualOffice: React.FunctionComponent = () => {

  const { id } = useParams();
  const location = useLocation();

  const [office, setOffice] = useState(offices.loja);

  useEffect(() => {
    if ( id  === "store" ) setOffice(() => offices.loja)
    else if ( id  === "meeting-room" ) setOffice(() => offices.meetingRoom)
    else if ( id  === "office1" ) setOffice(() => offices.gabinete1)
    else if ( id  === "office2" ) setOffice(() => offices.gabinete2)
    else if ( id  === "office3" ) setOffice(() => offices.gabinete3)
    else if ( id  === "office4" ) setOffice(() => offices.gabinete4)
    else if ( id  === "office5" ) setOffice(() => offices.gabinete5)
    else if ( id  === "office6" ) setOffice(() => offices.gabinete6)
    else if ( id  === "office7" ) setOffice(() => offices.gabinete7)
    else if ( id  === "office8" ) setOffice(() => offices.gabinete8)
    else if ( id  === "office9" ) setOffice(() => offices.gabinete9)
  }, [location.pathname]);

  return (
    <React.Fragment>
      <Helmet>
        <title>Casa Verde | { office.name }</title>
      </Helmet>
      <div className="individual-office container">
        <OfficeSlider images={office.images} />
        <GallerySection hideHeader={true} exclude={office.id} />
        <IndividualOfficeInfo {...office} />
        <OurSpacesSection exclude={office.id} />
      </div>
    </React.Fragment>
  )
}

export default IndividualOffice;
