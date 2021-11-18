import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const features = [
    { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

export default function AboutUs() {
    return (

        <div className="bg-white">
            <Navigation></Navigation>
            <div className="max-w-2xl mx-auto py-12 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">About Us.</h2>
                    <p className="mt-4 text-gray-500">
                        In 1946, Masaru Ibuka, Akio Morita and more than twenty others established
                        the Tokyo Tsushin Kogyo (Tokyo Telecommunications Engineering Corporation). This was where Sony started.
                        Cherishing the spirit of challenge to "do what has never been done before," Sony has created innovative products, while expanding its business by entering many different fields, including semiconductors, financial services, movies, music, and games.
                        It's now grown into a global corporate group that spans across a variety of industries.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="https://media.wired.com/photos/5daf96f208f85000087191f3/1:1/w_1340,h_1340,c_limit/Audio-Technica-ATH-M20x-SOURCE-Audio-Technica.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://media.wired.com/photos/5e7164aeb9399f00096a2ae6/1:1/w_1800,h_1800,c_limit/Gear-Mont-Blanc-Smart-Headphones-Gold-Front-SOURCE-Mont-Blanc.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://i.pinimg.com/originals/4c/a3/b3/4ca3b3ff05495fd39c83056052d2ec33.png"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://cdn.vox-cdn.com/thumbor/3o5bkD-T3oQ3EIfXotA4k9P97TY=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22443013/5.png"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="bg-gray-100 rounded-lg"
                    />
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}