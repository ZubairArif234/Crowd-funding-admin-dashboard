import React, { useState } from 'react';
import { Upload, Popover, message } from 'antd';
import content from '../../content.js'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const contentpopover = (
  <div>
    <p>You can add 5 images</p>
    <p>1st image will be top image</p>
    <p>5th image will be bottom image</p>
    <p>Rest of the images will be sub-images of small size</p>
  </div>
);

const Editallfrontpagescontent = () => {
  const [inputValues, setInputValues] = useState(content[0].contentofpage);

  const handleInputChange = (key, value) => {
    setInputValues(prevState => ({
      ...prevState,
      [key]: value
    }));
    console.log(inputValues)
  };

  const renderInputs = () => {
    return Object.entries(inputValues).map(([key, value]) => (
      <Col lg={6} key={key}>
        <label className='addcreatorlabel' htmlFor={key}>{key}</label>
        <input
        className='addcreatorinput'
          type="text"
          id={key}
          value={value}
          onChange={(e) => handleInputChange(key, e.target.value)}
        />
      </Col>
    ));
  };

  return (
    <Row>
       <p className='addcreatorheading'>Home frontend page settings</p>
      {renderInputs()}
      <button className='addcreatorsubmitbtn'> Saves Changes</button>
    </Row>
  );
};

export default Editallfrontpagescontent;
