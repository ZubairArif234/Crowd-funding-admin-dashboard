import * as Yup from 'yup';

export const changesettings = Yup.object({
    website_icon: Yup.mixed().test('fileFormat', 'Invalid file format', (value) => {
        if (value) {
          const supportedFormats = ['image/jpeg', 'image/png'];
          return supportedFormats.includes(value.type);
        }
        return true; // Allow empty value if no image selected
      }),
    website_logo: Yup.mixed().test('fileFormat', 'Invalid file format', (value) => {
        if (value) {
          const supportedFormats = ['image/jpeg', 'image/png'];
          return supportedFormats.includes(value.type);
        }
        return true; // Allow empty value if no image selected
      }),
    // website_icon: Yup.string().min(2).max(10).required('Please Enter Last Name'),
    website_name:Yup.string().required('Enter website name'),
    website_description: Yup.string().max(150).required('Enter website description'),
    facebook_link:  Yup.string().url('Invalid URL format'),
    instagram_link: Yup.string().url('Invalid URL format'),
    twitter_link:  Yup.string().url('Invalid URL format'),
  
    seo_tittle: Yup.string().max(20).required('Enter SEO tittle'),
    seo_description: Yup.string().max(150).required('Enter SEO description'),
    seo_keywords: Yup.string().required('Enter SEO keywords'),
 
    private_policy: Yup.string().url('Invalid URL format').required('Enter Private policy URL'),
    terms_conditions: Yup.string().url('Invalid URL format').required('Enter Terms and Condition URL'),
 
});


