import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import logo from '../../Shared/Navigation/logo.png'
import google from '../Login/google.png'
import useAuth from '../../../hooks/useAuth';

const Signup = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError, signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }
    const handleGoogle = e => {
        signInUsingGoogle(location, history);
    }

    const handleLoginSubmit = e => {
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div class="text-blueGray-700 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">


            {isLoading &&
                <span class="flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                </span>}
            {user?.email &&
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
                                    <p> User Created successfully! </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {authError &&
                <div class="relative items-center w-full px-5 py-12 mx-auto  md:px-12 lg:px-24 max-w-7xl">
                    <div class="p-6 border-l-4 border-red-500 rounded-r-xl bg-red-50">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <svg class="w-5 h-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div class="ml-3">
                                <div class="text-sm text-red-600">
                                    <p> {authError} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {!isLoading &&
                <div class="container items-center px-5 lg:px-10">
                    <div class="
            flex flex-col
            w-full
            max-w-md
            p-10
            mx-auto
            transition
            duration-500
            ease-in-out
            transform
            bg-white
            rounded-lg
            md:mt-0
          ">
                        <div>
                            <a href="/" className="
                text-lg
                font-bold
                tracking-tighter
                text-red-400
                transition
                duration-500
                ease-in-out
                transform
                tracking-relaxed
                lg:pr-8
              "> <img width="60px" src={logo} alt="" /> <span className="inline-block">Beat On</span>  </a>
                            <h2 class="mt-6 text-3xl font-extrabold text-neutral-600"> Sign up. </h2>
                        </div>
                        <div class="mt-8">
                            <div class="mt-6">
                                <form onSubmit={handleLoginSubmit} action="#" method="POST" class="space-y-6">
                                    <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
                                        <div>
                                            <label for="email" class="block text-sm font-medium text-neutral-600"> Email address </label>
                                            <div class="mt-1">
                                                <input id="email" name="email" type="email" onBlur={handleOnBlur} autocomplete="email" required="" placeholder="Your Email" class="
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
                                            <label for="password" class="block text-sm font-medium text-neutral-600"> Password </label>
                                            <div class="mt-1">
                                                <input id="password" name="password" type="password" onBlur={handleOnBlur} autocomplete="current-password" required="" placeholder="Your Password" class="
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
                                        <label for="email" class="block text-sm font-medium text-neutral-600"> Full name </label>
                                        <textarea class="
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
                    " id="name" type="text" name="name" onBlur={handleOnBlur} placeholder="Your Full Name" required=""></textarea>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" class="
                        w-4
                        h-4
                        text-blue-400
                        border-gray-200
                        rounded
                        focus:ring-blue-500
                      "/>
                                            <label for="remember-me" class="block ml-2 text-sm text-neutral-600"> Remember me </label>
                                        </div>
                                        <NavLink
                                            to="/signin">
                                            <a href="#" class="font-medium text-blue-400 hover:text-blue-500"> New User? Please Sign In </a>
                                        </NavLink>
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
                    "> Sign up </button>
                                    </div>
                                </form>
                                <div class="relative my-4">
                                    <div class="absolute inset-0 flex items-center">
                                        <div class="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div class="relative flex justify-center text-sm">
                                        <span class="px-2 text-neutral-600 bg-white"> Or continue with </span>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={handleGoogle} type="submit" class="
                    w-full
                    items-center
                    block
                    px-10
                    py-3.5
                    text-base
                    font-medium
                    text-center text-blue-400
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-2 border-white
                    shadow-md
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-gray-500
                  ">
                                        <div class="flex items-center justify-center">
                                            <img class="w-6 h-6" src={google} alt="" />

                                            <span class="ml-4"> Sign up with Google</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Signup;