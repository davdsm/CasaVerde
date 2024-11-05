
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

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

    const intl = useIntl();

    return (
        <Link className="office-card" to={link} data-aos="fade-up" data-aos-duration="2000" >
            <div className="office-card-background" style={{ backgroundImage: `url(${imageSrc})` }}></div>
            <div className="card-inner-border">
                {/* <span className="card-label">
                    {label === SpaceType.MEETING_ROOM && intl.formatMessage({ id: "homepage.intro.products.meeting-room" })}
                    {label === SpaceType.RECEPTION && intl.formatMessage({ id: "homepage.intro.products.reception" })}
                    {label === SpaceType.STORE && intl.formatMessage({ id: "homepage.intro.products.store" })}
                    {label === SpaceType.OFFICE && intl.formatMessage({ id: "homepage.intro.products.office" })}
                </span> */}
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
      </Link>
    )
  }
  
  export default OfficeCard;
  