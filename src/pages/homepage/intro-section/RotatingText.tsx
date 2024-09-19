import Award from "../../../assets/homepage/award.png";
import TranslationsHelper from "../../../utils/TranslationsHelper";

const RotatingText: React.FunctionComponent = () => {

  return (
    <div className="rotating-text">
      <div className="award-image">
        <img src={Award} alt="award"/>
      </div>
      <svg id="rotatingText" viewBox="0 0 150 150" width="150" height="150">
        <defs>
        <path id="circle" d="
            M 75, 75
            m -70, 0
            a 70,70 0 1,0 140,0
            a 70,70 0 1,0 -140,0
        "/>
        </defs>
        <text width="400">
          <textPath xlinkHref="#circle" className="text">
            { TranslationsHelper.all.homepage.intro["rotating-text"] }
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export default RotatingText;
