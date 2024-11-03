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
import Reception from "../../assets/images/reception/895A9561.png";
import { SpacesType } from "../../pages/spaces/Spaces";

const spaces = [
    {
        id: "Loja",
        imageSrc: Store,
        label: SpaceType.STORE,
        // area: 94.35,
        spaceType: SpacesType.COMMERCIAL_SPACE,
        link: "/spaces/commercial-space/store",
    },
    {   
        id: "Sala Reuniões",
        imageSrc: MeetingRoom,
        label: SpaceType.MEETING_ROOM,
        // area: 10.12,
        spaceType: SpacesType.COMMON_SPACES,
        link: "/spaces/common-spaces/meeting-room",
    },
    {
        id: "Reception",
        imageSrc: Reception,
        label: SpaceType.RECEPTION,
        // area: 27.25,
        spaceType: SpacesType.COMMON_SPACES,
        link: "/spaces/common-spaces/reception",
        number: 1,
    },
    {
        id: "Gabinete 1",
        imageSrc: G1,
        label: SpaceType.OFFICE,
        // area: 27.25,
        spaceType: SpacesType.OFFICES,
        link: "/spaces/offices/office1",
        number: 1,
    },
    {
        id: "Gabinete 2",
        imageSrc: G2,
        label: SpaceType.OFFICE,
        // area: 20.2,
        spaceType: SpacesType.OFFICES,
        link: "/spaces/offices/office2",
        number: 2,
    },
    {
        id: "Gabinete 3",
        imageSrc: G3,
        label: SpaceType.OFFICE,
        // area: 30.75,
        spaceType: SpacesType.OFFICES,
        link: "/spaces/offices/office3",
        number: 3,
    },
    {
        id: "Gabinete 4",
        imageSrc: G4,
        label: SpaceType.OFFICE,
        // area: 22.15,
        spaceType: SpacesType.OFFICES,
        link: "/spaces/offices/office4",
        number: 4,
    },
    {
        id: "Gabinete 5",
        imageSrc: G5,
        label: SpaceType.OFFICE,
        // area: 22.2,
        spaceType: SpacesType.OFFICES,
        link: "/spaces/offices/office5",
        number: 5,
    },
    {
        id: "Gabinete 6",
        imageSrc: G6,
        label: SpaceType.OFFICE,
        // area: 23.25,
        spaceType: SpacesType.OFFICES,
        link: "/spaces/offices/office6",
        number: 6,
    },
    {
        id: "Gabinete 7",
        imageSrc: G7,
        label: SpaceType.OFFICE,
        // area: 24.8,
        spaceType: SpacesType.OFFICES,
        link: "/spaces/offices/office7",
        number: 7,
    },
    {
        id: "Gabinete 8",
        imageSrc: G8,
        label: SpaceType.OFFICE,
        // area: 20.2,
        spaceType: SpacesType.OFFICES,
        link: "/spaces/offices/office8",
        number: 8,
    },
    {
        id: "Gabinete 9",
        imageSrc: G9,
        label: SpaceType.OFFICE,
        // area: 8.4,
        spaceType: SpacesType.OFFICES,
        link: "/spaces/offices/office9",
        number: 9,
    },
];

export default spaces;