import "./FormStyles.css";

import React, { useRef, useState } from "react";

const UncontrolledForm = () => {
  const nameRef = useRef(null);
  const ageRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!nameRef.current.value.trim()) {
      newErrors.name = "Name is required";
    }
    if (!ageRef.current.value.trim()) {
      newErrors.age = "Age is required";
    } else if (isNaN(ageRef.current.value)) {
      newErrors.age = "Age must be a number";
    }
    if (!passwordRef.current.value.trim()) {
      newErrors.password = "Password is required";
    } else if (passwordRef.current.value.trim().length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", {
        name: nameRef.current.value,
        age: ageRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          ref={nameRef}
          className={errors.name ? "error" : ""}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input type="text" ref={ageRef} className={errors.age ? "error" : ""} />
        {errors.age && <span className="error-message">{errors.age}</span>}
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          ref={passwordRef}
          className={errors.password ? "error" : ""}
        />
        {errors.password && (
          <span className="error-message">{errors.password}</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
