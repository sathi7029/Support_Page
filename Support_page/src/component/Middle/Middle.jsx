import React, { useState } from "react";
import axios from "axios";
import "./Middle.css";

function Middle() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(import.meta.env.VITE_BAPI, formData)
      .then((response) => {
        console.log("Data submitted successfully:", response.data);

        setFormData({
          name: "",
          email: "",
          title: "",
          description: "",
        });

        window.alert("Data submitted successfully!");
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        window.alert("Error submitting data. Please try again.");
      });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="sform">
        <label htmlFor="name" className="label f">
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          className="input f"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email" className="label f">
          Your Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          className="input f"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="title" className="label f">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter Your Message"
          className="input f"
          value={formData.title}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="description" className="label f">
          Describe Your Issue:
        </label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          className="input f"
          placeholder="Describe your Issue"
          value={formData.description}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Middle;
