import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
// import Area from "../../../assets/homepage/area.svg?react";

interface IIndividualOfficeInfo {
  name: string,
  number?: number,
}

const IndividualOfficeInfo: React.FunctionComponent<IIndividualOfficeInfo> = ({
  name, number
}: IIndividualOfficeInfo) => {

  const intl = useIntl();

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
      <Link className="price" data-aos="fade-up" data-aos-duration="1500" to={"/contacts"} >
        {intl.formatMessage({ id: "offices.price" })}
      </Link>
    </div>
  )
}

export default IndividualOfficeInfo;
