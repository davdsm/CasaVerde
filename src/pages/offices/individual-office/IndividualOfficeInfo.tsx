import { useIntl } from "react-intl";
import Area from "../../../assets/homepage/area.svg?react";

interface IIndividualOfficeInfo {
  area: number,
  name: string,
  number?: number,
}

const IndividualOfficeInfo: React.FunctionComponent<IIndividualOfficeInfo> = ({
  area, name, number
}: IIndividualOfficeInfo) => {

  const intl = useIntl();

  return (
    <div className="individual-office-info">
      <span className="area" data-aos="fade-up" data-aos-duration="1500">
        <Area />
        {area}m&#178;
      </span>
      <span className="name" data-aos="fade-up" data-aos-duration="1500">
        Casa Verde -
        <span style={{ textWrap: "nowrap" }} >
          {intl.formatMessage({ id: name })} { number ? number : "" }
        </span>
      </span>
      <span className="price" data-aos="fade-up" data-aos-duration="1500" >
        {intl.formatMessage({ id: "offices.price" })}
      </span>
    </div>
  )
}

export default IndividualOfficeInfo;
