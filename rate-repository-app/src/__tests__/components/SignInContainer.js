import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignIn/SignInContainer';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const submitHandler = jest.fn();
      const { getByTestId } = render(
        <SignInContainer submitHandler={submitHandler} />
      );

      fireEvent.changeText(getByTestId('usernameField'), 'kalle');
      fireEvent.changeText(getByTestId('passwordField'), 'password');
      fireEvent.press(getByTestId('submitButton'));

      await waitFor(() => {
        expect(submitHandler).toHaveBeenCalledTimes(1);

        expect(submitHandler.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        });
      });

      expect(1).toBe(1);
    });
  });
});
