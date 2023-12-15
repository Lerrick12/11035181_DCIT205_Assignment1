import React, { useState } from 'react';
import './mgf.css';

const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    

    setFormData({
      courseName: '',
      instructorName: '',
      expectedGrade: '',
      explanation: '',
    });
  };

  return (
    <div className="MissingGradeForm">
      <h1>Report Missing Grade</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
          required
        />

        <label htmlFor="instructorName">Instructor Name:</label>
        <input
          type="text"
          id="instructorName"
          name="instructorName"
          value={formData.instructorName}
          onChange={handleChange}
          required
        />

        <label htmlFor="expectedGrade">Expected Grade:</label>
        <input
          type="text"
          id="expectedGrade"
          name="expectedGrade"
          value={formData.expectedGrade}
          onChange={handleChange}
          required
        />

        <label htmlFor="explanation">Explanation:</label>
        <textarea
          id="explanation"
          name="explanation"
          value={formData.explanation}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Report</button>
      </form>
      <p>Confirmation message will appear here after submission.</p>
    </div>
  );
}

export default MissingGradeForm;