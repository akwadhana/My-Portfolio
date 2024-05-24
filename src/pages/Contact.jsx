import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name is too short'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string()
      .required('Message is required')
      .min(10, 'Message is too short'),
  });

  return (
   
    <div id='contact' className="bg-black min-h-screen flex items-center justify-center">


      <div className=" p-8 rounded-lg shadow-lg max-w-md lg:w-full">
        <h1 className="text-2xl font-bold mb-text-white text-center ">I'd love to hear from you!!</h1>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setSubmitting(false);
            resetForm();
            alert('Form submitted successfully!');
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4 mt-5">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your name"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your email"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your message"
                  rows="4"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-black-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    <div>
    </div>
    </div>
  );
};

export default Contact;
