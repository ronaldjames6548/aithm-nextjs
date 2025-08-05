import { navigationData } from '@/db/navigationData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();


    const checkIsActive = (item, currentPathname) => {
        if (item.href === currentPathname) return true;

        // Check dropdownItems
        if (item.dropdownItems) {
            return item.dropdownItems.some(subItem => checkIsActive(subItem, currentPathname));
        }

        // Check nestedDropdown
        if (item.nestedDropdown) {
            return item.nestedDropdown.some(nestedItem => checkIsActive(nestedItem, currentPathname));
        }

        return false;
    };



    return (
        <ul className="navbar-nav">
            {navigationData.map((item) => {
                const isActive = checkIsActive(item, pathname);

                return (
                    <li key={item.label} className={`nav-item ${item.hasDropdown ? 'dropdown' : ''}`}>
                        <Link
                            href={item.href}
                            className={`nav-link ${item.hasDropdown ? 'dropdown-toggle' : ''} ${isActive ? 'active' : ''}`}
                        >
                            {item.label}
                            {item.hasDropdown && <i className="bx bx-down-arrow-alt" />}
                        </Link>

                        {item.hasDropdown && (
                            <ul className="dropdown-menu">
                                {item.dropdownItems.map((dropdownItem) => {
                                    const isSubActive = checkIsActive(dropdownItem, pathname);

                                    return (
                                        <li key={dropdownItem.label} className={`nav-item ${dropdownItem.nestedDropdown ? 'dropdown' : ''}`}>
                                            <Link
                                                href={dropdownItem.href}
                                                className={`nav-link d-flex justify-content-between align-items-center ${isSubActive ? 'active' : ''}`}
                                            >
                                                {dropdownItem.label}
                                                {dropdownItem.nestedDropdown && <i className="bx bx-chevron-right"></i>}
                                            </Link>

                                            {dropdownItem.nestedDropdown && (
                                                <ul className="dropdown-menu">
                                                    {dropdownItem.nestedDropdown.map((nestedItem) => {
                                                        const isNestedActive = nestedItem.href === pathname;

                                                        return (
                                                            <li key={nestedItem.label} className="nav-item">
                                                                <Link
                                                                    href={nestedItem.href}
                                                                    className={`nav-link ${isNestedActive ? 'active' : ''}`}
                                                                >
                                                                    {nestedItem.label}
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>

    );
};

export default Navbar;