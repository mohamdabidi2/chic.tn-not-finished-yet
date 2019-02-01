import React, { Component } from 'react';
import './footer.css'
class Footer extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <div id="footer">
  <div class="tomottoWrap">
    <div id="tomotto">
      “shopping is an art” 

    </div>
  </div>
  <div class="lookWrap">
    <div id="look">
      <div class="section">
        <h3>Support</h3>
        <a href="#">FAQs</a>
        <a href="#">Contact Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Shipping Information</a>
        <a href="#">Return Policy</a>
        <a href="#">Item Exchange</a>
        <a href="#">Cash Back Rewards</a>
      </div>
      <div class="section">
        <a href="#">Wishlist</a>
       
        <a href="#">Refer a Friend</a>
        <a href="#">Reviews</a>
 
        <a href="#">Sponsor</a>
      </div>
      <div class="section">
        <h3>Follow Us</h3>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>        
        <a href="#">Pinterest</a>
        <a href="#">Blog</a>
        <a href="#">Ravelry</a>
        <a href="#">Sponsor</a>
        <a href="#">RSS</a>
      </div>
      <div class="section">
        <h3>About Us</h3>
        <a href="#">About</a>   
      </div>      
    </div>
  </div>
  <div class="legality">
        © Copyright 2002 - 2019 h3xor Team
      </div>
</div>
            </div>
          );
    }
}
 
export default Footer;