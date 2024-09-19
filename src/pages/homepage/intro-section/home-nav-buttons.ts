import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import TranslationsHelper from '../../../utils/TranslationsHelper';

const navButtons = [
    {
        icon: faCouch,
        text: TranslationsHelper.all.homepage.intro.products.offices,
        link: "/spaces",
    },
    {
        icon: faChartPie,
        text: TranslationsHelper.all.homepage.intro.products["meeting-room"],
        link: "/spaces/sala-reunioes",
    },
    {
        icon: faStore,
        text: TranslationsHelper.all.homepage.intro.products.store,
        link: "/spaces/loja",
    }
];

export default navButtons;