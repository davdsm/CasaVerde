import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

interface IGalleryGridItem {
  imageSrc: string;
  office: string;
  link: string;
}

const GalleryGridItem: React.FunctionComponent<IGalleryGridItem> = ({ imageSrc, office, link }: IGalleryGridItem) => {

  const navigate = useNavigate();
  const intl = useIntl();

  return (
    <button
      className="gallery-grid-item"
      style={{ backgroundImage: `url(${imageSrc})` }}
      onClick={() => { 
        if (location.pathname !== link) {
          navigate(link);
        }
        else { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }
      }}
    >
      <div className="gallery-grid-item-hover">
        <span>{ /^E[1-9]$/.test(office) ? office : intl.formatMessage({ id: office }) }</span>
      </div>
    </button>
  )
}

export default GalleryGridItem;
