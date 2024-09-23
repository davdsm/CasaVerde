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
        <span className="menu-title">
            {title}
        </span>
        <div className="menu-options">
            {options.map(({ name, link }) => 
                <button key={name} className="menu-option" onClick={() => navigate(link)} >
                    {name}
                </button>
            )}
        </div>
    </div>
  )
}

export default Menu;
