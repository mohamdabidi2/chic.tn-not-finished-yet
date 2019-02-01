import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Apercu extends Component {
  
    render() { 
        return (
            <Route>
            <div className='apercy-menu'>
            <h1 className='work-shop-title'>How Do You Want To Start ?</h1>
            <div className='part-workshop'>
            <Link to="/Text"><div className='part-one-workshop'>
                    <img className='shop-img' src='https://mugy.ma/boutique/wp-content/uploads/2018/06/Editing-Text-icon.png' alt=''/>
                    <p className='shop-text'>Add Text</p>
                </div></Link>
                <Link to="/Art"><div className='part-two-workshop'>
                    <img className='shop-img'  src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png' alt=''/>
                    <p  className='shop-text'>Add Art</p>
                </div></Link>
            </div>
            <div className='part-workshop'>
            <Link to="/Upload"><div className='part-one-workshop'>
                    <img className='shop-img' src='http://simpleicon.com/wp-content/uploads/cloud-upload-1.png' alt=''/>
                    <p className='shop-text'>upload</p>
                </div></Link>
                <Link to="/Number"><div className='part-two-workshop'>
                    <img className='shop-img'  src='https://png.pngtree.com/svg/20170801/_washing_cloth_575307.png' alt=''/>
                    <p  className='shop-text'>Change Product</p>
                </div></Link>
            </div>
        </div>
        </Route>);
    }
}
 
export default Apercu;