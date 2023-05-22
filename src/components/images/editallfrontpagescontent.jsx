

import React from 'react'
import { Upload, Popover,message } from 'antd';








const content = (
    <div>
        <p>You can add 5 images</p>
        <p>1st image will be top image</p>
        <p>5st image will be bottom image</p>
        <p>Rest of the images will be sub images of small size </p>
    </div>
);


const Editallfrontpagescontent = () => {
  return (
    <div>

         <label className='addcreatorheading'>Section one</label>
         <Popover content={content} title="Remember"trigger="hover" >
                            <i className="fas fa-circle-info" ></i>
                        </Popover>
                        <br/>
                        <lable  className='addcreatorlabel'>Heading</lable>
                        <br/>
                        <input  className='addcreatorinput' placeholder='Heading'/>

    </div>
  )
}

export default Editallfrontpagescontent
 