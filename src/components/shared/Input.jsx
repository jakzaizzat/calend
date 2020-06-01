import React from "react";

const Input = ({
  id,
  label,
  value,
  type = "text",
  placeholder = "",
  onChange
}) => {
  return (
    <>
      <label htmlFor={id} className="block mb-3">
        <span className="text-gray-700">{label}</span>
        <input
          id={id}
          name={id}
          type={type}
          className="form-input mt-1 block w-full"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default Input;
