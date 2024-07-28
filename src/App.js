import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import './App.css';

function App() {
  return (
    <div>
      <header id="video-header">
        <video autoPlay muted loop id="header-video">
          <source src="Banner.mp4" type="video/mp4" />
        </video>
        <Navbar />
      </header>
      <Section
        id="section1"
        title="About Me"
        content="Danielle North is a San Francisco-based software engineer with over 6 years of experience in non-profit management, specializing in tech-focused workforce development for underserved populations." 
      />
      <Section
        id="section2"
        title="Contact Info"
        content="Feel free to reach out to Danielle for collaboration or inquiries. You can contact her via email at danielle.b.orth@gmail.com or follow her on social media."
        buttonLabel="Email Me"
        buttonLink="mailto:danielle.b.orth@gmail.com"
      />
      <Section
        id="section3"
        title="Projects"
        content="Danielle has worked on various impactful projects, ranging from web development to data analysis. Her projects often focus on providing technological solutions to community problems."
        additionalButtons={[
          { label: "View GitHub Projects", link: "https://github.com/DaniNorth?tab=overview&from=2024-07-01&to=2024-07-28" }
        ]}
      />
      <Section
        id="section4"
        title="Resume"
        content="Interested in learning more about Danielle's professional experiences?"
        additionalButtons={[
          { label: "View Resume", link: "https://docs.google.com/document/d/1laRZXjd3GhYrIDNUgTqGduk4vTA53rn8/edit?usp=sharing&ouid=102367424711827100836&rtpof=true&sd=true" }
        ]}
      />
    </div>
  );
}

export default App;