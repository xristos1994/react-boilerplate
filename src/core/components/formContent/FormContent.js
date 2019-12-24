import React from 'react';
import { Field } from 'react-final-form';
import Grid from '@material-ui/core/Grid';

const FormContent = ({ errors, content }) => {
  return (
    <>
      <h1>{content.title}</h1>
      {content.fields.map((field, index) => (
        <Grid item xs={12} key={index}>
          <Field
            name={field.name}
            validate={field.validate}
            type={field.props.type}
          >
            {({ input, meta }) => {
              return (
                <field.component
                  error={errors[input.name] && meta.touched}
                  field={field}
                  input={input}
                  meta={meta}
                />
              );
            }}
          </Field>
        </Grid>
      ))}
    </>
  );
};

export default FormContent;
