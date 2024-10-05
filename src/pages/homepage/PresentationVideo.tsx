import Video from "../../assets/video/casa-verde.mp4";

const PresentationVideo: React.FunctionComponent = () => {

  return (
    <div className="presentation-video" data-aos="fade-up" data-aos-duration="1500">
        <video autoPlay muted loop width={"100%"} height={"auto"} src={Video} />
    </div>
  )
}

export default PresentationVideo;
