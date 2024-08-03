import React, { useEffect, useState } from "react";
import classes from "./PreEvent.module.css";
import './PreEvent.css';

const LazyImage = ({ src, alt, className, onClick }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoaded(true);
    }, [src]);

    return (
        <img
            src={loaded ? src : undefined}
            alt={alt}
            className={`${className} ${loaded ? "loaded" : "loading"}`}
            onMouseOver={onClick}
        />
    );
};

const PrevEvent = () => {
    const [activeImageId, setActiveImageId] = useState(null);
    const [preloaded, setPreloaded] = useState(false);

    const images = [
        { id: "1", url: "/Carousel/1.jpg", alt: "Image 1" },
        { id: "2", url: "/Carousel/2.jpg", alt: "Image 2" },
        { id: "3", url: "/Carousel/4.jpg", alt: "Image 3" },
        { id: "4", url: "/Carousel/5.jpg", alt: "Image 4" },
        { id: "5", url: "/Carousel/7.jpg", alt: "Image 5" },
    ];

    // Preload images on component mount
    useEffect(() => {
        const preloadImages = () => {
            images.forEach((image) => {
                const img = new Image();
                img.src = image.url;
            });
            setPreloaded(true);
        };

        preloadImages();
    }, [images]);

    const handleImageClick = (id, event) => {
        event.stopPropagation();
        setActiveImageId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className={classes.leaderboard_section}
             style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h1 className={classes.heading}>Crescendo '23</h1>
            <p className={classes.para}>
                On October 30, Sairam Engineering College was transformed into a hub of excitement and creativity
                during Crescendo'23. The event was a spectacular success, filled with breathtaking performances
                and engaging activities that left everyone in awe. Crescendo'23 showcased the incredible talent and
                passion of our students. The energy was electric, with a phenomenal turnout from students, faculty,
                and special guests, all coming together to celebrate and enjoy. It was a day of joy and inspiration,
                a testament to the hard work and dedication of the organizers and participants. Crescendo'23 was not
                just an event but a magical experience that will be remembered for a long time.
            </p>

            <div className="carousel-container">
                {preloaded && images.map((image) => (
                    <LazyImage
                        key={image.id}
                        className={`carousel-img ${activeImageId === image.id ? "active" : ""}`}
                        src={image.url}
                        alt={image.alt}
                        onClick={(e) => handleImageClick(image.id, e)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PrevEvent;
