import BenefitCard from "../../../components/benefit-card/BenefitCard";
import benefits from "./benefits";

const BenefitsSection: React.FunctionComponent = () => {

  return (
    <div className="benefits-section">
      {benefits.map((benefit) => <BenefitCard key={benefit.title} {...benefit} />)}
    </div>
  )
}

export default BenefitsSection;
