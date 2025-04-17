import React, { useState } from "react";
import bannerImage from '../Assets/careercover.jpg'; 



const JobCard = ({ title, location, type, role, description, responsibilities, requirements, email }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`job-card ${isExpanded ? "expanded" : ""}`}>
      <div className="job-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h2 className="job-title">{title}</h2>
        <span className="toggle-icon">{isExpanded ? "✕" : "➕"}</span>
      </div>

      {isExpanded && (
        <div className="job-details">
          <p className="job-location">
            <span className="icon">🌍</span> {location} | {type}
          </p>
          <p className="job-role">Role: <span>{role}</span></p>
          <p className="job-description">{description}</p>

          <div className="job-section">
            <h3>Responsibilities:</h3>
            <ul>
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="job-section">
            <h3>Requirements:</h3>
            <ul>
              {requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="job-email">
            <span className="icon">✉️</span> Apply at:{" "}
            <a href={`mailto:${email}`} className="apply-link">
              {email}
            </a>
          </p>
          {/* <button className="apply-btn">Apply Now</button> */}
        </div>
      )}
    </div>
  );
};

const CareerBody = () => {
  return (
    <div className="careers-page">
      <style>
        {`
          /* Global Styles */
          body {
            margin: 0;
            font-family: 'Orbitron', 'Poppins', sans-serif;
            background: #f5f7fa;
            color: #0f172a;
            overflow-x: hidden;
          }

          /* Full-Width Panoramic Header */
          .careers-page {
            padding: 0 0 80px 0;
            max-width: 100%;
            margin: 0;
            position: relative;
            overflow-x: hidden;
          }

          .header-banner {
    text-align: center;
    padding: 80px 20px;
  
    background: linear-gradient(to bottom right, rgba(115, 150, 211, 0.9), rgba(0, 37, 84, 0.8)), 
                url(${bannerImage}); /* Replace with your image path */
    background-size: cover;
    background-position: center;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    position: relative;
    z-index: 1;
}

          .page-title {
            font-size: 48px;
            font-weight: 700;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 3px;
            text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
          }

          .tagline {
            font-size: 22px;
            font-family: 'Poppins', sans-serif;
            margin-top: 20px;
            opacity: 0.95;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          /* Vertically Stacked Job List */
          .job-list-container {
            max-width: 1000px;
            margin: 60px auto;
            padding: 0 20px;
          }

          .job-list {
            display: flex;
            flex-direction: column;
            gap: 35px;
          }

          .job-card {
            background: #fff;
            border-radius: 15px;
            padding: 17px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
          }

          .job-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(155, 195, 255, 0.15), transparent);
            
            transition: all 0.5s ease;
            z-index: -1;
          }

          .job-card:hover::before {
            transform: scale(1.2);
          }

          .job-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          }

          .job-card.expanded {
            border-left: 5px solidrgb(0, 0, 0);
          }

          .job-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .job-title {
            font-size: 18px;
            font-weight: 600;
            color: #1e40af;
            margin: 0;
            transition: color 0.3s ease;
             
          }

          // .job-header:hover .job-title {
          //   color:rgb(111, 156, 255);
          // }

          .toggle-icon {
            font-size: 15px;
            color: #64748b;
            transition: transform 0.3s ease;
          }

          .job-card.expanded .toggle-icon {
            transform: rotate(45deg);
          }

          .job-details {
            margin-top: 25px;
            animation: fadeSlide 0.4s ease-out;
          }

          @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .job-location {
            color: #64748b;
            font-size: 16px;
            margin-bottom: 15px;
          }

          .icon {
            font-size: 10px;
            margin-right: 6px;
          }

          .job-role {
            font-weight: 600;
            color: #1e40af;
            margin-bottom: 15px;
          }

          .job-role span {
            font-weight: 400;
            color: #334155;
          }

          .job-description {
            color: #475569;
            line-height: 1.8;
            margin-bottom: 25px;
            font-family: 'Poppins', sans-serif;
          }

          .job-section h3 {
            font-size: 20px;
            font-weight: 600;
            color: #1e40af;
            margin-bottom: 15px;
          }

          .job-section ul {
            padding-left: 25px;
            color: #475569;
            font-family: 'Poppins', sans-serif;
          }

          .job-section li {
            margin-bottom: 10px;
            position: relative;
          }

          .job-section li::before {
            content: '→';
            color: #10b981;
            position: absolute;
            left: -20px;
          }

          .job-email {
            margin-top: 25px;
            font-weight: 600;
            color: #334155;
            display: flex;
            align-items: center;
          }

          .apply-link {
            color: #3b82f6;
            text-decoration: none;
            margin-left: 5px;
            transition: color 0.3s ease;
          }

          .apply-link:hover {
            color: #1e40af;
            text-decoration: underline;
          }

          .apply-btn {
            margin-top: 15px;
            padding: 10px 25px;
             background:rgb(255, 255, 255);
            color: rgb(75, 132, 216);
            border: solid;
            border-width: 1px;
            border-radius: 25px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s ease, transform 0.2s ease;
            
          }

          .apply-btn:hover {
             background:rgb(75, 132, 216);
             color: rgb(255, 255, 255);
            transform: scale(1.05);
          }
        `}
      </style>

      {/* Full-Width Panoramic Header */}
      <div className="header-banner">
        <h3 className="page-title">Launch Your Future</h3>
        <p className="tagline">Join Global Spark Tek Solutions to Innovate, Create, and Celebrate Impact</p>
      </div>

      {/* Vertically Stacked Job Listings */}
      <div className="job-list-container">
        <div className="job-list">
          <JobCard
            title="Sales and Marketing Intern"
            location="Hyderabad, India"
            type="Full-time"
            role="Sales and Marketing Intern"
            description="Step into a dynamic role where creativity meets strategy. Harness AI tools and spark connections that drive growth."
            responsibilities={[
              "Scout companies and decision-makers for outreach",
              "Curate targeted lead lists in our CRM",
              "Launch personalized campaigns via LinkedIn and email",
              "Engage prospects to secure meetings",
              "Assist in scheduling demos for the sales crew",
              "Design compelling email and SEO content",
              "Experiment with AI to supercharge marketing",
              "Master digital marketing trends and tactics",
            ]}
            requirements={[
              "MBA in Sales/Marketing (bonus, not a must)",
              "Fluent English communication skills",
              "Curious, proactive, and ready to dive in",
              "A collaborator who shines solo too",
            ]}
            email="careers@globalsparktek.com"
          />

          <JobCard
            title="Apex Developer"
            location="Hyderabad, India"
            type="Full-time"
            role="Oracle Apex Developer"
            description="Code the future of our Oracle ecosystem with innovative, scalable solutions."
            responsibilities={[
              "Craft Apex classes, triggers, and Visualforce magic",
              "Team up to decode business needs",
              "Build custom Oracle tools",
              "Tune code for peak performance",
              "Live the full dev lifecycle",
              "Lock in security and best practices",
              "Write specs and guide users",
            ]}
            requirements={[
              "CS/Engineering degree or equivalent",
              "1+ years rocking Apex and Lightning",
              "Oracle flows know-how",
              "Certification? Even better",
              "Sharp problem-solving chops",
            ]}
            email="careers@globalsparktek.com"
          />

          <JobCard
            title="React Developer"
            location="Hyderabad, India"
            type="Full-time"
            role="React Developer"
            description="Build sleek, responsive interfaces that users love in a team that pushes boundaries."
            responsibilities={[
              "Shape UI with React.js wizardry",
              "Code clean, scalable solutions",
              "Bring designs to life with precision",
              "Sync with APIs and backend pros",
              "Boost app speed and smoothness",
              "Keep up with frontend frontiers",
            ]}
            requirements={[
              "CS degree or similar",
              "1+ years mastering React.js",
              "JS, HTML5, CSS3 fluency",
              "Redux or Context API skills",
              "Git and API integration experience",
            ]}
            email="careers@globalsparktek.com"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerBody;