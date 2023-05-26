import * as Yup from 'yup';

export const loginscheemas = Yup.object({
  email: Yup.string().email().required('Please Enter Email'),
  password: Yup.string().required('Please Enter password'),
  
});


