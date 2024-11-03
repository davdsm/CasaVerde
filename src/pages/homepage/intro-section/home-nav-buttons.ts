import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';

const navButtons = [
    {
        icon: faCouch,
        text: "homepage.intro.products.common-spaces",
        link: "/spaces/common-spaces",
    },
    {
        icon: faChartPie,
        text: "homepage.intro.products.offices",
        link: "/spaces/offices",
    },
    {
        icon: faStore,
        text: "homepage.intro.products.commercial-space",
        link: "/spaces/commercial-space",
    }
];

export default navButtons;