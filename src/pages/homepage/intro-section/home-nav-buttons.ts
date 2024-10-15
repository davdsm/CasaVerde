import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';

const navButtons = [
    {
        icon: faCouch,
        text: "homepage.intro.products.offices",
        link: "/offices",
    },
    {
        icon: faChartPie,
        text: "homepage.intro.products.meeting-room",
        link: "/offices/meeting-room",
    },
    {
        icon: faStore,
        text: "homepage.intro.products.store",
        link: "/offices/store",
    }
];

export default navButtons;