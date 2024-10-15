
import React from "react";

import "../../styles/components/Title.scss";
import { useIntl } from "react-intl";

interface ITitle {
    text: string;
}

const Title: React.FunctionComponent<ITitle> = ({ text }: ITitle) => {

  const intl = useIntl();

  return (
    <span className="title" data-aos="fade-up" data-aos-duration="1500" >
      {intl.formatMessage({ id: text })}
    </span>
  )
}

export default Title;
