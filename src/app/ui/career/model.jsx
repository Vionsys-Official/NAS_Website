"use client"
import React, { useState } from 'react';
import { Modal, Button, Form, Input, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Formik, Field, ErrorMessage } from 'formik';
import { JobSchema } from '@/utils/CardSchema';

const model = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
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
    setOpen(false); // Close the modal on form submission
  };

  const handleFileChange = (setFieldValue, info) => {
    if (info.file.status === 'done' || info.file.status === 'removed') {
      setFieldValue('resume', info.fileList.length ? info.fileList[0].originFileObj : null);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Register
      </Button>
      <Modal
        title="Register"
        open={open}
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
            <Form.Item label="Username">
              <Field name="username">
                {({ field }) => <Input {...field} />}
              </Field>
              <ErrorMessage name="username" component="div" className="error-message" />
            </Form.Item>
            <Form.Item label="Email">
              <Field name="email">
                {({ field }) => <Input {...field} type="email" />}
              </Field>
              <ErrorMessage name="email" component="div" className="error-message" />
            </Form.Item>
            <Form.Item label="Phone">
              <Field name="phone">
                {({ field }) => <Input {...field} />}
              </Field>
              <ErrorMessage name="phone" component="div" className="error-message" />
            </Form.Item>
            <Form.Item label="Job Profile">
              <Field name="jobProfile">
                {({ field }) => <Input {...field} />}
              </Field>
              <ErrorMessage name="jobProfile" component="div" className="error-message" />
            </Form.Item>
            <Form.Item label="Resume">
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