import React from "react";
import { Link } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";

export default function CTA() {
    const { user, logout } = useAuth();
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Ready to dive in?</span>
                    <span className="block text-red-600">Order your first headphone today.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <Link to="/explore">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                            >
                                Explore
                            </a>
                        </Link>

                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        {
                            user?.email ?
                                <a onClick={logout}
                                    href="#"
                                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50"
                                >
                                    Sign Out
                                </a>
                                :
                                <Link to="/signup">
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50"
                                    >
                                        Sign Up
                                    </a>
                                </Link>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}