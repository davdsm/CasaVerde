import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import TranslationsHelper from '../../../utils/TranslationsHelper';

const navButtons = [
    {
        icon: faCouch,
        text: TranslationsHelper.all.homepage.intro.products.offices,
        link: "/escritorios",
    },
    {
        icon: faChartPie,
        text: TranslationsHelper.all.homepage.intro.products["meeting-room"],
        link: "/escritorios/sala-reunioes",
    },
    {
        icon: faStore,
        text: TranslationsHelper.all.homepage.intro.products.store,
        link: "/escritorios/loja",
    }
];

export default navButtons;