import React from 'react';
import './tablelist.css'; 

function ButtonComponent() {
  return (
    <div className='table1'>
    <div className="button-container">
      <button  className="button"><a href='/Stock_List'>Stock List</a></button>
      <button  className="button"><a href='/sellersl'>Seller List</a></button>
      <button  className="button"><a href='/expiry'>near expiry </a></button>
      <button  className="button"><a href='/billing'>Customer Bills</a></button>
      <button  className="button"><a href='/customer'>Customer List</a></button>
      <button  className="button"><a href='/expiryreturn'>Expiry Return</a></button>
      <button  className="button"><a href='/h1drug'>h1 drug list</a></button>
      <button  className="button"><a href='/reports'>Reports</a></button>

    </div></div>
  );
}

export default ButtonComponent;
