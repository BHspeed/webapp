import React from 'react';
import BannerLogo from './SRlogo.jpg';
import { MDBRipple } from 'mdb-react-ui-kit';
import { MDBRow, MDBCol, MDBInput,MDBDropdown, MDBValidation,
  MDBValidationItem,  MDBTextArea, MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,   } from 'mdb-react-ui-kit';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import Backendless from 'backendless';
import CCcard from './DebitCheckOut.js';
import MemebershipsDropDown from "./MembershipDropdown";
import ContactDropdown from "./ContactDropdown ";

var APP_ID = '0D220705-B869-70D7-FF60-9BE82CE12B00';
var API_KEY = 'A3EBF3EE-343E-46F5-9ED0-D21C7C5BC886';

Backendless.initApp(APP_ID, API_KEY);


export default function JoinTheGym() {

  const [basicModal, setBasicModal] = useState(true);

  
  const toggleShow = () => {setBasicModal(!basicModal)
      var waiverAgree = false;
      var setWaiver;
      if(basicModal){
        waiverAgree = "I Agree To Waiver and Terms"
        setWaiver = waiverAgree;
        formValue.WaiverTerms = setWaiver;
      }
     
  };

  let Navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    fname: '',
    lname: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phoneNumber: '',
    membershipType: '',
    contactInfo: '',  
    WaiverTerms:''
  }
  );

  var contact = {
    fname: '',
    lname: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phoneNumber: '',
    membershipType: '',
    contactInfo: '',  
}
 
const handleWaiver=(e)=>{
  var Waiver  = e;
  formValue.WaiverTerms = Waiver

 
}

var url = 'https://form.jotform.com/221284052658052'




