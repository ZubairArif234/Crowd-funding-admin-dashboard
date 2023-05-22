import React from 'react'
import {
    Row, Col
} from 'react-bootstrap'
// import { UploadOutlined } from '@ant-design/icons';
import { Upload, Popover,message } from 'antd';
// import ImgCrop from 'antd-img-crop';
import { useState } from 'react';





const content = (
    <div>
        <p>You can add 5 images</p>
        <p>1st image will be top image</p>
        <p>5st image will be bottom image</p>
        <p>Rest of the images will be sub images of small size </p>
    </div>
);


const Blogpagecontent = () => {
    const [fileList, setFileList] = useState([]);

  const beforeUpload = (file) => {
 
    return false; // Proceed with upload
  };

  console.log(fileList);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
    return (
        <div>

            <p className='addcreatorheading' >Add Blog</p>
            <form>
                <Row className='addcreatorformrow'>
                    <Col lg={6} className='addcreatorformcol'>

                        <label className='addcreatorlabel'>Blog Title</label>
                        <br />
                        <input className='addcreatorinput' type='text' placeholder='Enter First Name' />

                        {/* <br/>
                <label className='addcreatorlabel'>Middle Name</label>
<br/>
<input className='addcreatorinput' type='text' placeholder='Enter Middle Name'/> */}
                        <br />
                        <label className='addcreatorlabel'>Author </label>
                        <br />
                        <input className='addcreatorinput' type='text' placeholder='Enter Last Name' />
                        <br />
                        <label className='addcreatorlabel'>Tags</label>
                        <br />
                            <input className='addcreatorinput' type='text' placeholder='6 Tags eg: Pop,Hip Hop,Blues,... ' />
                            <br />
                        <label className='addcreatorlabel'>Blog Image  </label>
                        <Popover content={content} title="Remember"trigger="hover" >
                            <i className="fas fa-circle-info" ></i>
                        </Popover>
                        {/* </div> */}
                        <br />
                        {/* <ImgCrop rotationSlider> */}
                            <Upload
                              
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                                onPreview={onPreview}
                                beforeUpload={beforeUpload}
                            >
                                {fileList.length < 5 && '+ Upload'}
                            </Upload>
                        {/* </ImgCrop> */}
                        <br />
                        {/* <br/>
                <label className='addcreatorlabel'>Confirm Password</label>
                <br/>
                <input className='addcreatorinput' type='password' placeholder='Confirm Password'/>
                <br/>
                <label className='addcreatorlabel'>Artist/Band Name </label>
                <br/>
            <input className='addcreatorinput' type='password' placeholder='Enter Artist/Band Name'/> */}

                    </Col>

                    <Col lg={6}>
                        <label className='addcreatorlabel'>Blog Catagories</label>
                        <br />
                       <select className='addcreatorinput'>
                        <option>Select Catagories</option>
                        <option>Pop</option>
                        <option>Hip Hop</option>
                        <option>Jazz</option>
                        <option>Blues</option>
                        <option>Classicals</option>
                       </select>
                        <br />
                        <label className='addcreatorlabel'>SEO Title</label>
                        <br />
                        <input className='addcreatorinput' type='text' placeholder='Enter SEO Title' />
                        {/* <div> */}
                        <br />
                        <label className='addcreatorlabel'>SEO Keyword</label>
                        <br />
                        <input className='addcreatorinput' type='text' placeholder='Enter SEO Keyword' />
                        <br />
                        <label className='addcreatorlabel'>SEO Description</label>
                        <br />
                        {/* <input className='addcreatorinput' type='email' placeholder='Enter Email' /> */}
                        <textarea className='addcreatortextarea'  placeholder='Enter SEO Descripton...' cols={16} rows={4}></textarea>
                        {/* <br/>
                <label className='addcreatorlabel'>State</label>
                <br/>
<input className='addcreatorinput' type='text' placeholder='Enter State'/> */}
                        {/* <br />
                        <label className='addcreatorlabel'>City</label>
                        <br />
                        <input className='addcreatorinput' type='text' placeholder='Enter City' />
                        <br />
                        <label className='addcreatorlabel'>Phone no</label>
                        <br />
                        <input className='addcreatorinput' type='number' placeholder='Enter Phone no' />
                        <br />
                        <label className='addcreatorlabel'>Date of birth</label>
                        <br />
                        <input className='addcreatorinput' type='date' placeholder='Enter Phone no' /> */}
                    </Col>
                    <label className='addcreatorlabel'>Blog Content</label>
                    <textarea className='addcreatortextarea' placeholder='Add blog Content...' cols={20} rows={4}></textarea>
                    <button className='addcreatorsubmitbtn'>Submit</button>
                </Row>
            </form>
        </div>
    )
}

export default Blogpagecontent