import TranslationsHelper from "../../../utils/TranslationsHelper";

import FastInternet from "../../../assets/homepage/benefits/fast-internet.svg?react";
import Parking from "../../../assets/homepage/benefits/parking.svg?react";
import GreenSpaces from "../../../assets/homepage/benefits/green-spaces.svg?react";
import CleaningService from "../../../assets/homepage/benefits/cleaning-service.svg?react";
import AC from "../../../assets/homepage/benefits/ac.svg?react";
import Electricity from "../../../assets/homepage/benefits/electricity.svg?react";
import MeetingRoom from "../../../assets/homepage/benefits/meeting-room.svg?react";
import Reception from "../../../assets/homepage/benefits/reception.svg?react";

const benefits = [
    {
        icon: FastInternet,
        included: true,
        title: TranslationsHelper.all.homepage.benefits.internet.title,
        description: TranslationsHelper.all.homepage.benefits.internet.description,
    },
    {
        icon: Parking,
        included: true,
        title: TranslationsHelper.all.homepage.benefits.parking.title,
        description: TranslationsHelper.all.homepage.benefits.parking.description,
    },
    {
        icon: GreenSpaces,
        included: true,
        title: TranslationsHelper.all.homepage.benefits["green-spaces"].title,
        description: TranslationsHelper.all.homepage.benefits["green-spaces"].description,
    },
    {
        icon: CleaningService,
        included: true,
        title: TranslationsHelper.all.homepage.benefits.cleaning.title,
        description: TranslationsHelper.all.homepage.benefits.cleaning.description,
        className: "bg-dark-green",
    },
    {
        icon: AC,
        included: true,
        title: TranslationsHelper.all.homepage.benefits.ac.title,
        description: TranslationsHelper.all.homepage.benefits.ac.description,
        className: "bg-dark-gray",
    },
    {
        icon: Electricity,
        included: false,
        title: TranslationsHelper.all.homepage.benefits.electricity.title,
        description: TranslationsHelper.all.homepage.benefits.electricity.description,
    },
    {
        icon: MeetingRoom,
        included: false,
        title: TranslationsHelper.all.homepage.benefits["meeting-room"].title,
        description: TranslationsHelper.all.homepage.benefits["meeting-room"].description,
    },
    {
        icon: Reception,
        included: true,
        title: TranslationsHelper.all.homepage.benefits.reception.title,
        description: TranslationsHelper.all.homepage.benefits.reception.description,
    }
];

export default benefits;