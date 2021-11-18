import { useParams } from 'react-router';
import axios from 'axios';
import { useSSRSafeId } from '@react-aria/ssr';
import React, { useEffect, useState } from 'react';
import Navigation from "../Shared/Navigation/Navigation";
import { useForm } from "react-hook-form";

const Booking = () => {
    const { register, handleSubmit, reset, setValue } = useForm();
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    const onSubmit = data => {
        console.log(data);

        axios.post('https://blooming-temple-66013.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Successfull');
                    reset();
                }
            })
    }

    useEffect(() => {
        fetch(`https://blooming-temple-66013.herokuapp.com/products/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div>
            <Navigation></Navigation>
            <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                <div class="flex flex-wrap items-center mx-auto max-w-7xl">
                    <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                        <div>
                            <div class="relative w-full max-w-lg">
                                <div class="
                    absolute
                    top-0
                    rounded-full
                    bg-violet-300
                    -left-4
                    w-72
                    h-72
                    mix-blend-multiply
                    filter
                    blur-xl
                    opacity-70
                    animate-blob
                  "></div>
                                <div class="
                    absolute
                    rounded-full
                    bg-fuchsia-300
                    -bottom-24
                    right-20
                    w-72
                    h-72
                    mix-blend-multiply
                    filter
                    blur-xl
                    opacity-70
                    animate-blob
                    animation-delay-4000
                  "></div>
                                <div class="mt-5">
                                    <p className="mt-2 mb-5s text-3xl leading-8 font-extrabold tracking-tight text-blue-500 sm:text-4xl">
                                        Order Now
                                    </p>
                                    <div class="mt-6">
                                        <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" class="space-y-6">
                                            <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
                                                <div>
                                                    <label for="email" class="block text-sm font-medium text-neutral-600"> Product </label>
                                                    <div class="mt-1">
                                                        <input {...register("product")}
                                                            disabled
                                                            defaultValue={service.name}
                                                            id="product" name="product" type="text" required="" placeholder="Product" class="
                          block
                          w-full
                          px-5
                          py-3
                          text-base text-neutral-600
                          placeholder-gray-300
                          transition
                          duration-500
                          ease-in-out
                          transform
                          border border-transparent
                          rounded-lg
                          bg-gray-50
                          focus:outline-none
                          focus:border-transparent
                          focus:ring-2
                          focus:ring-white
                          focus:ring-offset-2
                          focus:ring-offset-gray-300
                        "/>
                                                    </div>
                                                </div>
                                                <div class="space-y-1">
                                                    <label for="password" class="block text-sm font-medium text-neutral-600"> Price </label>
                                                    <div class="mt-1">
                                                        <input {...register("price")}
                                                            disabled
                                                            defaultValue={service.price}
                                                            id="price" name="price" type="number"
                                                            autocomplete={service.price}
                                                            required="" placeholder="Price" class="
                          block
                          w-full
                          px-5
                          py-3
                          text-base text-neutral-600
                          placeholder-gray-300
                          transition
                          duration-500
                          ease-in-out
                          transform
                          border border-transparent
                          rounded-lg
                          bg-gray-50
                          focus:outline-none
                          focus:border-transparent
                          focus:ring-2
                          focus:ring-white
                          focus:ring-offset-2
                          focus:ring-offset-gray-300
                        "></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <label for="email" class="block text-sm font-medium text-neutral-600"> Name </label>
                                                <div class="mt-1">
                                                    <input {...register("name", { required: true, maxLength: 20 })} id="name" name="name" type="name" required="" placeholder="Your Name" class="
                        block
                        w-full
                        px-5
                        py-3
                        text-base text-neutral-600
                        placeholder-gray-300
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border border-transparent
                        rounded-lg
                        bg-gray-50
                        focus:outline-none
                        focus:border-transparent
                        focus:ring-2
                        focus:ring-white
                        focus:ring-offset-2
                        focus:ring-offset-gray-300
                      "/>
                                                </div>
                                            </div>
                                            <div>
                                                <label for="email" class="block text-sm font-medium text-neutral-600"> Address </label>
                                                <textarea {...register("address")} class="
                      block
                      w-full
                      px-5
                      py-3
                      mt-2
                      text-base text-neutral-600
                      placeholder-gray-300
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border border-transparent
                      rounded-lg
                      bg-gray-50
                      focus:outline-none
                      focus:border-transparent
                      focus:ring-2
                      focus:ring-white
                      focus:ring-offset-2
                      focus:ring-offset-gray-300
                      apearance-none
                      autoexpand
                    " id="address" type="text" name="address" placeholder="Your Address" required=""></textarea>
                                            </div>
                                            <div>
                                                <label for="email" class="block text-sm font-medium text-neutral-600"> Email </label>
                                                <div class="mt-1">
                                                    <input {...register("email")} id="email" name="email" type="text" autocomplete="email" required="" placeholder="Your Email" class="
                        block
                        w-full
                        px-5
                        py-3
                        text-base text-neutral-600
                        placeholder-gray-300
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border border-transparent
                        rounded-lg
                        bg-gray-50
                        focus:outline-none
                        focus:border-transparent
                        focus:ring-2
                        focus:ring-white
                        focus:ring-offset-2
                        focus:ring-offset-gray-300
                      "/>
                                                </div>
                                            </div>
                                            <div>
                                                <button onClick={() => setValue("price", `${service.price}`, "product", `${service.name}`)} type="submit" class="
                      flex
                      items-center
                      justify-center
                      w-full
                      px-10
                      py-4
                      text-base
                      font-medium
                      text-center text-white
                      transition
                      duration-500
                      ease-in-out
                      transform
                      bg-blue-400
                      rounded-xl
                      hover:bg-blue-500
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-blue-500
                    "> PURCHASE NOW</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="
              flex flex-col
              items-start
              mt-12
              mb-16
              text-left
              lg:flex-grow lg:w-1/2 lg:pl-6
              xl:pl-24
              md:mb-0
              xl:mt-0
            ">
                        <h1 class="
                mb-8
                text-4xl
                font-bold
                leading-none
                tracking-tighter
                text-neutral-600
                md:text-7xl
                lg:text-5xl
              "> {service.name} </h1>
                        <img src={service.img}></img>
                        <div class="mt-0 lg:mt-6 max-w-7xl sm:flex">
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Booking;