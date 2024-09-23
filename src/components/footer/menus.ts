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
                link: "/spaces",
            },
            {
                name: TranslationsHelper.all.footer.menus["menu-1"]["option-3"],
                link: "/contact",
            }
        ]
    },
    {
        title: TranslationsHelper.all.footer.menus["menu-2"].title,
        options: [
            {
                name: TranslationsHelper.all.footer.menus["menu-2"]["option-1"],
                link: "/spaces",
            },
            {
                name: TranslationsHelper.all.footer.menus["menu-2"]["option-2"],
                link: "/spaces/loja",
            },
            {
                name: TranslationsHelper.all.footer.menus["menu-2"]["option-3"],
                link: "/spaces/sala-reunioes",
            }
        ]
    },
    {
        title: TranslationsHelper.all.footer.menus["menu-3"].title,
        options: [
            {
                name: TranslationsHelper.all.footer.menus["menu-3"]["option-1"],
                link: "",
            },
            {
                name: TranslationsHelper.all.footer.menus["menu-3"]["option-2"],
                link: "",
            },
            {
                name: TranslationsHelper.all.footer.menus["menu-3"]["option-3"],
                link: "",
            }
        ]
    }
];

export default menus;