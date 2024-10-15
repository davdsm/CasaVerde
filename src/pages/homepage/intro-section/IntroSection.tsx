import Label from "../../../components/label/Label";
import Title from "../../../components/title/Title";
import Description from "../../../components/description/Description";
import HomeNavButton from "../../../components/home-nav-button/HomeNavButton";

import navButtons from "./home-nav-buttons";

const IntroSection: React.FunctionComponent = () => {

  return (
    <div className="intro-section-container">
        <div className="intro-section" >
            <div className="left-section" data-aos="fade-up" data-aos-duration="2000">
                <div className="relative-element">
                    <div className="top-left-image"></div>
                    <div className="bottom-right-image"></div>
                    <div className="bg-element">
                        <div className="dotted-bg"></div>
                        <div className="solid-bg"></div>
                    </div>
                </div>
            </div>
            <div className="right-section" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000">
                <div className="label-and-title">
                    <Label text={"homepage.intro.label"} />
                    <Title text={"homepage.intro.title"} />
                </div>
                <div className="description-text" >
                    <Description text={"homepage.intro.message-1"} />
                    <Description text={"homepage.intro.message-2"} />
                </div>
                <div className="links" >
                    { navButtons.map((button) => <HomeNavButton key={button.text} {...button} />) }
                </div>
            </div>
        </div>
    </div>
  )
}

export default IntroSection;
