import TranslationsHelper from "../../../utils/TranslationsHelper";
import Label from "../../../components/label/Label";
import Title from "../../../components/title/Title";
import Description from "../../../components/description/Description";
import HomeNavButton from "../../../components/home-nav-button/HomeNavButton";

import navButtons from "./home-nav-buttons";

const IntroSection: React.FunctionComponent = () => {

  return (
    <div className="intro-section-container">
        <div className="intro-section">
            <div className="left-section">
                <div className="relative-element">
                    <div className="top-left-image"></div>
                    <div className="bottom-right-image"></div>
                    <div className="bg-element">
                        <div className="dotted-bg"></div>
                        <div className="solid-bg"></div>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="label-and-title">
                    <Label text={TranslationsHelper.all.homepage.intro.label} />
                    <Title text={TranslationsHelper.all.homepage.intro.title} />
                </div>
                <div className="description-text" >
                    <Description text={TranslationsHelper.all.homepage.intro["message-1"]} />
                    <Description text={TranslationsHelper.all.homepage.intro["message-2"]} />
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