'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'


const SetBackgroundColor = () => {
    const pathName = usePathname()
    useEffect(() => {
        const body = document.querySelector("body")
        document.body.className = "";

        if (pathName !== "/home-two" || pathName !== "/home-three") {
            body.classList.add("dark-theme")
        }
        if (pathName === "/home-two") {
            body.classList.remove("dark-theme")
            body.classList.add("light-theme")
        }
        if (pathName === "/home-three") {
            body.classList.remove("dark-theme")
            body.classList.add("dark-theme-2")
        }
    }, [pathName])
    return null
}

export default SetBackgroundColor