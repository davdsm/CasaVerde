import Telefone from "../../assets/contacts/telefone.svg?react";
import Email from "../../assets/contacts/email.svg?react";
import Morada from "../../assets/contacts/morada.svg?react";

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

  return (
    <div className="contact" data-aos="fade-up" data-aos-duration="1500">
      <div className="icon">
        { type === ContactType.TELEFONE && <Telefone /> }
        { type === ContactType.EMAIL && <Email /> }
        { type === ContactType.MORADA && <Morada /> }
      </div>
      <span className="name">{name}</span>
      { type === ContactType.EMAIL ?
        <a className="email" href={`mailto:${value}`}>{value}</a> :
        <span className="value">{value}</span>
      }
      { type === ContactType.TELEFONE && 
        <span className="phone-info">
          (chamada para rede móvel nacional)
        </span>
      }
    </div>
  )
}

export default Contact;
