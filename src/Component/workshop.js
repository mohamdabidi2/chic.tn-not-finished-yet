import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Text from './workshop-element/Text'
import Ragam from './workshop-element/Number'
import Art from './workshop-element/Art'
import ProColor from './workshop-element/product-color'
import './workshop.css'
import FileUploader from './workshop-element/fileUploader'
import Apercu from './apercu'
class WorkShop extends Component {
    render() { 
        return (  <Router>
            <section className='spark'>
            <Link to="/"><p className='closeeee'>X</p></Link>
            <div className='work-shoppp'>
                <div className='premier-columnn'>
                    <div className='icon-desingn'>
                    
                   
                    <Link to="/Text"><p  className='icon-img-title-la'><i class="fas fa-comment-alt iconnnnn"></i><br/>Add Text</p></Link>
                    <Link to="/Art"><p  className='icon-img-title-la'><i class="fas fa-image iconnnnn"></i><br/>Add Art</p></Link>
                    <Link to="/Upload"><p  className='icon-img-title-la'><i class="fas fa-cloud-upload-alt iconnnnn"></i><br/>Upload</p></Link>
                    <Link to="/Number"><p  className='icon-img-title-la '><span className='iconnnnn'>00</span><br/>Add Number</p></Link>
                    <Link to="/Pc"><p  className='icon-img-title-la'><i class="fas fa-brush iconnnnn"></i><br/>Product Color</p></Link>
                    </div>
                    <div>
                    <Route path="/" exact component={Apercu} />
                    <Route path="/Text" exact component={Text} />
                    <Route path="/Number" exact component={Ragam} />
                    <Route path="/Art" component={Art} />
                    <Route path="/Upload" component={FileUploader} />
                    <Route path="/Pc" component={ProColor} />


               </div>
                </div>
                <div className='product-apercy'>
                <img className='t-shirtyz' src='https://i.ibb.co/CbhwRRx/3700c0.png' alt=''/>
              
                </div>
                
            </div>
           

            </section>
            </Router>
        );
    }
}
 
export default WorkShop;