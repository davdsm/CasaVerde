
import { useIntl } from "react-intl";
import "../../styles/components/Description.scss";

interface IDescription {
    text: string;
}

const Description: React.FunctionComponent<IDescription> = ({ text }: IDescription) => {

  const intl = useIntl();

  return (
    <span className="description">
      {intl.formatMessage({ id: text })}
    </span>
  )
}

export default Description;
