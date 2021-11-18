import React from "react";
import Navigation from "../Shared/Navigation/Navigation";

const Reviews = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className="relative items-center w-full mt-5 px-5 py-12 mx-auto  md:px-12 lg:px-24 max-w-7xl">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-red-500 sm:text-4xl">
                        Helpfull Reviews
                    </p>
                    <p className="mt-4 mb-6 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Some of our great customer review our Headphone for us. Grab your headphone and review for us. We like to hear from you.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl  lg:mx-auto rounded-xl">
                        <p className="mx-auto text-base leading-relaxed text-gray-900"> I was actually excited to receive these headphones after using my wife's Solo3 Beats headphones. Her's was super loud and had really good bass. Upon receiving them from Amazon, I fully charged the headphones and tried them on. To my surprise, it lacked A LOT of volume and had almost NO bass. I was super confused. I tried my wife's headphones again and it was completely different.</p>
                        <h2 className="mt-4 text-xs font-semibold tracking-widest text-red-500 uppercase "> Wicked Jax <span href="#" className="font-semibold text-gray-300 lg:mb-0">Acme's HR </span>
                        </h2>
                        <img alt="testimonial" className="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full " src="https://pbs.twimg.com/profile_images/1426761460357738499/LtQow-mk_400x400.jpg" />
                    </div>
                    <div className="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl  lg:mx-auto rounded-xl">
                        <p className="mx-auto text-base leading-relaxed text-gray-900"> Bought this for my son’s birthday and we happened to be in a mall where there was Apple store. He compared this one to the same product in the store and the sound quality was evident. The quality on the one purchased on Amazon was poor in comparison to the product in the Apple store. Would not recommend getting this product here. </p>
                        <h2 className="mt-4 text-xs font-semibold tracking-widest text-red-500 uppercase "> Kevin Labs <span href="#" className="font-semibold text-gray-300 lg:mb-0">Acme's HR </span>
                        </h2>
                        <img alt="testimonial" className="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full " src="https://pbs.twimg.com/profile_images/1426761460357738499/LtQow-mk_400x400.jpg" />
                    </div>
                    <div className="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl  lg:mx-auto rounded-xl">
                        <p className="mx-auto text-base leading-relaxed text-gray-900"> Sound is decent, though I agree with other reviewer that the bass is pretty poor and nothing spectacular. However the worst part is the design. The “noise cancellation” works by mashing the padding onto your ears. This achieves a more minimalist look, instead of surrounding the ears like other headphones. I wore them for an hour and was constantly shifting them due to discomfort.</p>
                        <h2 className="mt-4 text-xs font-semibold tracking-widest text-red-500 uppercase "> Kelly McMillan <span href="#" className="font-semibold text-gray-300 lg:mb-0">Acme's HR </span>
                        </h2>
                        <img alt="testimonial" className="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full " src="https://pbs.twimg.com/profile_images/1426761460357738499/LtQow-mk_400x400.jpg" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reviews;