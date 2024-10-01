import { SpaceType } from "../../components/office-card/OfficeCard";
import TranslationsHelper from "../../utils/TranslationsHelper";

const filters = [
    {
        name: TranslationsHelper.all.gallery.filters.all,
    },
    {
        name: TranslationsHelper.all.gallery.filters.store,
        type: SpaceType.STORE
    },
    {
        name: TranslationsHelper.all.gallery.filters.offices,
        type: SpaceType.OFFICE
    },
    {
        name: TranslationsHelper.all.gallery.filters.meetingRoom,
        type: SpaceType.MEETING_ROOM
    },
    {
        name: TranslationsHelper.all.gallery.filters.reception,
        type: SpaceType.RECEPTION
    },
    {
        name: TranslationsHelper.all.gallery.filters.exterior,
        type: SpaceType.EXTERIOR
    },
    {
        name: TranslationsHelper.all.gallery.filters.details,
        type: SpaceType.DETAILS
    },
];

export default filters;