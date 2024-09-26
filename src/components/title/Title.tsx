
import React from "react";

import "../../styles/components/Title.scss";

interface ITitle {
    text: string;
}

const Title: React.FunctionComponent<ITitle> = ({ text }: ITitle) => {

  return (
    <span className="title">
      { text }
    </span>
  )
}

export default Title;
