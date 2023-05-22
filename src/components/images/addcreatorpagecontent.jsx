import React from 'react'

import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { useFormik } from 'formik'
import { addcreatorschemas } from '../../scheemas/addcreatorschema'

import '../../addcreator.css'

const initialValues = {
  first_name: '',
  middle_name: '',
  last_name: '',
  artist_name: '',
  email: '',
  password: '',
  confirm_password: '',
  country: '',
  state: '',
  city: '',
  zip_code: '',
  phone_no: '',
  birthdate: '',
  language: '',
  nationality: '',
  music: '',
  facebook_url: '',
  instagram_url: '',
  twitter_url: '',
  website_url: '',
  address: '',
  private_policy: '',
  terms_conditions: '',

}
const Addcreatorpagecontent = () => {

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: initialValues,
    validationSchema: addcreatorschemas,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm(); // Reset the form values
    },
  });
  // console.log(Formik)

  const country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
  const nationality = ['Afghan',
    'Albanian',
    'Algerian',
    'American',
    'Andorran',
    'Angolan',
    'Antiguans',
    'Argentinean',
    'Armenian',
    'Australian',
    'Austrian',
    'Azerbaijani',
    'Bahamian',
    'Bahraini',
    'Bangladeshi',
    'Barbadian',
    'Barbudans',
    'Batswana',
    'Belarusian',
    'Belgian',
    'Belizean',
    'Beninese',
    'Bhutanese',
    'Bolivian',
    'Bosnian',
    'Brazilian',
    'British',
    'Bruneian',
    'Bulgarian',
    'Burkinabe',
    'Burmese',
    'Burundian',
    'Cambodian',
    'Cameroonian',
    'Canadian',
    'Cape Verdean',
    'Central African',
    'Chadian',
    'Chilean',
    'Chinese',
    'Colombian',
    'Comoran',
    'Congolese',
    'Costa Rican',
    'Croatian',
    'Cuban',
    'Cypriot',
    'Czech',
    'Danish',
    'Djibouti',
    'Dominican',
    'Dutch',
    'East Timorese',
    'Ecuadorean',
    'Egyptian',
    'Emirian',
    'Equatorial Guinean',
    'Eritrean',
    'Estonian',
    'Ethiopian',
    'Fijian',
    'Filipino',
    'Finnish',
    'French',
    'Gabonese',
    'Gambian',
    'Georgian',
    'German',
    'Ghanaian',
    'Greek',
    'Grenadian',
    'Guatemalan',
    'Guinea-Bissauan',
    'Guinean',
    'Guyanese',
    'Haitian',
    'Herzegovinian',
    'Honduran',
    'Hungarian',
    'I-Kiribati',
    'Icelander',
    'Indian',
    'Indonesian',
    'Iranian',
    'Iraqi',
    'Irish',
    'Israeli',
    'Italian',
    'Ivorian',
    'Jamaican',
    'Japanese',
    'Jordanian',
    'Kazakhstani',
    'Kenyan',
    'Kittian and Nevisian',
    'Kuwaiti',
    'Kyrgyz',
    'Laotian',
    'Latvian',
    'Lebanese',
    'Liberian',
    'Libyan',
    'Liechtensteiner',
    'Lithuanian',
    'Luxembourger',
    'Macedonian',
    'Malagasy',
    'Malawian',
    'Malaysian',
    'Maldivan',
    'Malian',
    'Maltese',
    'Marshallese',
    'Mauritanian',
    'Mauritian',
    'Mexican',
    'Micronesian',
    'Moldovan',
    'Monacan',
    'Mongolian',
    'Moroccan',
    'Mosotho',
    'Motswana',
    'Mozambican',
    'Namibian',
    'Nauruan',
    'Nepali',
    'New Zealander',
    'Nicaraguan',
    'Nigerian',
    'Nigerien',
    'North Korean',
    'Northern Irish',
    'Norwegian',
    'Omani',
    'Pakistani',
    'Palauan',
    'Panamanian',
    'Papua New Guinean',
    'Paraguayan',
    'Peruvian',
    'Polish',
    'Portuguese',
    'Qatari',
    'Romanian',
    'Russian',
    'Rwandan',
    'Saint Lucian',
    'Salvadoran',
    'Samoan',
    'San Marinese',
    'Sao Tomean',
    'Saudi',
    'Scottish',
    'Senegalese',
    'Serbian',
    'Seychellois',
    'Sierra Leonean',
    'Singaporean',
    'Slovakian',
    'Slovenian',
    'Solomon Islander',
    'Somali',
    'South African',
    'South Korean',
    'Spanish',
    'Sri Lankan',
    'Sudanese',
    'Surinamer',
    'Swazi',
    'Swedish',
    'Swiss',
    'Syrian',
    'Taiwanese',
    'Tajik',
    'Tanzanian',
    'Thai',
    'Togolese',
    'Tongan',
    'Trinidadian/Tobagonian',
    'Tunisian',
    'Turkish',
    'Tuvaluan',
    'Ugandan',
    'Ukrainian',
    'Uruguayan',
    'Uzbekistani',
    'Venezuelan',
    'Vietnamese',
    'Welsh',
    'Yemenite',
    'Zambian',
    'Zimbabwean']

  return (
    <div>
      <p className='addcreatorheading'>Create New Creator</p>

      <form onSubmit={handleSubmit}>
        <Row className='addcreatorformrow'>
          <Col lg={6} className='addcreatorformcol'>

            <label className='addcreatorlabel' htmlFor='first_name'>First Name</label>
            <br />
            <input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.first_name} name='first_name' id='first_name' type='text' placeholder='Enter First Name' />
            {errors.first_name && touched.first_name ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.first_name}</span> : null}

            <br />
            <label className='addcreatorlabel' htmlFor='middle_name'>Middle Name</label>
            <br />
            <input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.middle_name} name='middle_name' id='middle_name' type='text' placeholder='Enter Middle Name' />
            {errors.middle_name ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.middle_name}</span> : null}
            <br />
            <label className='addcreatorlabel' htmlFor='last_name'>Last Name</label>
            <br />
            <input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.last_name} name='last_name' id='last_name' type='text' placeholder='Enter Last Name' />
            {errors.last_name && touched.last_name ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.last_name}</span> : null}
            <br />
            <label className='addcreatorlabel' htmlFor='artist_name'>Artist/Band Name</label>
            <br />
            <input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.artist_name} name='artist_name' id='artist_name' type='text' placeholder='Enter Tittle' />
            {errors.artist_name && touched.artist_name ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.artist_name}</span> : null}
            <br />
            <label className='addcreatorlabel' htmlFor='email'>Email</label>
            <br />
            <input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.email} name='email' id='email' type='email' placeholder='Enter Email' />
            {errors.email && touched.email ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.email}</span> : null}
            <br />
            <label className='addcreatorlabel' htmlFor='password'>Password</label>
            <br />
            <input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.password} name='password' id='password' type='password' placeholder='Enter Password' />
            {errors.password && touched.password ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.password}</span> : null}
            <br />
            <label className='addcreatorlabel' htmlFor='confirm_password'>Confirm Password</label>
            <br />
            <input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.confirm_password} name='confirm_password' id='confirm_password' type='password' placeholder='Confirm Password' />
            {errors.confirm_password && touched.confirm_password ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.confirm_password}</span> : null}
            <br />
            <label className='addcreatorlabel' htmlFor='country'>Country of Residency</label>
            <br />
            <select className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.country} name='country' id='country'>
              <option>Select country</option>
              {country_list.map((value, key) => {
                return (
                  <option key={key}>{value}</option>
                )
              })}
            </select>
            {errors.country && touched.country ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.country}</span> : null}
            <br />
            <label className='addcreatorlabel' htmlFor='state'>State/Province/Region</label>
            <br />
            <input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.state} name='state' id='state' type='text' placeholder='State/Province/Region' />
            {errors.state && touched.state ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.state}</span> : null}
            <br />
            <label className='addcreatorlabel' htmlFor='city'>City</label>
            <br />
            <input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.city} name='city' id='city' type='text' placeholder='City' />
            {errors.city && touched.city ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.city}</span> : null}


          </Col>

          <Col lg={6}>
            <label className='addcreatorlabel' htmlFor='zip_code'>Postal/Zip code </label>
            <br />
            <input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.zip_code} name='zip_code' id='zip_code' type='text' placeholder='Postal/Zip code ' />
            {errors.zip_code && touched.zip_code ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.zip_code}</span> : null}
            <br />

            <label className='addcreatorlabel' htmlFor='phone_no'>Phone no</label>
            <br />
            <input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.phone_no} name='phone_no' id='phone_no' type='number' placeholder='Phone no ' />
            {errors.phone_no && touched.phone_no ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.phone_no}</span> : null}

            <br />
            <label className='addcreatorlabel' onChange={handleChange} onBlur={handleBlur} htmlFor='birthdate'>Date of birth</label>
            {/* {errors.first_name ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.first_name}</span> : null} */}
            <br />
            <input className='addcreatorinput' value={values.birthdate} onChange={handleChange} onBlur={handleBlur} name='birthdate' id='birthdate' type='date' placeholder='Enter City' />
            {errors.birthdate && touched.birthdatei ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.birthdate}</span> : null}
            <br />
            <label className='addcreatorlabel' htmlFor='language'>Language Preferred </label>
            <br />
            <select className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.language} name='language' id='language'>
              <option>Select Language</option>
              <option>English </option>
              <option>Urdu</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
            {errors.language && touched.language ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.language}</span> : null}
            <br />
            <label className='addcreatorlabel' htmlFor='nationality'>Nationality</label>
            <br />
            <select className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.nationality} name='nationality' id='nationality'>
              <option>Select country</option>
              {nationality.map((value, key) => {
                return (
                  <option key={key}>{value}</option>
                )
              })}
            </select>
            {errors.nationality && touched.nationality ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.nationality}</span> : null}
            <br />
            <label className='addcreatorlabel' htmlFor='music'>Music Genre's</label>
            <br />
            <select className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.music} name='music' id='music'>
              {/* {errors.first_name ? <span style={{color:'red' ,fontSize:'13px'}}>{errors.first_name}</span> : null} */}
              <option>Select Music Genre's</option>
              <option>Rock </option>
              <option>POP</option>
              <option>Hip Hop </option>
              <option>Classic</option>
              <option>Blues</option>
              <option>Jazz</option>
            </select>
            {errors.music && touched.music ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.music}</span> : null}
            <br />
            <label className='addcreatorlabel' htmlFor='facebook_url'>Facebook Profile URL  </label>
            <br />
            <input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.facebook_url} name='facebook_url' id='facebook_url' type='url' placeholder='Enter Facebook link ' />
            {errors.facebook_url && touched.facebook_url ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.facebook_url}</span> : null}
            <br />
            <label className='addcreatorlabel' htmlFor='instagram_url'>Instagram Profile URL   </label>
            <br />
            <input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.instagram_url} name='instagram_url' id='instagram_url' type='url' placeholder='Enter Instagram link ' />
            {errors.instagram_url && touched.instagram_url ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.instagram_url}</span> : null}
            <br />
            <label className='addcreatorlabel' htmlFor='twitter_url'>Twitter Profile URL </label>
            <br />
            <input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.twitter_url} name='twitter_url' id='twitter_url' type='url' placeholder='Enter Twitter link ' />
            {errors.twitter_url && touched.twitter_url ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.twitter_url}</span> : null}
            <br />
            <label className='addcreatorlabel' htmlFor='website_url'>Website URL </label>
            <br />
            <input className='addcreatorinput' onChange={handleChange} onBlur={handleBlur} value={values.website_url} name='website_url' id='website_url' type='url' placeholder='Enter Website link ' />
            {errors.website_url && touched.website_url ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.website_url}</span> : null}
          </Col>
          <label className='addcreatorlabel' htmlFor='address'>Street Address</label>
          <br />
          <textarea className='addcreatortextarea' onChange={handleChange} onBlur={handleBlur} value={values.address} name='address' id='address' placeholder='Street Address...' cols={20} rows={4}></textarea>
          {errors.address && touched.address ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.address}</span> : null}
          <br />
          <div>
            <input id='private_policy' onChange={handleChange} onBlur={handleBlur} value={values.private_policy} name='private_policy' type='checkbox' style={{ marginRight: '10px' }} />

            <label htmlFor='private_policy' style={{ fontFamily: 'Rubik' }}>Accept Terms and conditions</label>
            {errors.private_policy && touched.private_policy ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.private_policy}</span> : null}
            <br />
            <input htmlFor='terms_conditions' onChange={handleChange} onBlur={handleBlur} value={values.terms_conditions} name='terms_conditions' type='checkbox' style={{ marginRight: '10px' }} />

            <label id='terms_conditions' style={{ fontFamily: 'Rubik' }}>Agree to the Privacy Policy</label>
            {errors.terms_conditions && touched.terms_conditions ? <span style={{ color: 'red', fontSize: '13px' }}>{errors.terms_conditions}</span> : null}

          </div>
          <button className='addcreatorsubmitbtn' type='submit'>Submit</button>
        </Row>
      </form>
    </div>
  )
}

export default Addcreatorpagecontent