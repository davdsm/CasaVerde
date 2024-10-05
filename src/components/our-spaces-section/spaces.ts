import { SpaceType } from "../office-card/OfficeCard";

import G1 from "../../assets/images/G1/895A9593.png";
import G2 from "../../assets/images/G2/895A9608.png";
import G3 from "../../assets/images/G3/895A9613.png";
import G4 from "../../assets/images/G4/895A9624.png";
import G5 from "../../assets/images/G5/895A9646.jpg";
import G6 from "../../assets/images/G6/895A9666.png";
import G7 from "../../assets/images/G7/895A9632.jpg";
import G8 from "../../assets/images/G8/895A9637.jpg";
import G9 from "../../assets/images/G9/895A9670.jpg";
import Store from "../../assets/images/loja/895A9699.png";
import MeetingRoom from "../../assets/images/meeting-room/895A9690.png";

const spaces = [
    {   
        id: "Sala Reuniões",
        imageSrc: MeetingRoom,
        label: SpaceType.MEETING_ROOM,
        area: 10.12,
        name: "Sala Reuniões",
        link: "/offices/meeting-room",
    },
    {
        id: "Loja",
        imageSrc: Store,
        label: SpaceType.STORE,
        area: 94.35,
        name: "Loja",
        link: "/offices/store",
    },
    {
        id: "Gabinete 1",
        imageSrc: G1,
        label: SpaceType.OFFICE,
        area: 27.25,
        name: "Escritório 1",
        link: "/offices/office1",
    },
    {
        id: "Gabinete 2",
        imageSrc: G2,
        label: SpaceType.OFFICE,
        area: 20.2,
        name: "Escritório 2",
        link: "/offices/office2",
    },
    {
        id: "Gabinete 3",
        imageSrc: G3,
        label: SpaceType.OFFICE,
        area: 30.75,
        name: "Escritório 3",
        link: "/offices/office3",
    },
    {
        id: "Gabinete 4",
        imageSrc: G4,
        label: SpaceType.OFFICE,
        area: 22.15,
        name: "Escritório 4",
        link: "/offices/office4",
    },
    {
        id: "Gabinete 5",
        imageSrc: G5,
        label: SpaceType.OFFICE,
        area: 22.2,
        name: "Escritório 5",
        link: "/offices/office5",
    },
    {
        id: "Gabinete 6",
        imageSrc: G6,
        label: SpaceType.OFFICE,
        area: 23.25,
        name: "Escritório 6",
        link: "/offices/office6",
    },
    {
        id: "Gabinete 7",
        imageSrc: G7,
        label: SpaceType.OFFICE,
        area: 24.8,
        name: "Escritório 7",
        link: "/offices/office7",
    },
    {
        id: "Gabinete 8",
        imageSrc: G8,
        label: SpaceType.OFFICE,
        area: 20.2,
        name: "Escritório 8",
        link: "/offices/office8",
    },
    {
        id: "Gabinete 9",
        imageSrc: G9,
        label: SpaceType.OFFICE,
        area: 8.4,
        name: "Escritório 9",
        link: "/offices/office9",
    },
];

export default spaces;