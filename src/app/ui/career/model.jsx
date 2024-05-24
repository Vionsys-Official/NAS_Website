"use client"
import React, { useState } from 'react';
import { Modal, Button, Form, Input, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Formik, Field, ErrorMessage } from 'formik';
import { JobSchema } from '@/utils/CardSchema';

const model = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const initialValues = {
    username: '',
    email: '',
    phone: '',
    jobProfile: '',
    resume: null,
  };

  const handleSubmit = (values) => {
    console.log('Form data', values);
    setVisible(false); // Close the modal on form submission
  };

  const handleFileChange = (setFieldValue, file) => {
    if (file.file.status === 'done') {
      setFieldValue('resume', file.file.originFileObj);
    } else if (file.file.status === 'removed') {
      setFieldValue('resume', null);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Register
      </Button>
      <Modal
        title="Register"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={JobSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form onFinish={handleSubmit}>
              <Form.Item name="username" label="Username">
                <Field name="username" as={Input} />
                <ErrorMessage name="username" component="div" className="error-message" />
              </Form.Item>
              <Form.Item name="email" label="Email">
                <Field name="email" as={Input} type="email" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </Form.Item>
              <Form.Item name="phone" label="Phone">
                <Field name="phone" as={Input} />
                <ErrorMessage name="phone" component="div" className="error-message" />
              </Form.Item>
              <Form.Item name="jobProfile" label="Job Profile">
                <Field name="jobProfile" as={Input} />
                <ErrorMessage name="jobProfile" component="div" className="error-message" />
              </Form.Item>
              <Form.Item name="resume" label="Resume">
                <Upload
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  beforeUpload={() => false}
                  onChange={(info) => handleFileChange(setFieldValue, info)}
                >
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                <ErrorMessage name="resume" component="div" className="error-message" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default model;