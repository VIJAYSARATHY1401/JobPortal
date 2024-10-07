import React, { useState } from "react";

const JobApplicationForm = ({ onClose, onApply }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);
  const [governmentQuota, setGovernmentQuota] = useState(false);
  const [allowance, setAllowance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      resume,
      governmentQuota,
      allowance,
    };
    onApply(formData);
    onClose(); // Close the form after submission
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="p-4">
        <h2 className="text-xl font-bold mb-4">Job Application Form</h2>

        <label htmlFor="name" className="block mt-2">
          Name:
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 rounded p-2 w-full"
          />
        </label>

        <label htmlFor="email" className="block mt-2">
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded p-2 w-full"
          />
        </label>

        <label htmlFor="phone" className="block mt-2">
          Phone:
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="border border-gray-300 rounded p-2 w-full"
          />
        </label>

        <label htmlFor="resume" className="block mt-2">
          Resume:
          <input
            type="file"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
            required
            className="border border-gray-300 rounded p-2 w-full"
          />
        </label>

        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            id="governmentQuota"
            checked={governmentQuota}
            onChange={(e) => setGovernmentQuota(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="governmentQuota">
            Are you applying under a government quota?
          </label>
        </div>

        <label htmlFor="allowance" className="block mt-2">
          Other Allowance:
          <input
            type="text"
            id="allowance"
            value={allowance}
            onChange={(e) => setAllowance(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </label>

        <div className="mt-4">
          <button type="submit" className="custom-btn">
            Submit Application
          </button>
          <button type="button" onClick={onClose} className="ml-2 custom-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
