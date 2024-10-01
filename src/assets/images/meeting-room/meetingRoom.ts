import Image1 from "./895A9690.png";
import Image2 from "./895A9687.png";
import Image3 from "./895A9685.png";
import Image4 from "./895A9681.png";
import Image5 from "./DSC01524.png";
import { SpaceType } from "../../../components/office-card/OfficeCard";

const meetingRoomImages = [
    {
        src: Image1,
        alt: "sala-reuniões-1",
        horizontal: true,
        type: SpaceType.MEETING_ROOM
    },
    {
        src: Image2,
        alt: "sala-reuniões-2",
        type: SpaceType.MEETING_ROOM
    },
    {
        src: Image3,
        alt: "sala-reuniões-3",
        horizontal: true,
        type: SpaceType.MEETING_ROOM
    },
    {
        src: Image4,
        alt: "sala-reuniões-4",
        horizontal: true,
        type: SpaceType.MEETING_ROOM
    },
    {
        src: Image5,
        alt: "sala-reuniões-5",
        type: SpaceType.MEETING_ROOM
    },
];

export default meetingRoomImages;