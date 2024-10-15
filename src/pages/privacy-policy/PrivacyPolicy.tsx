import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";
import { Locale } from "../../App";
import PrivacyPolicyEN from "./PrivacyPolicyEN";
import PrivacyPolicyPT from "./PrivacyPolicyPT";

import "../../styles/pages/PrivacyPolicy.scss";

interface IPrivacyPolicy {
    locale: Locale;
}

const PrivacyPolicy: React.FunctionComponent<IPrivacyPolicy> = ({ locale }: IPrivacyPolicy) => {

    const intl = useIntl();

    return (
        <React.Fragment>
            <Helmet>
                <title>Casa Verde | {intl.formatMessage({ id: "footer.menus.menu-3.option-2" })}</title>
            </Helmet>
            { locale === Locale.EN ? <PrivacyPolicyEN /> : <PrivacyPolicyPT /> }
        </React.Fragment>
    )
}

export default PrivacyPolicy;
