export const navigationData = [
    {
        label: "Home",
        href: "#",
        hasDropdown: true,
        dropdownItems: [
            { label: "AI Image Generator", href: "/",},
            { label: "AI Text Generator", href: "/home-two" },
            { label: "AI Developers Profile", href: "/home-three" },
            { label: "AI Chatbot", href: "/home-four" },
        ],
        isActive: true,
    },
    {
        label: "About Us",
        href: "/about",
        hasDropdown: false,
    },
    {
        label: "Portfolio",
        href: "#",
        hasDropdown: true,
        dropdownItems: [
            { label: "Portfolio", href: "/portfolio" },
            { label: "Portfolio Details", href: "/portfolio-details" },
        ],
    },
    {
        label: "Services",
        href: "#",
        hasDropdown: true,
        dropdownItems: [
            { label: "Services", href: "/services" },
            { label: "Services Details", href: "/services-details" },
        ],
    },
    {
        label: "Pages",
        href: "#",
        hasDropdown: true,
        dropdownItems: [
            // { label: "About Us", href: "/about" },
            { label: "Our Team", href: "/team" },
            { label: "FAQ", href: "/faq" },
            {
                label: "Shop",
                href: "#",
                hasDropdown: true,
                nestedDropdown: [
                    { label: "Products List", href: "/products-list" },
                    { label: "Products Details", href: "/single-products" },
                    { label: "Cart", href: "/cart" },
                    { label: "Checkout", href: "/checkout" },
                ],
            },
            { label: "Gallery", href: "/gallery" },
            { label: "Pricing", href: "/pricing" },
            {
                label: "Tools",
                href: "#",
                hasDropdown: true,
                nestedDropdown: [
                    { label: "404 Error Page", href: "/not-found" },
                    { label: "Term & Condition", href: "/term-condition" },
                    { label: "Privacy Policy", href: "/privacy-policy" },
                    { label: "Cookie Policy", href: "/cookie-policy" },
                ],
            },
        ],
    },
    {
        label: "Blogs",
        href: "#",
        hasDropdown: true,
        dropdownItems: [
            { label: "Blog Standard", href: "/blog-standard" },
            { label: "Blog Grid", href: "/blog" },
            { label: "Blog Right Sidebar", href: "/blog-sidebar" },
            { label: "Blog Details", href: "/blog-details" },
        ],
    },
    {
        label: "Contact",
        href: "/contact",
        hasDropdown: false,
    },
];
