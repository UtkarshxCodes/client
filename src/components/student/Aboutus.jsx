import React from "react";

const AboutUs = () => (
  <div className="first-class">
    <style>{`
      .first-class {
        font-family: 'Outfit', Arial, sans-serif;
        background: #f7fafc;
        color: #1a202c;
        margin: 0;
        padding: 0;
        min-height: 100vh;
      }
      .first-class .container {
        max-width: 700px;
        margin: 40px auto;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 2px 16px rgba(0,0,0,0.07);
        padding: 32px 24px;
      }
      .first-class h1 {
        color: #2563eb;
        font-size: 2.5rem;
        margin-bottom: 0.5em;
        text-align: center;
        font-weight: 800;
      }
      .first-class h2 {
        color: #1a202c;
        font-size: 1.5rem;
        margin-top: 2em;
        margin-bottom: 0.5em;
        font-weight: 700;
      }
      .first-class p {
        font-size: 1.1rem;
        line-height: 1.7;
        margin-bottom: 1.2em;
      }
      .first-class ul {
        margin: 1em 0 1em 1.5em;
        padding: 0;
      }
      .first-class li {
        margin-bottom: 0.5em;
        font-size: 1.1rem;
      }
      .first-class .address {
        background: #e0e7ef;
        padding: 1em;
        border-radius: 8px;
        margin-top: 2em;
        font-size: 1rem;
      }
      @media (max-width: 600px) {
        .first-class .container { padding: 18px 6px; }
        .first-class h1 { font-size: 2rem; }
      }
    `}</style>
    <div className="container">
      <h1>About V-edu.us</h1>
      <p>
        <strong>V-edu.us</strong> is America’s trusted LMS and career guidance platform, dedicated to empowering learners and professionals to achieve their goals. Our mission is to make high-quality education and career advancement accessible to everyone, everywhere.
      </p>
      <h2>Our Mission</h2>
      <p>
        We believe in transforming lives through learning and opportunity. Our mission is to provide a seamless, supportive, and innovative environment for upskilling, job placement, and lifelong growth.
      </p>
      <h2>What We Offer</h2>
      <ul>
        <li><strong>Expert-Led Courses:</strong> Learn from industry leaders across tech, business, and more.</li>
        <li><strong>Career Guidance:</strong> Personalized job placement and resume-building support.</li>
        <li><strong>Upskilling:</strong> Stay ahead with the latest skills and certifications.</li>
        <li><strong>Community:</strong> Join a network of learners and mentors across the U.S.</li>
      </ul>
      <div className="address">
        <strong>Our Address:</strong><br />
        1908 Thomes Ave STE 12363,<br />
        Cheyenne, WY 82001
      </div>
    </div>
  </div>
);

export default AboutUs;