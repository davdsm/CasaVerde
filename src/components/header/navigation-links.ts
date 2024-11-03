export const navigationLinks = [
    {
        href: "/",
        id: "navigate-to-homepage",
        text: "header.homepage",
    },
    {
        href: "/about",
        id: "navigate-to-porque",
        text: "header.about",
    },
    {
        href: "/spaces",
        id: "navigate-to-spaces",
        text: "header.spaces",
        childNavigationLinks: [
            {
                href: "/spaces/common-spaces",
                id: "navigate-to-common-spaces",
                text: "header.spaces.common-spaces"
            },
            {
                href: "/spaces/offices",
                id: "navigate-to-offices",
                text: "header.spaces.offices"
            },
            {
                href: "/spaces/commercial-space", 
                id: "navigate-to-commercial-space",
                text: "header.spaces.commercial-space"
            }
        ]
    },
    {
        href: "/gallery",
        id: "navigate-to-galeria",
        text: "header.gallery",
    },
    {
        href: "/contacts",
        id: "navigate-to-contactos",
        text: "header.contacts",
    },
];