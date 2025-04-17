import styles from "./contactbody.module.css";

import React, { useState } from "react";
import axios from "axios";

export default function ContactBody() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    services: "",
    message: "",
  });
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with:", formData);

    try {
      const response = await axios.post(
        "http://localhost:5002/send-email",
        formData
      );
      console.log("Response from server:", response.data);
      alert("Email sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        services: "",
        company: "",
        message: "",
      }); 
    } catch (error) {
      console.error(
        "Error from server:",
        error.response?.data || error.message
      );
      alert("Failed to send email.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.parallaxSection}>
        <div className={styles.overlay}>
          <h2>Contact Us</h2>
          <p>We’d love to hear from you.</p>
          <p>Reach out and let’s start the conversation.</p>
        </div>

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <div className={styles.fieldContainer}>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.fieldContainer}>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <div className={styles.fieldContainer}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.fieldContainer}>
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.fieldContainer}>
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.fieldContainer}>
                <label>Services</label>
                <select
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                >
                  <option value="">---Select---</option>
                  <option value="Immediately">Immediately</option>
                  <option value="In a few months">In a few months</option>
                  <option value="This Year">This Year</option>
                </select>
              </div>
            </div>

            <div className={styles.fieldContainer}>
              <label>Message</label>
              <textarea
                placeholder="Message"
                name="message"
                style={{ width: "200%", height: "80px" }}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div>
              <button type="submit" className={styles.btn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
