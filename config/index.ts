
export const PRODUCT_CATEGORIES = [
    {
        label: "UI Kits & Website Templates",
        value: "ui-kits-website-templates" as const,
        features:[
            {
                name: "Developer picks",
                href: "#",
                imageSrc: '/nav/ui-kits/mixed.jpg',
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: '/nav/ui-kits/blue.jpg',
            },
            {
                name: "Most Popular",
                href: "#",
                imageSrc: '/nav/ui-kits/purple.jpg',
            },
        ]
    },
    {
        label: "Icons",
        value: "icons" as const,
        features:[
            {
                name: "Developer picks",
                href: "#",
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: "Most Popular",
                href: "#",
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
        ]
    }
];
