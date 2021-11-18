import React from "react";
import { Link, NavLink } from 'react-router-dom';

const Products = () => {
    const products = [
        {
            name: 'Sony WH-1000XM4',
            href: 'https://assets.newatlas.com/dims4/default/b5f318c/2147483647/strip/true/crop/1281x854+10+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fnura-headphones-subscription-2.jpg',
            price: '20',
            description: 'Free and Premium themes, UI Kit\'s, templates and landing pages built with Tailwind CSS, HTML & Next.js.',
        },
        {
            name: 'Bose 700',
            href: 'https://www.newegg.com/insider/wp-content/uploads/2019/06/nura_6.jpg',
            price: '20',
            description: 'Free and Premium themes, UI Kit\'s, templates and landing pages built with Tailwind CSS, HTML & Next.js.',
        },
        {
            name: 'Jabra Elite',
            href: 'https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?size=626&ext=jpg',
            price: '30',
            description: 'Free and Premium themes, UI Kit\'s, templates and landing pages built with Tailwind CSS, HTML & Next.js.',
        },
    ]
    return (
        <div>
            <div class="relative items-center w-full px-5 py-12 mx-auto  md:px-12 lg:px-24 max-w-7xl">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-red-500 sm:text-4xl">
                        Our Products
                    </p>
                    <p className="mt-4 mb-6 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Some of our great customer review our Headphone for us. Grab your headphone and review for us. We like to hear from you.
                    </p>
                </div>
                <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">

                    {products.map((item) => (
                        <div class="p-6">
                            <img class="object-cover object-center w-full mb-8  lg:h-48 md:h-36 rounded-xl" src={item.href} alt="blog" />
                            <div class="inline-flex justify-between w-full">
                                <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter  text-neutral-600"> {item.name}</h1>
                                <span>${item.price}</span>
                            </div>
                            <p class="mx-auto text-base font-medium leading-relaxed text-gray-300"> {item.description} </p>
                            <Link to="/explore">
                                <button className="mt-5 bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                                    Buy Now
                                </button>
                            </Link>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Products;