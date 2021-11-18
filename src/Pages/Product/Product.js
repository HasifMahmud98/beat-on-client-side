import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
        <>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8  lg:h-48 md:h-36 rounded-xl" src={img} alt="blog" />
                <div class="inline-flex justify-between w-full">
                    <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter  text-neutral-600"> {name}</h1>
                    <span>${price}</span>
                </div>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-300"> {description} </p>
                <Link to={`/booking/${_id}`}>
                    <button className="mt-5 bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                        Buy Now
                    </button>
                </Link>


            </div>

        </>
    );
};

export default Product;