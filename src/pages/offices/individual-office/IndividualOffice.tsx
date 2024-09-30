import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import GallerySection from "../../../components/gallery-section/GallerySection";
import OurSpacesSection from "../../../components/our-spaces-section/OurSpacesSection";
import IndividualOfficeInfo from "./IndividualOfficeInfo";
import OfficeSlider from "./OfficeSlider";

import offices from "./offices";

import "../../../styles/pages/IndividualOffice.scss";

const IndividualOffice: React.FunctionComponent = () => {

  const { id } = useParams();
  const location = useLocation();

  const [office, setOffice] = useState(offices.loja);

  useEffect(() => {
    if ( id  === "loja" ) setOffice(() => offices.loja)
    else if ( id  === "sala-reunioes" ) setOffice(() => offices.meetingRoom)
    else if ( id  === "gabinete1" ) setOffice(() => offices.gabinete1)
    else if ( id  === "gabinete2" ) setOffice(() => offices.gabinete2)
    else if ( id  === "gabinete3" ) setOffice(() => offices.gabinete3)
    else if ( id  === "gabinete4" ) setOffice(() => offices.gabinete4)
    else if ( id  === "gabinete5" ) setOffice(() => offices.gabinete5)
    else if ( id  === "gabinete6" ) setOffice(() => offices.gabinete6)
    else if ( id  === "gabinete7" ) setOffice(() => offices.gabinete7)
    else if ( id  === "gabinete8" ) setOffice(() => offices.gabinete8)
    else if ( id  === "gabinete9" ) setOffice(() => offices.gabinete9)
  }, [location.pathname]);

  return (
    <div className="individual-office container">
      <OfficeSlider images={office.images} />
      <GallerySection hideHeader={true} exclude={office.id} />
      <IndividualOfficeInfo {...office} />
      <OurSpacesSection exclude={office.id} />
    </div>
  )
}

export default IndividualOffice;
