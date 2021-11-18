import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import google from '../Login/google.png'
import logo from '../../Shared/Navigation/logo.png'
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInUsingGoogle } = useAuth();
    console.log(user);

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleGoogle = e => {
        signInUsingGoogle(location, history);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div class="flex min-h-screen overflow-hidden">

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
                                    <p> Login successfully! </p>
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

            <div class="flex flex-col justify-center flex-1 px-4 py-12  sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div class="w-full max-w-xl mx-auto lg:w-96">
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
                        <h2 class="mt-6 text-3xl font-extrabold text-neutral-600"> Sign in. </h2>
                    </div>
                    <div class="mt-8">
                        <div class="mt-6">
                            <form onSubmit={handleLoginSubmit} action="#" method="POST" class="space-y-6">
                                <div>
                                    <label for="email" class="block text-sm font-medium text-neutral-600"> Email address </label>
                                    <div class="mt-1">
                                        <input id="email" name="email" type="email" onChange={handleOnChange} autocomplete="email" required="" placeholder="Your Email" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>
                                <div class="space-y-1">
                                    <label for="password" class="block text-sm font-medium text-neutral-600"> Password </label>
                                    <div class="mt-1">
                                        <input id="password" name="password" type="password" onChange={handleOnChange} autocomplete="current-password" required="" placeholder="Your Password" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" class="w-4 h-4 text-blue-400 border-gray-200 rounded  focus:ring-blue-500" />
                                        <label for="remember-me" class="block ml-2 text-sm text-neutral-600"> Remember me </label>
                                    </div>
                                    <div class="text-sm">
                                        <NavLink
                                            to="/signup">
                                            <a href="#" class="font-medium text-blue-400 hover:text-blue-500"> New User? Please Sign up </a>
                                        </NavLink>

                                    </div>
                                </div>
                                <div>
                                    <button type="submit" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-400  rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> Sign in </button>
                                </div>
                            </form>
                            <div class="relative my-4">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-t border-gray-300"></div>
                                </div>
                                <div class="relative flex justify-center text-sm">
                                    <span class="px-2 bg-white text-neutral-600"> Or continue with </span>
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

                                        <span class="ml-4"> Log in with Google</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative flex-1 hidden w-0 overflow-hidden lg:block">
                <img class="absolute inset-0 object-cover w-full h-full" src="https://image.freepik.com/free-photo/happy-beautiful-brunette-girl-dancing-listening-music-wireless-headphones-holding-smartphone_1258-19103.jpg" alt="" />
            </div>
        </div>
    );
};

export default Login;