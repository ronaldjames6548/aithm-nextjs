import React, { useState } from 'react';
import Link from 'next/link';

// Navigation data structure
const navigationData = [
    {
        label: "Home",
        href: "#",
        hasDropdown: true,
        dropdownItems: [
            { label: "AI Image Generator", href: "/" },
            { label: "AI Text Generator", href: "/index-2" },
            { label: "AI Developers Profile", href: "/index-3" },
            { label: "AI Chatbot", href: "/index-4" },
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
            { label: "About Us", href: "/about" },
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

const ResponsiveNavbar = () => {
    const [openAccordions, setOpenAccordions] = useState({});
    const [openNestedAccordions, setOpenNestedAccordions] = useState({});

    const toggleAccordion = (id) => {
        setOpenAccordions(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const toggleNestedAccordion = (parentId, childId) => {
        setOpenNestedAccordions(prev => ({
            ...prev,
            [`${parentId}-${childId}`]: !prev[`${parentId}-${childId}`]
        }));

        // Prevent event bubbling
        event.stopPropagation();
    };

    return (
        <div className="responsive-navbar offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="navbarOffcanvas">
            <div className="offcanvas-header">
                <Link className="logo d-inline-block" href="/">
                    Aithm
                </Link>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="accordion" id="navbarAccordion">
                    {navigationData.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            {item.hasDropdown ? (
                                <>
                                    <button
                                        className={`accordion-button collapsed ${item.isActive ? 'active' : ''}`}
                                        type="button"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={openAccordions[index]}
                                    >
                                        {item.label}
                                    </button>
                                    <div
                                        className={`accordion-collapse collapse ${openAccordions[index] ? 'show' : ''}`}
                                    >
                                        <div className="accordion-body">
                                            <div className="accordion" id={`navbarAccordion${index + 1}`}>
                                                {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                    <div className="accordion-item" key={dropdownIndex}>
                                                        {dropdownItem.hasDropdown && dropdownItem.nestedDropdown ? (
                                                            <>
                                                                <button
                                                                    className="accordion-button collapsed"
                                                                    type="button"
                                                                    onClick={() => toggleNestedAccordion(index, dropdownIndex)}
                                                                    aria-expanded={openNestedAccordions[`${index}-${dropdownIndex}`]}
                                                                >
                                                                    {dropdownItem.label}
                                                                </button>
                                                                <div
                                                                    className={`accordion-collapse collapse ${openNestedAccordions[`${index}-${dropdownIndex}`] ? 'show' : ''}`}
                                                                >
                                                                    <div className="accordion-body">
                                                                        <div className="accordion" id={`navbarAccordion${index}${dropdownIndex}`}>
                                                                            {dropdownItem.nestedDropdown.map((nestedItem, nestedIndex) => (
                                                                                <div className="accordion-item" key={nestedIndex}>
                                                                                    <Link href={nestedItem.href} className="accordion-link">
                                                                                        {nestedItem.label}
                                                                                    </Link>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <Link
                                                                href={dropdownItem.href}
                                                                className={`accordion-link ${dropdownItem.isActive ? 'active' : ''}`}
                                                            >
                                                                {dropdownItem.label}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link href={item.href} className="accordion-link without-icon">
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
                <div className="offcanvas-contact-info">
                    <h4>Follow On</h4>
                    <ul className="social-profile list-style">
                        <li><a href="#"><i className='bx bxl-facebook'></i></a></li>
                        <li><a href="#"><i className='bx bxl-instagram'></i></a></li>
                        <li><a href="#"><i className='bx bxl-linkedin'></i></a></li>
                        <li><a href="#"><i className='bx bxl-dribbble'></i></a></li>
                        <li><a href="#"><i className='bx bxl-pinterest'></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveNavbar;