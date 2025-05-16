import React from 'react';
import './JobPostingSection.css'; // Import the CSS file

const JobPostingSection = () => {
  return (
    <section className="section__container job__container" id="job">
      <h2 className="section__header"><span>Latest & Top</span> Job Openings</h2>
      <p className="section__description">
        Discover Exciting New Opportunities and High-Demand Positions Available
        Now in Top Industries and Companies
      </p>

      <div className="job__grid">
        <div className="job__card">
          <div className="job__card__header">
            <img src="/figma.png" alt="job" />
            <div>
              <h5>Figma</h5>
              <h6>USA</h6>
            </div>
          </div>
          <h4>Senior Product Engineer</h4>
          <p>
            Lead the development of innovative product solutions, leveraging
            your expertise in engineering and product management to drive
            success.
          </p>
          <div className="job__card__footer">
            <span>12 Positions</span>
            <span>Full Time</span>
            <span>$1,45,000/Year</span>
          </div>
        </div>
        <div className="job__card">
          <div className="job__card__header">
            <img src="/google.png" alt="job" />
            <div>
              <h5>Google</h5>
              <h6>USA</h6>
            </div>
          </div>
          <h4>Project Manager</h4>
          <p>
            Manage project timelines and budgets to ensure successful delivery
            of projects on schedule, while maintaining clear communication with
            stakeholders.
          </p>
          <div className="job__card__footer">
            <span>2 Positions</span>
            <span>Full Time</span>
            <span>$95,000/Year</span>
          </div>
        </div>
        <div className="job__card">
          <div className="job__card__header">
            <img src="/linkedin.png" alt="job" />
            <div>
              <h5>LinkedIn</h5>
              <h6>Germany</h6>
            </div>
          </div>
          <h4>Full Stack Developer</h4>
          <p>
            Develop and maintain both front-end and back-end components of web
            applications, utilizing a wide range of programming languages and
            frameworks.
          </p>
          <div className="job__card__footer">
            <span>10 Positions</span>
            <span>Full Time</span>
            <span>$35,000/Year</span>
          </div>
        </div>
        <div className="job__card">
          <div className="job__card__header">
            <img src="/amazon.png" alt="job" />
            <div>
              <h5>Amazon</h5>
              <h6>USA</h6>
            </div>
          </div>
          <h4>Front-end Developer</h4>
          <p>
            Design and implement user interfaces using HTML, CSS, and
            JavaScript, collaborating closely with designers and back-end
            developers.
          </p>
          <div className="job__card__footer">
            <span>20 Positions</span>
            <span>Full Time</span>
            <span>$1,01,000/Year</span>
          </div>
        </div>
        <div className="job__card">
          <div className="job__card__header">
            <img src="/twitter.png" alt="job" />
            <div>
              <h5>Twitter</h5>
              <h6>USA</h6>
            </div>
          </div>
          <h4>ReactJS Developer</h4>
          <p>
            Specialize in building dynamic and interactive user interfaces using
            the ReactJS library, leveraging your expertise in JavaScript and
            front-end development.
          </p>
          <div className="job__card__footer">
            <span>6 Positions</span>
            <span>Full Time</span>
            <span>$98,000/Year</span>
          </div>
        </div>
        <div className="job__card">
          <div className="job__card__header">
            <img src="/microsoft.png" alt="job" />
            <div>
              <h5>Microsoft</h5>
              <h6>USA</h6>
            </div>
          </div>
          <h4>Python Developer</h4>
          <p>
            Develop scalable and efficient backend systems and applications
            using Python, utilizing your proficiency in Python programming and
            software development.
          </p>
          <div className="job__card__footer">
            <span>9 Positions</span>
            <span>Full Time</span>
            <span>$80,000/Year</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPostingSection;