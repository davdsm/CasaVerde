import { useIntl } from "react-intl";

import "../../styles/components/BenefitCard.scss";

interface IBenefitCard {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    included: boolean;
    className?: string;
}

const BenefitCard: React.FunctionComponent<IBenefitCard> = ({ icon: Icon, title, description, included, className }: IBenefitCard) => {

  const intl = useIntl();

  return (
    <div key={title} className={`benefit-card ${ className || "" }`} data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" >
      {!included && 
          <span className="non-included-label" >
            { intl.formatMessage({ id: "homepage.benefits.non-included-label" }) }
          </span>
      }
      <Icon />
      <div className="card-info" >
          <span className="benefit-card-title">
            { intl.formatMessage({ id: title }) }
          </span>
          <span className="benefit-card-description">
            { intl.formatMessage({ id: description }) }
          </span>
      </div>
    </div>
  )
}
  
export default BenefitCard;
  