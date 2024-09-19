
import "../../styles/components/Description.scss";

interface IDescription {
    text: string;
}

const Description: React.FunctionComponent<IDescription> = ({ text }: IDescription) => {

  return (
    <span className="description">
      { text }
    </span>
  )
}

export default Description;
