
import { useNavigate } from "react-router-dom";
import Area from "../../assets/homepage/area.svg?react";
import TranslationsHelper from "../../utils/TranslationsHelper";

import "../../styles/components/OfficeCard.scss";

export enum SpaceType {
    OFFICE = "office",
    MEETING_ROOM = "meeting-room",
    STORE = "store",
}

interface IOfficeCard {
    imageSrc: string;
    label: SpaceType;
    area: number;
    name: string;
    link: string;
}

const OfficeCard: React.FunctionComponent<IOfficeCard> = ({ imageSrc, label, area, name, link }: IOfficeCard) => {

    const navigate = useNavigate();

    return (
      <div className="office-card">
        <img src={imageSrc} alt={name} onLoad={(image) => {
            if (image.currentTarget.clientHeight > image.currentTarget.clientWidth) {
                image.currentTarget.className = "vertical-img";
            }
            else {
                image.currentTarget.className = "horizontal-img";
            }
        }} />
        <div className="card-inner-border">
            <span className="card-label">
                {label === SpaceType.MEETING_ROOM && TranslationsHelper.all.homepage.intro.products["meeting-room"]}
                {label === SpaceType.STORE && TranslationsHelper.all.homepage.intro.products.store}
                {label === SpaceType.OFFICE && TranslationsHelper.all.homepage.intro.products.office}
            </span>
            <div className="card-info">
                <span className="card-info-area">
                    <Area />
                    {area}m&#178;
                </span>
                <button className="card-info-name" onClick={() => navigate(link)}>
                    {name}
                </button>
                <hr />
            </div>
        </div>
      </div>
    )
  }
  
  export default OfficeCard;
  