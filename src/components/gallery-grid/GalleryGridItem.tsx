import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

interface IGalleryGridItem {
  imageSrc: string;
  office: string;
  link: string;
}

const GalleryGridItem: React.FunctionComponent<IGalleryGridItem> = ({ imageSrc, office, link }: IGalleryGridItem) => {

  const intl = useIntl();

  return (
    <Link
      className="gallery-grid-item"
      style={{ backgroundImage: `url(${imageSrc})` }}
      to={link}
    >
      <div className="gallery-grid-item-hover">
        <span>{ /^E[1-9]$/.test(office) ? office : intl.formatMessage({ id: office }) }</span>
      </div>
    </Link>
  )
}

export default GalleryGridItem;
