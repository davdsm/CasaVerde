import { useNavigate } from "react-router-dom";

interface IGalleryGridItem {
  imageSrc: string;
  office: string;
  link: string;
}

const GalleryGridItem: React.FunctionComponent<IGalleryGridItem> = ({ imageSrc, office, link }: IGalleryGridItem) => {

  const navigate = useNavigate();

  return (
    <button className="gallery-grid-item" style={{ backgroundImage: `url(${imageSrc})` }} onClick={() => { navigate(link) }} >
      <div className="gallery-grid-item-hover">
        <span>{ office }</span>
      </div>
    </button>
  )
}

export default GalleryGridItem;
