'use client'
import { useState, useEffect, useRef } from "react";

const SelectBox = ({ options, onSelect, placeholder = "Select an option" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const dropdownRef = useRef(null);

    // Handle option selection
    const handleSelect = (option) => {
        setSelected(option);
        onSelect(option);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={`selectBox ${isOpen ? 'selectBoxOpen' : ''}`} ref={dropdownRef}>
            <div className={'selectBox'} onClick={() => setIsOpen(!isOpen)}>
                <span>{selected || placeholder}</span>
                <span className={'arrow'}><i className='bx bxs-chevron-down'></i></span>
            </div>
            {isOpen && (
                <ul className={'optionsList'}>
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleSelect(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectBox;
