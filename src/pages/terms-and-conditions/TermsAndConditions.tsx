import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";
import { Locale } from "../../App";
import TermsAndConditionsEN from "./TermsAndConditionsEN";
import TermsAndConditionsPT from "./TermsAndConditionsPT";

import "../../styles/pages/TermsAndConditions.scss";

interface ITermsAndConditions {
    locale: Locale;
}

const TermsAndConditions: React.FunctionComponent<ITermsAndConditions> = ({ locale }: ITermsAndConditions) => {

    const intl = useIntl();

  return (
    <React.Fragment>
        <Helmet>
            <title>Casa Verde | {intl.formatMessage({ id: "footer.menus.menu-3.option-1" })}</title>
        </Helmet>
        { locale === Locale.EN ? <TermsAndConditionsEN /> : <TermsAndConditionsPT /> }
    </React.Fragment>
  )
}

export default TermsAndConditions;
