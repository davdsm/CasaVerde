import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

interface IMenu {
    title: string;
    options: {
        name: string;
        link: string;
        newTab?: boolean;
    }[];
}

const Menu: React.FunctionComponent<IMenu> = ({ title, options }: IMenu) => {

  const navigate = useNavigate();
  const intl = useIntl();

  return (
    <div className="menu">
        <span className="menu-title" data-aos="fade-up" data-delay="200" data-aos-duration="2000">
            {intl.formatMessage({ id: title })}
        </span>
        <div className="menu-options">
            {options.map(({ name, link, newTab }) => 
                <button 
                    key={name}
                    className="menu-option"
                    onClick={() => {
                        if (newTab) {
                            window.open(link);
                        }
                        else if (location.pathname !== link) {
                            navigate(link);
                        }
                        else { 
                            window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) 
                        }
                    }}
                    data-aos="fade-up"
                    data-delay="500"
                    data-aos-duration="1500"
                >
                    {intl.formatMessage({ id: name })}
                </button>
            )}
        </div>
    </div>
  )
}

export default Menu;
