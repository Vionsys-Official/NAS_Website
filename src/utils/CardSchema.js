import * as Yup from "yup";

const JobSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(2, 'Username is too short'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Phone number is not valid'), // Assuming a 10-digit phone number
  jobProfile: Yup.string()
    .required('Job profile is required'),
  resume: Yup.mixed()
    .required('Resume is required')
    .test('fileSize', 'File too large', value => !value || (value && value.size <= FILE_SIZE))
    .test('fileFormat', 'Unsupported Format', value => !value || (value && SUPPORTED_FORMATS.includes(value.type)))
  });

export { JobSchema };