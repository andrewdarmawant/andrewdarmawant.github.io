import React from 'react';
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Heroimg2 from '../component/Heroimg2';
import Form from '../component/Form';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="Contact" text="Let's have a chat"/>
            <Form/>
            <Footer />
        </div>
    )
};

export default Contact;