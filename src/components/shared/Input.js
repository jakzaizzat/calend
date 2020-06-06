import React from "react";

const Input = ({
  id,
  label,
  value,
  type = "text",
  placeholder,
  onChange,
  register,
  required
}) => {
  return (
    <>
      <div className="mb-3">
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          {label}
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            ref={register}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
