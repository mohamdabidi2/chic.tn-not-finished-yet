import React, { Component } from 'react';
import './fileUploader.css';
class FileUploader extends Component {
    Fileselected=(e)=>{
        this.setState({selectedFile:e.target.files[0]})
        console.log(this.state.selectedFile)
    }
    state = { 
        selectedFile:null
     }
    render() { 
        return ( 
            <div className='apercy-menu'>
<h1>Choose a file to upload</h1>
<div class="button-wrapper">
  <span class="label">
    Upload File
  </span>
  
    <input type="file" name="upload" id="upload" onChange={this.Fileselected} class="upload-box" placeholder="Upload File"/>
  
</div>
<p>Accepted File Types (Max size: 10mb)</p>
<div className='type-of-images'>
    <p className='typesss' >.JPG</p>
    <p className='typesss' >.JPEG</p>
    <p className='typesss' >.PNG</p>
    <p className='typesss' >.GIF</p>
    <p className='typesss' >.BMP</p>
</div>
<p>Have a different type of file? <a href='/'>Email it </a> to us and weʼll have it ready for you to use within a few hours!</p>
            </div>
         );
    }
}
 
export default FileUploader;