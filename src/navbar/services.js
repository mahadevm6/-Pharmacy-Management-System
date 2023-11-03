import React from 'react';

function ServicesList() {
  const services = [
    "Online Doctor Consultation",
    "Apollo Pro Health Program",
    "All Doctors List",
    "Consult Physicians",
    "Consult Dermatologists",
    "Consult Paediatricians",
    "Consult Gynaecologists",
    "Consult Gastroenterologists",
    "Consult Cardiologists",
    "Consult Dietitians",
    "Consult ENT Specialists",
    "Consult Geriatricians",
    "Consult Diabetologists",
  ];

  return (
    <div style={{backgroundColor:' #f2f2f2'}}>
    ,
    <div style={{textAlign:'center',marginTop:'50px'}}>
      <h2>Services</h2>
      <ul>
        {services.map((service, index) => (
          <p key={index}>{service}</p>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default ServicesList;
