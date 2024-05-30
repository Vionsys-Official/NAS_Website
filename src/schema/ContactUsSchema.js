import * as Yup from 'yup';

const ContactSchema = Yup.object({
  fname: Yup.string().required("First Name is required").min(5, "Name must be at least 5 characters"),
  lname: Yup.string().required("Last Name is required").min(5, "Name must be at least 5 characters"),
  email: Yup.string().email("Invalid Email Address").required("Email is required"),
  number: Yup.string().matches(/^[0-9]{10}$/, "Must be a 10-digit phone number").required("Phone is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required").min(10, "Message must be at least 10 characters long")
});

export { ContactSchema };
