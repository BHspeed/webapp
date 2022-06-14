import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { MDBRow, MDBCol, MDBContainer, MDBRipple } from 'mdb-react-ui-kit';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ChatIcon from '@mui/icons-material/Chat';
import BannerLogo from './SRlogo.jpg';
import MemberBanner from './Ring.jpg'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MENU from "./NavDropDown";
import 'animate.css';
import { FaCheck } from 'react-icons/fa';


import './App.css';
import { display } from '@mui/system';
import { wait } from '@testing-library/user-event/dist/utils';
import { Menu } from '@mui/material';



export default function App() {
function intitilizeMenu(){
  var MenuButton = document.getElementById("NavMenuID");
  MenuButton.style.display = "none";
}

  // Nav menu Functionality
function hideMenu(){
  var MenuButton = document.getElementById("NavMenuID");
  MenuButton.style.display = "none";
}

function AnimateSlideClose(){
  document.getElementById("animate").className = "animate__animated animate__slideOutLeft";
}
function AnimateSlideOpen(){
  document.getElementById("animate").className = "animate__animated animate__slideInLeft";
}
function showMenu(){
  var MenuButton = document.getElementById("NavMenuID");
  MenuButton.style.display = "block";
}
  function ToggleMenu(){
    var MenuButton = document.getElementById("NavMenuID");
    if(MenuButton.style.display === "none"){
        setTimeout(showMenu,300);
        setTimeout(AnimateSlideOpen,300);
    }else if(MenuButton.style.display === "block"){
      setTimeout(AnimateSlideClose,200);
      setTimeout(hideMenu,600);
    }
      
  }
  // End Of Menu Toggle
   

  
 

 

  return (
   
    <>
           
        <div className='TopNav' onLoad={intitilizeMenu}>

        <MDBCol sm='4' className='col-example' id='firstCol'>
        <IconButton centerRipple={false} className="IconButton1" onClick={ToggleMenu} >
        <MenuIcon fontSize='small' className='MenuIcon' id='Icon' />
        </IconButton>
        </MDBCol>
        <MDBCol sm='4' className='col-example' id='secondCol'>
        <img
        src={BannerLogo}
        id="imgLogo"
        className='img-fluid'
        alt='example'
        style={{ maxWidth: '80px', height: '40px' }}
      />

        </MDBCol>
        <MDBCol sm='4' className='col-example'>
        <IconButton centerRipple={false} className="IconButton2">
        <ChatIcon fontSize='small' className='ChatIcon'/>
        </IconButton>
    
          
        </MDBCol>
        </div>
        {/*End Of TopNav*/}
        
        <div className='MemberPageBody'>
        <MDBRow sm='6' className='col-example' id='UserNameBanner'>
     <h1 className='userName'>UserName</h1>
        </MDBRow>

        <div class="d-flex align-items-start bg-light mb-3">
        <MDBCol> <h3>Membership Status </h3></MDBCol>
        <MDBCol><FaCheck className='MemberCheckMark'/></MDBCol>
        
      </div>
      
      {/*this is he end of display under topNav*/}

      <div className='ScrollBody'>
        <div className='IntroBody'>
        <p className='IntoText'>Welcome to StayReady Boxng &amp; Fitness Members only area. 
          Please forgive the apperance while we are undergoing maintenences and updates to better serve you.</p>
          <hr/>

          <h2 className='introText'>Upcoming Additions</h2>

        </div>
      
          <h2>Discounts</h2>
          <p>Members Discounts, While having an active StayReady membership.
            You are able to show this membership status to our partners and recieve various discounts depending on location
          </p>
          <hr/>
         
            <MDBRow> 
            <MDBCol className='Titles'><h2>Scheduled Sparring</h2></MDBCol>
            <MDBCol> <p>Many athletes like to arrange their time accordingly,
                  Now its easier to add your name to the list to get ring time.</p>
        </MDBCol>
        
            </MDBRow>
       
        <hr/>
          <MDBRow>
          <MDBCol className='Titles'> <h2>Quick Match</h2></MDBCol>
        <MDBCol>Looking for an exhibition match? Looking to test your skills against someone in front of an audience. </MDBCol>
        
          </MDBRow>
       <hr/>
       <MDBRow>  
       <MDBCol className='Titles'> <h2>XP System</h2></MDBCol>
          <MDBCol>StayReady XP system will be an interactive way for members to get more involved and srive to reach new levels, while earning prizes to do so </MDBCol>
          
            </MDBRow>
            <hr/>
            <MDBRow>
            <MDBCol className='Titles'> <h2>PPV Events</h2></MDBCol>
          <MDBCol>Members will get a chance to watch professional boxing. if you are a member and one of our fihters are having a bout, you can watch the bout here.</MDBCol>
          
            </MDBRow>
          <hr/>
          <MDBRow >
            <h2>Current Membership Type</h2>
            <img src={MemberBanner} alt='Test' className='MemberShipTitle'/>
            <h2 className='MembershipPlaceholder'>MEMBERSHIP PLACEHOLDER</h2>
          </MDBRow>
         
        </div>
      
        
        <Button variant="outlined" color="error" className='LogOutBTN'>LogOut</Button>
        <div className='NavMenuPoP' id='NavMenuID' >
          <div id="animate">
          <MENU  />
          </div>
       
        </div>
        </div>


        
    
      
    </>

   
  );

  


}