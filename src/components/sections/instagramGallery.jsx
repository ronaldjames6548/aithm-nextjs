import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
const instagramImages = [
    "/img/all-img/insta-1.png",
    "/img/all-img/insta-5.png",
    "/img/all-img/insta-2.png",
    "/img/all-img/insta-3.png",
    "/img/all-img/insta-4.png",
    "/img/all-img/insta-6.png",
];

const InstagramGallery = ({className}) => {
    return (
        <div className={`instagram-section ${className}`}>
            <div className="container-fluid">
                <div className="row g-0">
                    {instagramImages.map((imgSrc, index) => (
                        <div key={index} className="col-lg-2 col-sm-4 col-6">
                            <div className="insta-image">
                                <Link href="#">
                                    <Image width={250} height={220} sizes='100vw' src={imgSrc} alt={`Instagram ${index + 1}`} />
                                    <i className="bx bxl-instagram" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default InstagramGallery