import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import LoginScreen from '../../Assets/Images/Loginscreen1.png';
import MobilesliderImg from '../../Assets/Images/mobileslider.png'

const MobileSlider = () => {
    return (
        <>

            <div className="mobile-slider">
                <div className="custom-container">
                    <div className="row position-relative">
                        <div className="col-md-6 text-center">
                            <h4 className='color-purple font-32'>Filters</h4>
                            <img src={LoginScreen} alt="" className='width-40'/>
                            <p className='font-20 position-absolute absolute-1 circle-before '>Filters to help users find exactly <br/>the trk they are looking for</p>
                        </div>
                        <div className="col-md-6 position-relative">
                            <h4 className='color-purple font-32 margin-left-30'>Home Page</h4>
                            <img src={MobilesliderImg} alt="" className='w-100' />
                            <p className='font-20 position-absolute absolute-2 circle-before'>Notifications about <br/>upcoming treks</p>
                            <p className='font-20 position-absolute absolute-3 circle-before'>Curated Selection<br/> of Treks</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MobileSlider;
