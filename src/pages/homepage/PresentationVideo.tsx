import Video from "../../assets/video/casa-verde.mp4";
import Poster from "../../assets/video/video-bg.png";

const PresentationVideo: React.FunctionComponent = () => {

  return (
    <div className="presentation-video" data-aos="fade-up" data-aos-duration="1500">
        <video autoPlay muted loop playsInline preload="none" width={"100%"} height={"auto"} src={Video} poster={Poster} />
    </div>
  )
}

export default PresentationVideo;
