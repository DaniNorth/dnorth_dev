import React from 'react';

const Section = ({ id, title, content, buttonLabel, buttonLink, additionalButtons }) => {
    return (
        <section id={id}>
            <h2>{title}</h2>
            <p>{content}</p>
            {buttonLabel && buttonLink && (
                <a href={buttonLink} className="section-button">{buttonLabel}</a>
            )}
            {additionalButtons && additionalButtons.map((button, index) => (
                <a key={index} href={button.link} className="section-button">{button.label}</a>
            ))}
            {id === "section2" && (
                <div className="icon-buttons">
                    <a href="https://www.linkedin.com/in/daninorth/" target="_blank" rel="noopener noreferrer" className="icon-button">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://x.com/DNorth_dev" target="_blank" rel="noopener noreferrer" className="icon-button">
                        <i className="fab fa-x"></i>
                    </a>
                    <a href="https://www.tiktok.com/@tech.ed.info?lang=en" target="_blank" rel="noopener noreferrer" className="icon-button">
                        <i className="fab fa-tiktok"></i>
                    </a>
                </div>
            )}
        </section>
    );
};

export default Section;