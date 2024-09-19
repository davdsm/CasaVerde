
import TranslationsHelper from "../../utils/TranslationsHelper";

import "../../styles/components/BenefitCard.scss";

interface IBenefitCard {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    included: boolean;
    className?: string;
}

const BenefitCard: React.FunctionComponent<IBenefitCard> = ({ icon: Icon, title, description, included, className }: IBenefitCard) => {

    return (
      <div className={`benefit-card ${className || ""}`}>
        {!included && 
            <span className="non-included-label">
                {TranslationsHelper.all.homepage.benefits["non-included-label"]}
            </span>
        }
        <Icon />
        <div className="card-info">
            <span className="benefit-card-title">{title}</span>
            <span className="benefit-card-description">{description}</span>
        </div>
      </div>
    )
  }
  
  export default BenefitCard;
  