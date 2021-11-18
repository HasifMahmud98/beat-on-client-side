import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import CTA from '../CTA/CTA';
import Feature from '../Feature/Feature';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Feature></Feature>
            <CTA></CTA>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;