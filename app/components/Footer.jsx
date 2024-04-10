// In Footer.jsx
import React from 'react';
// Example icons from a public CDN or your assets directory
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#004c4c] text-white p-4 text-center">
            <div className="container mx-auto flex justify-center items-center gap-4">
                <a href="mailto:divyambansal2025@u.northwestern.edu" className="hover:opacity-75">
                    <FaEnvelope alt="Email" className="h-6 w-6"/>
                </a>
                <a href="https://linkedin.com/in/divyam-bansal" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                    <FaLinkedin alt="LinkedIn" className="h-6 w-6"/>
                </a>
                <a href="https://github.com/divyamb08" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                    <FaGithub alt="GitHub" className="h-6 w-6"/>
                </a>
                {/* Add more icons/links as needed */}
            </div>
        </footer>
    );
};

export default Footer;