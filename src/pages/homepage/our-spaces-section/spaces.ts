import { SpaceType } from "../../../components/office-card/OfficeCard";

import G1 from "../../../assets/images/G1/895A9593.png";
import G2 from "../../../assets/images/G2/895A9608.png";
import G3 from "../../../assets/images/G3/895A9613.png";
import G4 from "../../../assets/images/G4/895A9624.png";
import G5 from "../../../assets/images/G5/895A9646.jpg";
import G6 from "../../../assets/images/G6/895A9666.png";
import G7 from "../../../assets/images/G7/895A9632.jpg";
import G8 from "../../../assets/images/G8/895A9637.jpg";
import G9 from "../../../assets/images/G9/895A9670.jpg";
import Store from "../../../assets/images/loja/895A9699.png";
import MeetingRoom from "../../../assets/images/meeting-room/895A9690.png";

const spaces = [
    {
        imageSrc: MeetingRoom,
        label: SpaceType.MEETING_ROOM,
        area: 10.12,
        name: "Sala Reuniões",
        link: "/spaces/sala-reunioes",
    },
    {
        imageSrc: Store,
        label: SpaceType.STORE,
        area: 94.35,
        name: "Loja",
        link: "/spaces/loja",
    },
    {
        imageSrc: G1,
        label: SpaceType.OFFICE,
        area: 27.25,
        name: "Escritório 1",
        link: "/spaces/gabinete-1",
    },
    {
        imageSrc: G2,
        label: SpaceType.OFFICE,
        area: 20.2,
        name: "Escritório 2",
        link: "/spaces/gabinete-2",
    },
    {
        imageSrc: G3,
        label: SpaceType.OFFICE,
        area: 30.75,
        name: "Escritório 3",
        link: "/spaces/gabinete-3",
    },
    {
        imageSrc: G4,
        label: SpaceType.OFFICE,
        area: 22.15,
        name: "Escritório 4",
        link: "/spaces/gabinete-4",
    },
    {
        imageSrc: G5,
        label: SpaceType.OFFICE,
        area: 22.2,
        name: "Escritório 5",
        link: "/spaces/gabinete-5",
    },
    {
        imageSrc: G6,
        label: SpaceType.OFFICE,
        area: 23.25,
        name: "Escritório 6",
        link: "/spaces/gabinete-6",
    },
    {
        imageSrc: G7,
        label: SpaceType.OFFICE,
        area: 24.8,
        name: "Escritório 7",
        link: "/spaces/gabinete-7",
    },
    {
        imageSrc: G8,
        label: SpaceType.OFFICE,
        area: 20.2,
        name: "Escritório 8",
        link: "/spaces/gabinete-8",
    },
    {
        imageSrc: G9,
        label: SpaceType.OFFICE,
        area: 8.4,
        name: "Escritório 9",
        link: "/spaces/gabinete-9",
    },
];

export default spaces;