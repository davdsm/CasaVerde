import TranslationsHelper from "../../utils/TranslationsHelper";

import Nature from "../../assets/about/nature.svg?react";
import Privacy from "../../assets/about/privacy.svg?react";
import Exclusivity from "../../assets/about/exclusivity.svg?react";
import Location from "../../assets/about/location.svg?react";
import Productivity from "../../assets/about/productivity.svg?react";
import Refinement from "../../assets/about/refinement.svg?react";

const casaVerdeProps = [
    {
        icon: Nature,
        title: TranslationsHelper.all.about.props.nature.title,
        description: TranslationsHelper.all.about.props.nature.description,
    },
    {
        icon: Privacy,
        title: TranslationsHelper.all.about.props.privacy.title,
        description: TranslationsHelper.all.about.props.privacy.description,
    },
    {
        icon: Exclusivity,
        title: TranslationsHelper.all.about.props.exclusivity.title,
        description: TranslationsHelper.all.about.props.exclusivity.description,
    },
    {
        icon: Location,
        title: TranslationsHelper.all.about.props.location.title,
        description: TranslationsHelper.all.about.props.location.description,
    },
    {
        icon: Productivity,
        title: TranslationsHelper.all.about.props.productivity.title,
        description: TranslationsHelper.all.about.props.productivity.description,
    },
    {
        icon: Refinement,
        title: TranslationsHelper.all.about.props.refinement.title,
        description: TranslationsHelper.all.about.props.refinement.description,
    },
];

export default casaVerdeProps;