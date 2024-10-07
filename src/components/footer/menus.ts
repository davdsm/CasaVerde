import TranslationsHelper from "../../utils/TranslationsHelper";

const menus = [
    {
        title: TranslationsHelper.all.footer.menus["menu-1"].title,
        options: [
            {
                name: TranslationsHelper.all.footer.menus["menu-1"]["option-1"],
                link: "/about",
            },
            {
                name: TranslationsHelper.all.footer.menus["menu-1"]["option-2"],
                link: "/offices",
            },
            {
                name: TranslationsHelper.all.footer.menus["menu-1"]["option-3"],
                link: "/contacts",
            }
        ]
    },
    {
        title: TranslationsHelper.all.footer.menus["menu-2"].title,
        options: [
            {
                name: TranslationsHelper.all.footer.menus["menu-2"]["option-1"],
                link: "/offices",
            },
            {
                name: TranslationsHelper.all.footer.menus["menu-2"]["option-2"],
                link: "/offices/store",
            },
            {
                name: TranslationsHelper.all.footer.menus["menu-2"]["option-3"],
                link: "/offices/meeting-room",
            }
        ]
    },
    {
        title: TranslationsHelper.all.footer.menus["menu-3"].title,
        options: [
            {
                name: TranslationsHelper.all.footer.menus["menu-3"]["option-1"],
                link: "/terms-conditions",
            },
            {
                name: TranslationsHelper.all.footer.menus["menu-3"]["option-2"],
                link: "/privacy-policy",
            },
            {
                name: TranslationsHelper.all.footer.menus["menu-3"]["option-3"],
                link: "https://www.livroreclamacoes.pt/Inicio/",
            }
        ]
    }
];

export default menus;