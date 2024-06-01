import "./FormStyles.css";

import React, { useState } from "react";

const ControlledForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formState.name.trim()) {
      errors.name = "Name is required!";
    }

    if (!formState.age.trim()) {
      errors.age = "Age is required";
    } else if (isNaN(formState.age)) {
      errors.age = "Age must be a number";
    }

    if (!formState.password.trim()) {
      errors.password = "Password is required";
    } else if (formState.password.trim().length < 6) {
      errors.password = "Password must be at lease 6  characters";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    console.log("Form submitted:", formState);
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          className={errors.name ? "error" : ""}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label>Age:</label>
        <input
          type="age"
          name="age"
          value={formState.age}
          onChange={handleChange}
          className={errors.age ? "error" : ""}
        />
        {errors.age && <span className="error-message">{errors.age}</span>}
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
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

export default ControlledForm;
