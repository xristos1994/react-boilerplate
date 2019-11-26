import React from "react";
import { Field } from "react-final-form";

import { CustomTextField, CustomCheckbox } from "./components";

const fieldTypeMap = {
  TextField: "text",
  Checkbox: "checkbox",
};

const FormContent = ({ errors, content }) => {
  return (
    <>
      <h1>{content.title}</h1>
      {content.fields.map((field, index) => (
        <Field
          key={index}
          name={field.name}
          validate={field.validate}
          type={fieldTypeMap[field.component]}
        >
          {({ input, meta }) => {
            return (
              (field.component === "TextField" && (
                <CustomTextField
                  error={errors[input.name] && meta.touched}
                  field={field}
                  input={input}
                  meta={meta}
                />
              )) ||
              (field.component === "Checkbox" && (
                <CustomCheckbox field={field} input={input} />
              ))
            );
          }}
        </Field>
      ))}
    </>
  );
};

export default FormContent;
