import React from 'react';
import './About.css'; // Assuming you want to add custom styles

const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                <h2>About Us</h2>
                <p>
                    Welcome to the National Web Community of Philatelists, a dedicated platform aimed at overcoming the challenges faced by philatelists across India. Our mission is to enhance the experience of collecting philatelic materials by bridging the gaps in access to information and resources. We strive to raise demand and ensure the fulfillment of interests for every philatelic item and its ancillaries released anywhere in the country.
                </p>
                <h3>Background</h3>
                <p>
                    Philatelists in India often face difficulties in acquiring philatelic materials released by various postal circles nationwide. Each postal circle typically caters to collectors within its immediate jurisdiction, making it challenging for enthusiasts from other regions to access these unique items. Moreover, the community lacks sufficient awareness about ancillary releases across the nation, further limiting the collecting experience.
                </p>
                <h3>Our Solution</h3>
                <p>
                    To address these issues, we are developing a comprehensive website that will serve as a centralized platform for philatelists across India. This website will feature the creation of a National Philately Deposit Account, enabling philatelists to access a wide range of philatelic materials released throughout the country.
                </p>
                <h3>Key Features</h3>
                <ul>
                    <li><strong>Centralized Platform:</strong> Access philatelic materials released by all postal circles across India in one place.</li>
                    <li><strong>Online Ordering and Payment:</strong> Easily order and pay for philatelic materials online, eliminating geographical barriers.</li>
                    <li><strong>Standard Postal Services:</strong> Enjoy reliable delivery of your orders via Registered/Speedpost services at standard rates.</li>
                    <li><strong>Cancellation Releases:</strong> Stay informed about cancellation releases and obtain cancellations on postal stationery directly through our website.</li>
                </ul>
            </div>
        </section>
    );
}

export default About;
