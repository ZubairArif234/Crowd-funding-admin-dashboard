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

            <form>
                <Row className='addcreatorformrow'>
            <p className='addcreatorheading' >Add Blog</p>
                    <Col lg={6} className='addcreatorformcol'>

                        <label className='addcreatorlabel'>Blog Title</label>
                        <br />
                        <input className='addcreatorinput' type='text' placeholder='Enter First Name' />

                       
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
                        
                        <br />
                        
                            <Upload
                              
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                                onPreview={onPreview}
                                beforeUpload={beforeUpload}
                            >
                                {fileList.length < 5 && '+ Upload'}
                            </Upload>
                      
                      

                    </Col>

                    <Col lg={6}>
                        <label className='addcreatorlabel'>Blog Catagories</label>
                        <br />
                       <select className='addcreatorinput'>
                        <option style={{padding:'5px'}}>Select Catagories</option>
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
                        
                        <br />
                        <label className='addcreatorlabel'>SEO Keyword</label>
                        <br />
                        <input className='addcreatorinput' type='text' placeholder='Enter SEO Keyword' />
                        <br />
                        <label className='addcreatorlabel'>SEO Description</label>
                        <br />
                       
                        <textarea className='addcreatortextarea'  placeholder='Enter SEO Descripton...' style={{marginLeft:'0px'}} cols={16} rows={4}></textarea>
                      
                    </Col>
                    <label className='addcreatorlabel'>Blog Content</label>
                    <textarea className='addcreatortextarea' placeholder='Add blog Content...' cols={20} rows={4}></textarea>
                    <div style={{display:'flex', justifyContent:'flex-end'}}>


<button className='addcreatorsubmitbtn' type='submit' onClick={(e)=>e.preventDefault()}>Create Blog</button>
</div>
                </Row>
            </form>
        </div>
    )
}

export default Blogpagecontent