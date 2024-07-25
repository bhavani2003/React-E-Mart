import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="navSection">
      <div className="title">
        <h2>E-Mart</h2>
      </div>
      <div className="search">
        <input type="text"placeholder='Search...'/>
      </div>
      <div className="user">
        <div className="user-details">
            SignIn/SignUp
        </div>
        <div className="cart">
            Cart
        </div>
      </div>
   </div>
   <div className="subMenu">
    <ul>
      <li>Mobiles</li>
      <li>Computers</li>
      <li>Refrigerators</li>
      <li>Furniture</li>
      <li>Air-Conditioners</li>
      <li>Men Fashion</li>
      <li>Woman Fashion</li>
      <li>Televisions</li>
      <li>Books</li>
      <li>Kitchen</li>
    </ul>
   </div>
   </>
  );
};

export default Navbar
