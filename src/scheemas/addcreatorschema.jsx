import * as Yup from 'yup';

export const addcreatorschemas = Yup.object({
  first_name: Yup.string().min(2).max(10).required('Please Enter First Name'),
  middle_name: Yup.string().min(2).max(10),
  last_name: Yup.string().min(2).max(10).required('Please Enter Last Name'),
  artist_name: Yup.string().min(3).max(10).required('Please Enter Artist Name'),
  email: Yup.string().email('Invalid Email').required('Please Enter Email'),
  password: Yup.string().min(8).required('Please Enter Password At Least 8 Characters'),
  confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null], 'Password not matched'),
  country: Yup.string().required('Please Select Country'),
  state: Yup.string().required('Please Enter State'),
  city: Yup.string().required('Please Enter City'),
  zip_code: Yup.number().min(5).required('Please Enter Zip Code'),
  phone_no: Yup.number().required('Please Enter Phone Number'),
  birthdate: Yup.date()
    .required('Date of birth is required')
    .max(new Date(), 'Date of birth must be in the past')
    .test('is-adult', 'Age must be greater than 17', (value) => {
      const currentDate = new Date();
      const age = currentDate.getFullYear() - value.getFullYear();
      return age > 17;
    }),
  language: Yup.string().required('Please Select Language'),
  nationality: Yup.string().required('Please Select Nationality'),
  music: Yup.string().required('Please Select Music'),
  facebook_url: Yup.string(),
  instagram_url: Yup.string(),
  twitter_url: Yup.string(),
  website_url: Yup.string(),
  address: Yup.string().min(5).max(50).required('Please Enter Address'),
  private_policy: Yup.boolean().oneOf([true], 'You must agree to the private policy').required(),
  terms_conditions: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions').required(),
});

const validateAge = async (dateOfBirth) => {
  try {
    await addcreatorschemas.validate({ birthdate: dateOfBirth });
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dateOfBirth.getFullYear();

    // Additional logic to check age

    return age;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Usage example
const dateOfBirth = new Date('2005-05-18');

validateAge(dateOfBirth)
  .then((age) => console.log('Age:', age))
  .catch((error) => console.error('Validation error:', error.message));