const handleContactPref=(e)=>{
  var contactPref  = e;

  formValue.contactInfo = contactPref;
 

}
const handleMembership=(e)=>{
  var membership = e;

  formValue.membershipType = membership;

}
 
  function onChange (e){

    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    
  };
  function saveData(){
      if(formValue.fname === "" || formValue.lname === "" || 
         formValue.address === "" || formValue.city === "" || 
         formValue.state === "" || formValue.phoneNumber  === "" || 
         formValue.membershipType === "" || formValue.contactInfo === "" ){
        alert("Info Missing");
      }else{
        Backendless.Data.of( "Customer" ).save( { 
          "FirstName":formValue.fname,
          "LastName":formValue.lname,
          "Address":formValue.address, 
          "City":formValue.city,
          "State":formValue.state,
          "Zip": formValue.phoneNumber,
          "MembershipChoice":formValue.membershipType,
          "ContactChoice":formValue.contactInfo,
          "AgreeToWaiver": formValue.WaiverTerms
        } )
          .then( function( obj ) {
              console.log( "object saved. objectId " + obj.objectId + "" + contact )
          } )
          .catch( function( error ) {
              console.log( "got error - " + error )
          })
          console.log(formValue);
      }
    
    }

    function hideBody(e){
      
      document.getElementById("BodyDisplay1").style.display = "none";
      document.getElementById("PaymentSection").style.display = "block";
      e.preventDefault();
    }
  return (
      <>
   
    <MDBRipple rippleTag='a'>
      <img
        src={BannerLogo}
        className='img-fluid'
        alt='example'
        style={{ maxWidth: '24rem' }}
      />
    </MDBRipple>
    <div className='HomePageBody'>
    <MDBValidation>
    <div id="BodyDisplay1"className='MemberJoinBody'>
    
      <h2>Member Info</h2>
     
      <MDBCol md='6' className='col-example'>
        <div  className='Input1'>
        <MDBValidationItem>
        <MDBInput   value={formValue.fname}
          name='fname'
          onChange={onChange}
          id='validationCustom01'
          required
          label='First name' 
          type='text'  />
        </MDBValidationItem>
        </div>


        <div  className='Input2'>
        <MDBValidationItem>
          <MDBInput  
          value={formValue.address}
          name='address'
          onChange={onChange}
          id='validationCustom02'
          required
          label='Address' 
          type='text'    />
          </MDBValidationItem>
        
        </div>
        </MDBCol>
      
    
   
        
      
    
        <MDBCol md='6' className='col-example '>
        {/*This is the opening of the column*/}

        <div className='Input3'>
        <MDBValidationItem>
        <MDBInput  
           value={formValue.lname}
           name='lname'
           onChange={onChange}
           id='validationCustom03'
           required
           label='Last Name' 
           type='text' />
        </MDBValidationItem>
          
        </div>

        <div className='Input4'>
        <MDBValidationItem>
        <MDBInput 
        value={formValue.state}
        name='state'
        onChange={onChange}
        id='validationCustom04'
        required
        label='State'
        type='text' />
        </MDBValidationItem>
         
        </div>
        </MDBCol>
        <div  className='Input5'>
        <MDBValidationItem>
        <MDBInput  
        value={formValue.phoneNumber}
        name='phoneNumber'
        onChange={onChange}
        id='validationCustom05'
        required
        label='PhoneNumber' 
        type='text'  />
        </MDBValidationItem>
     
        </div>
        
        <MDBCol md='6' className='col-example '>
        <div className='Input6'>
        <MDBValidationItem>
          <MDBInput  
          value={formValue.zip}
          name='zip'
          onChange={onChange}
          id='validationCustom06'
          required
          label='ZipCode' 
          type='text' />
        </MDBValidationItem>
         
        </div>
        </MDBCol>
        <MDBCol md='6' className='col-example '>
        <div className='Input7'>
        <MDBValidationItem>
           <MDBInput  
           value={formValue.city}
           name='city'
           onChange={onChange}
           id='validationCustom07'
           required
           label='City' 
           type='text' />
        </MDBValidationItem>
        </div>
        </MDBCol>
   
      <hr />
      <h3>Membership Type</h3>
      <h6>Unlimited Classes Per Month</h6>
      <div style={{overflow: "none", height: "100px", width: "80%", marginLeft: "10%"}}>
         <MemebershipsDropDown />
      </div>
 
    <div style={{overflow: "none", height: "100px", width: "80%", marginLeft: "10%"}}>
        <ContactDropdown />
    </div>
  
    <h4>Any Concerns or Questions?</h4>
    <br/>
    <MDBRow className='g-1'>
    <MDBTextArea label='Message' id='textAreaExample' rows={4} />
    </MDBRow>
    <br/>
    
   
    <MDBBtn  type="submit" className='mx-2' onClick={hideBody}  color='danger'>
        Submit Info
      </MDBBtn>
    
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle><h3 className='WaiverTitle'>Terms &amp; Conditions</h3></MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                <p>You (The User) consent to receive communications from us electronically. We will communicate with you by e-mail or phone. 
                You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing. 
                By hitting the "Submit" button below, You agree and understand the, (1)billing for your StayReady Boxing &amp; Fitness Membership. (2) I understand that I am in full control of my payment, 
                and if at any time I decide to make any changes or discontinue the EFT service. I will call, write, text, and CONFIRM with StayReady Boxing &amp; Fitness. 
                Change of payment method will not affect other provisions and terms of my Agreement. StayReady Assumes that all credit card numbers will be renewed with the new expireation dates unless notifed. ANY billing changes requre at least an 8 DAY NOTICE prior to the end of the month of payment. 
                Billing is perpetual until cancelation. 
                Changes made under the 8 day notice will occur the following month but a refund will not be applied.</p>

             
             </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='success'   onChange={handleWaiver} onClick={toggleShow}>
                I Accept
              </MDBBtn>
             
            
              <MDBBtn color='danger'>No Thanks</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </div>
      <br/>
      <div id="PaymentSection" className='PaymentScreen'>
        <h2>Membership Payment</h2>
      <div id="AnimatedNfo" className='AnimatedInfo'></div>
    {/*  <div className='MemberPurchaseScreen' id='webView' dangerouslySetInnerHTML={{ __html: "<iframe src="+ `${url} `+ " style='width:100%; height:500px; margin-right:10%; margin-top:10%; overflow: hidden'/>"}}  /> */}
     {//} <iframe id="myIFrame" src={url}
        //  width="100%" height="600"
        //</div>  frameBorder="2">
     //</MDBValidation> </iframe>
    }
    <CCcard />
</div>
     
      

      </MDBValidation>
  </div>  
   
    </>
  );
}