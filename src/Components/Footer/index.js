import React from 'react';
import Facebook from '../../Images/facebook.svg';
import Twitter from '../../Images/twitter.svg';
import Email from '../../Images/email.svg';
import Instagram from '../../Images/instagram.svg';

const FooterComponent = () => {
    return (
        <div className="footer-container d-flex justify-content-center">
            <img src={Facebook} alt="facebook" className="mx-2" />
            <img src={Twitter} alt="twitter" />
            <img src={Email} alt="email" className="mx-2" />
            <img src={Instagram} alt="instagram" />
        </div>
    )
};

export default FooterComponent;