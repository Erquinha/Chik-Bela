
import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const images = [
    'Banner para loja coleção nova jeans moderno rosa e branco (7).png',
    'Banner para loja coleção nova jeans moderno rosa e branco (6).png'
];

const Slideshow = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshow">
            <img src={images[index]} alt="Slide" />
        </div>
    );
};

export default Slideshow;
