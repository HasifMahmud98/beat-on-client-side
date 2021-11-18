import axios from 'axios';
import React from "react";
import { useForm } from "react-hook-form";

const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://blooming-temple-66013.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
                else {
                    alert('Something wrong!!!')
                }
            })
    }

    return (
        <div class="flex flex-col flex-1 w-0 overflow-hidden">
            <main class="relative flex-1 overflow-y-auto focus:outline-none">
                <div class="py-6">

                    <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                        <div class="py-4">
                            <div class="rounded-lg bg-gray-50">

                                <div class="container items-center px-5 py-12 lg:px-20">

                                    <div class="
            flex flex-col
            w-full
            max-w-md
            p-10
            mx-auto
            my-6
            transition
            duration-500
            ease-in-out
            transform
            bg-white
            rounded-lg
            md:mt-0
          ">
                                        <div class="mt-5">
                                            <p className="mt-2 mb-5s text-3xl leading-8 font-extrabold tracking-tight text-blue-500 sm:text-4xl">
                                                Add A Product
                                            </p>
                                            <div class="mt-6">
                                                <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" class="space-y-6">
                                                    <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
                                                        <div>
                                                            <label for="email" class="block text-sm font-medium text-neutral-600"> Name </label>
                                                            <div class="mt-1">
                                                                <input {...register("name", { required: true, maxLength: 20 })} id="name" name="name" type="name" required="" placeholder="Name" class="
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
                                                                <input {...register("price")} id="price" name="price" type="number" autocomplete="current-password" required="" placeholder="Price" class="
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
                                                    </div>
                                                    <div>
                                                        <label for="email" class="block text-sm font-medium text-neutral-600"> Description </label>
                                                        <textarea {...register("description")} class="
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
                    " id="description" type="text" name="description" placeholder="Description" required=""></textarea>
                                                    </div>
                                                    <div>
                                                        <label for="email" class="block text-sm font-medium text-neutral-600"> Image </label>
                                                        <div class="mt-1">
                                                            <input {...register("img")} id="img" name="img" type="text" autocomplete="email" required="" placeholder="Image URL" class="
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
                                                        <button type="submit" class="
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
                    "> Add A Product </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddAProduct;