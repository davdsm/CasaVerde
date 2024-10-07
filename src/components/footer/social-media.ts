import TranslationsHelper from "../../utils/TranslationsHelper";
import { SocialMediaType } from "./SocialMedia";

const INSTAGRAM: string = import.meta.env.VITE_INSTAGRAM;
const LINKEDIN: string = import.meta.env.VITE_LINKEDIN;
const FACEBOOK: string = import.meta.env.VITE_FACEBOOK;

const socialMedia = [
    {
        type: SocialMediaType.INSTAGRAM,
        name: TranslationsHelper.all.footer.social.instagram,
        link: INSTAGRAM
    },
    {
        type: SocialMediaType.LINKEDIN,
        name: TranslationsHelper.all.footer.social.linkedin,
        link: LINKEDIN
    },
    {
        type: SocialMediaType.FACEBOOK,
        name: TranslationsHelper.all.footer.social.facebook,
        link: FACEBOOK
    }
];

export default socialMedia;