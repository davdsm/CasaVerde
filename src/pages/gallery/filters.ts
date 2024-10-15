import { SpaceType } from "../../components/office-card/OfficeCard";

const filters = [
    {
        name: "gallery.filters.all",
    },
    {
        name: "gallery.filters.store",
        type: SpaceType.STORE
    },
    {
        name: "gallery.filters.offices",
        type: SpaceType.OFFICE
    },
    {
        name: "gallery.filters.meetingRoom",
        type: SpaceType.MEETING_ROOM
    },
    {
        name: "gallery.filters.reception",
        type: SpaceType.RECEPTION
    },
    {
        name: "gallery.filters.exterior",
        type: SpaceType.EXTERIOR
    },
    {
        name: "gallery.filters.details",
        type: SpaceType.DETAILS
    },
];

export default filters;