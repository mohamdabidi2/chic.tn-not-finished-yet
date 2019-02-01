import React, { Component } from 'react';
import { Rnd } from "react-rnd";
import './art.css'
// const style = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     border: "solid 1px #ddd",
//     background: "#f0f0f0",
//     maxWidth: "700px",
//     maxHeight: "300px"
// };
class Art extends Component {
    constructor() {
        super();
        this.state = {
            width: 100,
            height: 100,
            x:'',
            y: '',
         
        };
    }


    render() {
        return (

            <div className='apercy-menu'>
                <input placeholder='Search' className='Art-input-workshop' type='text' />

                <div id="images">
                    <div class="image"><img className="imagee-seize" src='https://dyjtxf4p68t34.cloudfront.net/wp-content/uploads/courage-901x1024.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://www.bidpress.com/google-t-shirt-design.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='http://png.clipart-library.com/images4/1/ape-vector-t-shirt-design-4.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://img00.deviantart.net/b912/i/2015/103/3/6/slash_in_wpap_for_t_shirt_design_by_tama_design-d8jyah5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://ya-webdesign.com/images/shirt-design-png-5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://ya-webdesign.com/images/shirt-design-png-5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://ya-webdesign.com/images/shirt-design-png-5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://ya-webdesign.com/images/shirt-design-png-5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://ya-webdesign.com/images/shirt-design-png-5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://ya-webdesign.com/images/shirt-design-png-5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://ya-webdesign.com/images/shirt-design-png-5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://ya-webdesign.com/images/shirt-design-png-5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://ya-webdesign.com/images/shirt-design-png-5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://ya-webdesign.com/images/shirt-design-png-5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://ya-webdesign.com/images/shirt-design-png-5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://ya-webdesign.com/images/shirt-design-png-5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://ya-webdesign.com/images/shirt-design-png-5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://ya-webdesign.com/images/shirt-design-png-5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://ya-webdesign.com/images/shirt-design-png-5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='https://ya-webdesign.com/images/shirt-design-png-5.png' alt='' /></div>
                    <div class="image"><img className="imagee-seize" src='http://hanatemplate.com/images/t-shirt-design-free-3.png' alt='' /></div>

                </div>
                {/* <Rnd
        style={style}
        maxWidth={200}
        maxHeight={200}
        size={{ width: this.state.width, height: this.state.height }}
        position={{ x: this.state.x, y: this.state.y }}
        onDragStop={(e, d) => {
          if (d.y >= 30 && d.y <= 200) {
            console.log("x" + d.x);
            console.log(d.y);
            if (d.x >= 30 && d.x <= 200) {
              this.setState({ x: d.x, y: d.y });
            }
          }
        }}
        onResize={(e, direction, ref, delta, position) => {
          this.setState({
            width: ref.style.width,
            height: ref.style.height,
            ...position
          });
        }}
      >
          
      </Rnd>
 */}


            </div>



        );

    }
}

export default Art;