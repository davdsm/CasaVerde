import { useIntl } from "react-intl";
// import Area from "../../../assets/homepage/area.svg?react";
import { useNavigate } from "react-router-dom";

interface IIndividualOfficeInfo {
  name: string,
  number?: number,
}

const IndividualOfficeInfo: React.FunctionComponent<IIndividualOfficeInfo> = ({
  name, number
}: IIndividualOfficeInfo) => {

  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <div className="individual-office-info">
      {/* <span className="area" data-aos="fade-up" data-aos-duration="1500">
        <Area />
        {area}m&#178;
      </span> */}
      <span className="name" data-aos="fade-up" data-aos-duration="1500">
        Casa Verde -
        <span style={{ textWrap: "nowrap" }} >
          {intl.formatMessage({ id: name })} { number ? number : "" }
        </span>
      </span>
      <button className="price" data-aos="fade-up" data-aos-duration="1500" onClick={() => navigate("/contacts")} >
        {intl.formatMessage({ id: "offices.price" })}
      </button>
    </div>
  )
}

export default IndividualOfficeInfo;
