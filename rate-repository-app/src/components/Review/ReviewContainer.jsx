import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import ReviewForm from './ReviewForm';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = Yup.object().shape({
  ownerName: Yup.string().required('Repository owner name is required'),
  repositoryName: Yup.string().required('Repository name is required'),
  rating: Yup.number()
    .min(0, 'Rating must be minimum 0')
    .max(100, 'Rating must be maximum 100')
    .required('Rating is required'),
  text: Yup.string(),
});

const ReviewContainer = ({ reviewSubmitHandler }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={reviewSubmitHandler}
    >
      {({ handleSubmit }) => <ReviewForm reviewSubmitHandler={handleSubmit} />}
    </Formik>
  );
};

export default ReviewContainer;
