import React from "react";

const FormField = ({ labelFor, placement, placeHold }) => {
  return (
    <div className={`form_field ${placement}`}>
      <input
        type="email"
        className="form_field_email"
        placeholder={placeHold}
      />
      <label className="form_field_label heading-4" htmlFor={labelFor}>
        {labelFor}
      </label>
    </div>
  );
};

export default FormField;
