import { SocialMediaType } from "./SocialMedia";

const INSTAGRAM: string = import.meta.env.VITE_INSTAGRAM;
const LINKEDIN: string = import.meta.env.VITE_LINKEDIN;
const FACEBOOK: string = import.meta.env.VITE_FACEBOOK;

const socialMedia = [
    {
        type: SocialMediaType.INSTAGRAM,
        name: "footer.social.instagram",
        link: INSTAGRAM
    },
    {
        type: SocialMediaType.LINKEDIN,
        name: "footer.social.linkedin",
        link: LINKEDIN
    },
    {
        type: SocialMediaType.FACEBOOK,
        name: "footer.social.facebook",
        link: FACEBOOK
    }
];

export default socialMedia;