import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    const [isAnimated, setIsAnimated] = useState(false)
    useEffect(() => {
        setIsAnimated(true);
    }, [])
    return (
        <div
            className="min-h-screen flex justify-center items-center flex-col-reverse lg:flex-row lg:justify-around">
            <div className="text-center lg:text-left">
                <span className="items-center px-1 text-xl lg:text-2xl text-red-500">
                    <span className="font-medium">100% Original Headphone</span>
                </span>
                <h1
                    className="pt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight whitespace-nowrap"
                >
                    Healthy Lifestyle <br />
                    is your only <br />
                    <span className="whitespace-nowrap text-red-600"> unfair advantage </span>
                </h1>
                <p className="pt-8 px-3 lg:px-0 sm:text-lg max-w-md font-normal text-gray-600 leading-relaxed">
                    It can help curb food cravings, fight aging and depression, reduce your risk of heart disease.
                </p>
                <Link to="/explore">
                    <a
                        className="inline-block bg-red-500 px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5 text-white hover:bg-red-700"
                    >
                        Explore
                    </a>
                </Link>

            </div>
            <img
                width="550px"
                src="https://m.media-amazon.com/images/I/51-CdmhSPLL._SX522_.jpg"
                alt="headphone"
                className={`${isAnimated ? "scale-120" : ''} w-screen lg:max-w-xl `} />

        </div>

    );
};

export default Banner;