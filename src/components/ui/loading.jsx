'use client'
import React, { useEffect, useState } from 'react'

const Loading = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2);
    }, [])
    return (
        <>
            {
                loading &&
                <div className='loader-container'>
                    <span className="loader"></span>
                </div>
            }
        </>
    )
}

export default Loading