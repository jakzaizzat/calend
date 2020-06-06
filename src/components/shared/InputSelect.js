import React, { forwardRef } from "react";

const InputSelect = forwardRef(
  ({ label, id, onChange, value, options = [], register }, ref) => {
    return (
      <label className="block mb-3">
        <span className="text-gray-700">{label}</span>
        <select
          id={id}
          name={id}
          value={value}
          ref={register}
          className="form-select focus:outline-none focus:shadow-outline-blue text-sm mt-1 block w-full"
          onChange={onChange}
        >
          {options.map(option => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
          >
        </select>
      </label>
    );
  }
);

export default InputSelect;
