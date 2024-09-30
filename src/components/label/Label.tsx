
import "../../styles/components/Label.scss";

interface ILabel {
    text: string;
}

const Label: React.FunctionComponent<ILabel> = ({ text }: ILabel) => {

  return (
    <div className="label" >
      { text }
    </div>
  )
}

export default Label;
