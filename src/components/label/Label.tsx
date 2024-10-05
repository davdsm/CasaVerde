
import "../../styles/components/Label.scss";

interface ILabel {
    text: string;
}

const Label: React.FunctionComponent<ILabel> = ({ text }: ILabel) => {

  return (
    <div className="label" data-aos="fade-right" data-aos-duration="1500">
      { text }
    </div>
  )
}

export default Label;
