import { useNavigate } from "react-router-dom";

interface IMenu {
    title: string;
    options: {
        name: string;
        link: string;
    }[];
}

const Menu: React.FunctionComponent<IMenu> = ({ title, options }: IMenu) => {

  const navigate = useNavigate();

  return (
    <div className="menu">
        <span className="menu-title" data-aos="fade-right" data-delay="200" data-aos-duration="2000">
            {title}
        </span>
        <div className="menu-options">
            {options.map(({ name, link }) => 
                <button key={name} className="menu-option" onClick={() => navigate(link)} data-aos="fade-right" data-delay="500" data-aos-duration="1500" >
                    {name}
                </button>
            )}
        </div>
    </div>
  )
}

export default Menu;
