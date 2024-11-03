
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";

import "../../styles/components/OfficeCard.scss";

export enum SpaceType {
    OFFICE = "office",
    MEETING_ROOM = "meeting-room",
    STORE = "store",
    EXTERIOR = "exterior",
    DETAILS = "details",
    RECEPTION = "reception",
}

interface IOfficeCard {
    imageSrc: string;
    label: SpaceType;
    // area: number;
    number?: number;
    link: string;
}

const OfficeCard: React.FunctionComponent<IOfficeCard> = ({ imageSrc, label, number, link }: IOfficeCard) => {

    const navigate = useNavigate();
    const intl = useIntl();

    return (
        <button className="office-card" onClick={() => {
            if (location.pathname !== link) {
                navigate(link);
            }
            else { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }
        }} data-aos="fade-up" data-aos-duration="2000" >
            <div className="office-card-background" style={{ backgroundImage: `url(${imageSrc})` }}></div>
            <div className="card-inner-border">
                <span className="card-label">
                    {label === SpaceType.MEETING_ROOM && intl.formatMessage({ id: "homepage.intro.products.meeting-room" })}
                    {label === SpaceType.RECEPTION && intl.formatMessage({ id: "homepage.intro.products.reception" })}
                    {label === SpaceType.STORE && intl.formatMessage({ id: "homepage.intro.products.store" })}
                    {label === SpaceType.OFFICE && intl.formatMessage({ id: "homepage.intro.products.office" })}
                </span>
                <div className="card-info">
                    {/* <span className="card-info-area">
                        <Area />
                        {area}m&#178;
                    </span> */}
                    <span className="card-info-name">
                        {label === SpaceType.MEETING_ROOM && intl.formatMessage({ id: "homepage.intro.products.meeting-room" })}
                        {label === SpaceType.RECEPTION && intl.formatMessage({ id: "homepage.intro.products.reception" })}
                        {label === SpaceType.STORE && intl.formatMessage({ id: "homepage.intro.products.store" })}
                        {label === SpaceType.OFFICE && ( `${intl.formatMessage({ id: "homepage.intro.products.office" })} ${number ? number : ""}`)}
                    </span>
                    <hr />
                </div>
            </div>
      </button>
    )
  }
  
  export default OfficeCard;
  