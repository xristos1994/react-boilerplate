import React from 'react';
import { Form } from 'react-final-form';
import Button from '@material-ui/core/Button';

import { FormContent } from '@core/components';
import { loginFormContent } from './utils';
import { withProps } from '@core/utils/props';
import { coreAuth_login } from '@core/models/authentication/props';

const LoginForm = ({ coreAuth_login }) => {
  const onSubmit = values => coreAuth_login({ body: { ...values } });

  return (
    <Form
      onSubmit={onSubmit}
      validate={false}
      render={({ handleSubmit, submitting, valid, errors }) => (
        <form onSubmit={handleSubmit}>
          <FormContent errors={errors} content={loginFormContent} />
          <div className="buttons">
            <Button
              variant="contained"
              color="primary"
              onClick={event => {
                event.preventDefault();
                handleSubmit();
              }}
              disabled={submitting}
            >
              Log In
            </Button>
          </div>
        </form>
      )}
    />
  );
};

export default withProps({
  coreAuth_login,
})(LoginForm);
