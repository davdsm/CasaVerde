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
        title: "homepage.benefits.internet.title",
        description: "homepage.benefits.internet.description",
    },
    {
        icon: Parking,
        included: true,
        title: "homepage.benefits.parking.title",
        description: "homepage.benefits.parking.description",
    },
    {
        icon: GreenSpaces,
        included: true,
        title: "homepage.benefits.green-spaces.title",
        description: "homepage.benefits.green-spaces.description",
    },
    {
        icon: CleaningService,
        included: true,
        title: "homepage.benefits.cleaning.title",
        description: "homepage.benefits.cleaning.description",
        className: "bg-dark-green",
    },
    {
        icon: AC,
        included: true,
        title: "homepage.benefits.ac.title",
        description: "homepage.benefits.ac.description",
        className: "bg-dark-gray",
    },
    {
        icon: Electricity,
        included: false,
        title: "homepage.benefits.electricity.title",
        description: "homepage.benefits.electricity.description",
    },
    {
        icon: MeetingRoom,
        included: true,
        title: "homepage.benefits.meeting-room.title",
        description: "homepage.benefits.meeting-room.description",
    },
    {
        icon: Reception,
        included: true,
        title: "homepage.benefits.reception.title",
        description: "homepage.benefits.reception.description",
    }
];

export default benefits;