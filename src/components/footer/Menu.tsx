import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

interface IMenu {
    title: string;
    options: {
        name: string;
        link: string;
    }[];
}

const Menu: React.FunctionComponent<IMenu> = ({ title, options }: IMenu) => {

  const intl = useIntl();

  return (
    <div className="menu">
        <span className="menu-title" data-aos="fade-up" data-delay="200" data-aos-duration="2000">
            {intl.formatMessage({ id: title })}
        </span>
        <div className="menu-options">
            {options.map(({ name, link }) => 
                <Link 
                    key={name}
                    className="menu-option"
                    to={link}
                    data-aos="fade-up"
                    data-delay="500"
                    data-aos-duration="1500"
                >
                    {intl.formatMessage({ id: name })}
                </Link>
            )}
        </div>
    </div>
  )
}

export default Menu;
