import Telefone from "../../assets/contacts/telefone.svg?react";
import Email from "../../assets/contacts/email.svg?react";
import Morada from "../../assets/contacts/morada.svg?react";
import { useIntl } from "react-intl";

export enum ContactType {
  TELEFONE = "telefone",
  EMAIL = "email",
  MORADA = "morada",
}

interface IContact {
  type: ContactType;
  name: string;
  value: string;
}

const Contact: React.FunctionComponent<IContact> = ({ type, name, value }: IContact) => {

  const intl = useIntl();
  
  return (
    <div className="contact" data-aos="fade-up" data-aos-duration="1500">
      <div className="icon">
        { type === ContactType.TELEFONE && <Telefone /> }
        { type === ContactType.EMAIL && <Email /> }
        { type === ContactType.MORADA && <Morada /> }
      </div>
      <span className="name">{intl.formatMessage({ id: name })}</span>
      { type === ContactType.EMAIL ?
        <a className="email" href={`mailto:${value}`}>{value}</a> :
        <span className="value">{value}</span>
      }
      { type === ContactType.TELEFONE && 
        <span className="phone-info">
          {intl.formatMessage({ id: "footer.contacts.call-info" })}
        </span>
      }
    </div>
  )
}

export default Contact;
