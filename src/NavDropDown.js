import React from 'react'

export default function NavDropDown() {
  return (
    <div className='NavMenuBody'>
      <h6 className='menuHeader'>Menu</h6>
      <a  href='./MemberScreen' className='MenuListings'>Boxing For Beginners</a>
      <br/>
      <a href='./MemberScreen' className='MenuListings'>Fight Team Training</a>
      <br/>
      
      <h6 className='menuHeader'>Boxing From Home</h6>
      <a href='./MemberScreen' className='MenuListings'>Virtual Training</a>
      
      <h6 className='menuHeader'>MembersBooking</h6>
      <a href='./MemberScreen' className='MenuListings'>Personal Lessons</a>
      <br/>
      <a href='./MemberScreen' className='MenuListings'>Sign Up For Class</a>
      <br/>
      
      <h6 className='menuHeader'>Special Interest</h6>
      <a href='./MemberScreen' className='MenuListings'>Sponsors</a>
      <br/>
      <a href='./MemberScreen' className='MenuListings'>Events</a>
      <br/>
      
      <h6 className='menuHeader'>Coming Soon</h6>
      <a href='./MemberScreen' className='LAST'>Schedule Sparring</a>
      <br/>
      <a href='./MemberScreen' className='LAST'>Quick Match</a>
      <br/>
      <a href='./MemberScreen' className='LAST'>XP System</a>
      <br/>
      <a href='./MemberScreen' className='LAST'>PPV Events</a>
      

    </div>
  )
}
