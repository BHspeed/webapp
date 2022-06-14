import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import BannerLogo from './SRlogo.jpg';
import HomePagePic2 from './GymPic.jpg';
import HomePagePic3 from './3rdImage.jpg';
import kidsBoxingPic from './Kids.jpg';
import { MDBRipple } from 'mdb-react-ui-kit';
import { useNavigate} from 'react-router-dom';


 function HomePage() {
 let Navigate = useNavigate();
  
  return (
    <>
    
     <div className='homeBtns'>  
     <MDBRipple rippleTag='a'>
      <img
        src= {BannerLogo}
        className='img-fluid rounded'
        alt='example'
        style={{ maxWidth: '24rem' }}
      />
    </MDBRipple>
  
    <hr className='LineBreak'/>
    <h3 className='titleText'>Welcome To StayReady Boxing &amp; Fitness</h3>
    <div className='JoinGymBtn'>
    

    
    <MDBBtn outline className='mx-2' color='danger' onClick={()=>{
      Navigate('/JoinTheGym');
    }}>
     Join The Gym
      </MDBBtn>
  </div>
      
    <div className='MemberLogin'>
    
    <MDBBtn className='mx-2' color='danger' onClick={()=>{
      Navigate('/Memberscreen');
    }}>
        Member Login
      </MDBBtn>

      <a href='./JoinTheGym'><h6 className='GuestLogin'>Guest Member?</h6></a>
      
      
      </div>
    </div>
    {/* kids Section*/}
    <hr className='LineBreak2'/>
    <img
      src={kidsBoxingPic}
      className='img-thumbnail rounded-circle'
      alt='KidsBoxing'
      style={{ maxWidth: '27rem' }}
    />
       <div className='HomePageBody'>
        <h3>Competitve Kids Boxing</h3>
        <p>This is our children boxing program. 
            As long as your child is 10 Years old.    
            This program is specifcally for competitve boxing and training.    
            We no longer offer kids classes to the general public. 
            Please see our personal training options for individualized lessons for your child. Children's </p>
    </div>
    <hr className='LineBreak2'/>
    
     {/* Gym Section*/}
    <img
      src={HomePagePic2}
      className='img-thumbnail rounded-circle two'
      alt='GymPic'
      style={{ maxWidth: '27rem' }}
    />
       <div className='HomePageBody'>
        <h3>General Boxing/Fitness is for Everyone</h3>
        <p>Doesn't Matter Age, Weight, or in most cases even disability. 
        We can help you get in shape and have fun while doing it. 
        Out of shape or In shape, Boxing Will ALWAYS be a challenge. 
        This class is for anyone looking to begin boxing or already box.
        Take our Boxing/Fitness Classes offered EVERYDAY! </p>
    </div>
    <hr className='LineBreak2'/>
    
       {/* Boxer Section*/}
    <img
      src={HomePagePic3}
      className='img-thumbnail rounded-circle'
      alt='Boxer'
      style={{ maxWidth: '27rem' }}
    />
       <div className='HomePageBody'>
        <h3>Professional &amp; Competition Boxing</h3>
        <p>This is not for those looking to live a fantasy! 
            Boxing is a serious sport and can result in serious injury.
            The Stress and strain you will experience is not for everyone. 
            This is NOT baby sitting, You will need to work with coahces AND on your own.    
            Serious Inquiries ONLY</p>
    </div>
    <hr className='LineBreak2'/>
      
    
    </>
  )
}

export default HomePage;


    

    
 