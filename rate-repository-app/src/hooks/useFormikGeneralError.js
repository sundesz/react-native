import React from 'react';
import ErrorComponent from '../components/helpers/ErrorComponent';

const useFormikGeneralError = () => {
  const [error, setError] = React.useState(null);

  const DisplayError = () => {
    if (error) {
      return <ErrorComponent errorMessage={error} />;
    }
  };

  return [setError, DisplayError];
};

export default useFormikGeneralError;
