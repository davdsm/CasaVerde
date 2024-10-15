
import { useIntl } from "react-intl";
import "../../styles/components/Label.scss";

interface ILabel {
    text: string;
}

const Label: React.FunctionComponent<ILabel> = ({ text }: ILabel) => {

  const intl = useIntl();

  return (
    <div className="label" data-aos="fade-up" data-aos-duration="1500">
      {intl.formatMessage({ id: text })}
    </div>
  )
}

export default Label;
