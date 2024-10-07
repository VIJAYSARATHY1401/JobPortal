import React, { useEffect, useState } from "react";
import "./ProfileDashboard.css"; // Optional: For styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faFileUpload,
  faCheckCircle,
  faFlag,
  faClipboardList,
  faCogs,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const ProfileDashboard = () => {
  const [user, setUser] = useState({});
  const [resume, setResume] = useState(null);
  const [governmentQuota, setGovernmentQuota] = useState(false);
  const [allowance, setAllowance] = useState("");
  const [disabilityType, setDisabilityType] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const profileData = JSON.parse(localStorage.getItem("profileData"));
    if (userData) {
      setUser(userData);
    }
    if (profileData) {
      setGovernmentQuota(profileData.governmentQuota || false);
      setAllowance(profileData.allowance || "");
      setDisabilityType(profileData.disabilityType || "");
      setExperience(profileData.experience || "");
      setSkills(profileData.skills || "");
      setResume(profileData.resume ? { name: profileData.resume } : null);
    }
  }, []);

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setResume(file);
      setMessage("");
    } else {
      setMessage("Please upload a valid PDF file.");
    }
  };

  const handleSave = () => {
    setLoading(true); // Start loading
    const profileData = {
      ...user,
      governmentQuota,
      allowance,
      resume: resume ? resume.name : null,
      disabilityType,
      experience,
      skills,
    };
    localStorage.setItem("profileData", JSON.stringify(profileData));
    setTimeout(() => {
      setLoading(false); // Stop loading after a delay to simulate an API call
      setMessage("Profile updated successfully!");
    }, 1000); // Simulating a 1-second save time
  };

  return (
    <div className="profile-container">
      <h2>
        Profile Dashboard <FontAwesomeIcon icon={faUser} className="icon" />
      </h2>
      <h3>
        <FontAwesomeIcon icon={faUser} className="icon" />
        Name: {user.name || "Not available"}
        <span className="badge">{user.name ? "Active" : "Guest"}</span>
      </h3>
      <h3>
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        Email: {user.email || "Not available"}
        <span className="badge">{user.email ? "Verified" : "Unverified"}</span>
      </h3>
      {message && (
        <p className="message">
          <FontAwesomeIcon icon={faCheckCircle} className="icon" /> {message}
        </p>
      )}
      {loading && <p className="loading">Saving...</p>} {/* Loading state */}
      <div className="field">
        <h4>
          <FontAwesomeIcon icon={faFileUpload} className="icon" /> Resume:
        </h4>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleResumeUpload}
        />
        {resume && <p>Uploaded Resume: {resume.name}</p>}
      </div>
      <div className="field">
        <label>
          <input
            type="checkbox"
            checked={governmentQuota}
            onChange={(e) => setGovernmentQuota(e.target.checked)}
          />
          <FontAwesomeIcon icon={faFlag} className="icon" />
          Applying under government quota
        </label>
      </div>
      <div className="field">
        <label>
          <FontAwesomeIcon icon={faClipboardList} className="icon" />
          Other Allowance:
          <input
            type="text"
            value={allowance}
            onChange={(e) => setAllowance(e.target.value)}
          />
        </label>
      </div>
      <div className="field">
        <label htmlFor="disabilityType">
          <FontAwesomeIcon icon={faCogs} className="icon" />
          Type of Disability:
        </label>
        <select
          id="disabilityType"
          value={disabilityType}
          onChange={(e) => setDisabilityType(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="visual">Visual Impairment</option>
          <option value="hearing">Hearing Impairment</option>
          <option value="mobility">Mobility Impairment</option>
          <option value="cognitive">Cognitive Impairment</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="field">
        <label>
          <FontAwesomeIcon icon={faClipboardList} className="icon" />
          Work Experience (in years):
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            min="0"
          />
        </label>
      </div>
      <div className="field">
        <label>
          <FontAwesomeIcon icon={faClipboardList} className="icon" />
          Skills:
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="e.g. Java, React, Python"
          />
        </label>
      </div>
      <button onClick={handleSave}>Save Profile</button>
    </div>
  );
};

export default ProfileDashboard;
