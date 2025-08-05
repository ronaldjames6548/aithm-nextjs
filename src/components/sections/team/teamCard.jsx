import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TeamCard = ({name, role, imgSrc, description, social, width, height}) => {
    return (
        <div className="single-team">
            <Image width={width} height={height} sizes='100vw' src={imgSrc} alt="image" />
            <div className="team-text">
                <div className="team-title">
                    <h4>{name}</h4>
                    <span>{role}</span>
                </div>
                <p>{description}</p>
                <div className="team-social">
                    <Link href={social.facebook}><i className="bx bxl-facebook" /></Link>
                    <Link href={social.instagram}><i className="bx bxl-instagram" /></Link>
                    <Link href={social.github}><i className="bx bxl-github" /></Link>
                </div>
            </div>
        </div>
    )
}

export default TeamCard