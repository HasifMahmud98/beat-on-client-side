import React, { useState } from 'react';
import useAuth from './../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://blooming-temple-66013.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div class="flex flex-col flex-1 w-0 overflow-hidden">
            <main class="relative flex-1 overflow-y-auto focus:outline-none">
                <div class="py-6">
                    <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                        <div class="py-4">
                            <div class="rounded-lg bg-gray-50 h-96">

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
                                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-500 sm:text-4xl">
                                                Make Admin
                                            </p>
                                            <div class="mt-8">

                                                <form onSubmit={handleAdminSubmit} action="#" method="POST" class="space-y-6">
                                                    <div>
                                                        <label for="email" class="block text-sm font-medium text-neutral-600"> Email address </label>
                                                        <div class="mt-1">
                                                            <input onBlur={handleOnBlur} id="email" name="email" type="email" autocomplete="email" required="" placeholder="Your Email" class="
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
                    "> Make Admin </button>
                                                    </div>
                                                </form>
                                                {success &&

                                                    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">

                                                        <div class="p-6 border-l-4 border-blue-500 rounded-r-xl bg-blue-50">
                                                            <div class="flex">
                                                                <div class="flex-shrink-0">
                                                                    <svg class="w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-3">
                                                                    <div class="text-sm text-blue-600">
                                                                        <p> Made Admin successfully! </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                }
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

export default MakeAdmin;

