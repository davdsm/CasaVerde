import { useNavigate } from "react-router-dom";

interface IGalleryGridItem {
  imageSrc: string;
  imageAlt: string;
  office: string;
  link: string;
}

const GalleryGridItem: React.FunctionComponent<IGalleryGridItem> = ({ imageSrc, imageAlt, office, link }: IGalleryGridItem) => {

  const navigate = useNavigate();

  return (
    <div className="gallery-grid-item">
      <img src={imageSrc} alt={imageAlt} onLoad={(image) => {
            if (image.currentTarget.clientHeight > image.currentTarget.clientWidth) {
                image.currentTarget.className = "vertical-img";
            }
            else {
                image.currentTarget.className = "horizontal-img";
            }
        }} />
      <div className="gallery-grid-item-hover">
        <button onClick={() => { navigate(link) }}>{ office }</button>
      </div>
      </div>
  )
}

export default GalleryGridItem;
