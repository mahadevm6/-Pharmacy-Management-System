import React from 'react';
import './navbar.css'
import Aboutimg1 from '../images/about1.webp'
import Aboutimg2 from '../images/about2.jpeg'
import Aboutimg3 from '../images/about3.jpeg'
import Aboutimg4 from '../images/about4.jpeg'
import Aboutimg5 from '../images/about5.jpeg'
import Aboutimg6 from '../images/about6.jpeg'



function AboutPage() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', margin: '30px' }}>About Azithro Pharmacy</h1>
      <h4 style={{ textAlign: 'center', margin: '15px' }}>India’s leading digital consumer healthcare platform</h4>
      <div style={{ display: 'flex', textAlign: 'center', marginLeft: '180px' }}>
        <div style={{ margin: '50px' }}>
          <img src={Aboutimg1} style={{ height: '100px', width: '100px', borderRadius: '50px' }}></img>
          <p style={{ fontWeight: 'bold', padding: "1px", fontSize: '20px' }}>E-Pharmacy</p>
          <h6>Order medicines and health <br /> products online and get it delivered <br /> at home from licensed pharmacies</h6>
        </div>

        <div style={{ margin: '50px' }} >
          <img src={Aboutimg2} style={{ height: '100px', width: '100px', borderRadius: '50px' }}></img>
          <p style={{ fontWeight: 'bold', padding: "1px", fontSize: '20px' }}>Online Consultations</p>
          <h6>Consult qualified and registered <br /> doctors on chat for free</h6>
        </div>

        <div style={{ margin: '50px' }}>
          <img src={Aboutimg3} style={{ height: '100px', width: '100px', borderRadius: '50px' }}></img>
          <p style={{ fontWeight: 'bold', padding: "1px", fontSize: '20px' }}>Labs Tests</p>
          <h6>Book lab tests online  <br />for hassle-free, home sample <br /> collection service.Get <br /> reports online.</h6>
        </div>
      </div>

      <p style={{ textAlign: 'center' }}>Azithro.com brings to you an online platform, which can be accessed for all your health needs. We are trying to make healthcare a hassle-free experience <br /> for you. Get your allopathic, ayurvedic, homeopathic medicines, vitamins & nutrition supplements and other health-related products delivered at home. <br />Lab tests? That too in the comfort of your home. Doctor consult? Yes, we got that covered too.</p>

      <div>
        <h1 style={{ textAlign: 'center' }}>Leadership</h1>
        <div>
          <div style={{ display: 'flex', textAlign: 'center', marginLeft: '250px' }}>
            <div style={{ margin: '50px', marginTop: '10px' }}>
              <img src={Aboutimg4} style={{ height: '150px', width: '150px', borderRadius: '50px' }}></img>
              <p style={{ fontWeight: 'bold', padding: "1px", fontSize: '20px' }}>Prashant Tandon <br /> CEO & Co-Founder</p>
            </div>
            <div style={{ margin: '50px', marginTop: '10px' }}>
              <img src={Aboutimg5} style={{ height: '150px', width: '150px', borderRadius: '50px' }}></img>
              <p style={{ fontWeight: 'bold', padding: "1px", fontSize: '20px' }}>Gaurav Agarwal <br /> CTO & Co-Founder</p>
            </div>
            <div style={{ margin: '50px', marginTop: '10px' }}>
              <img src={Aboutimg6} style={{ height: '150px', width: '150px', borderRadius: '50px' }}></img>
              <p style={{ fontWeight: 'bold', padding: "1px", fontSize: '20px' }}>Tanmay Saksena <br />COO</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{textAlign:'center',padding:'30px',margin:'30px'}}>
        <p>
          Azithro Pharmacy, your trusted neighborhood pharmacy
          dedicated to providing high-quality healthcare products and services to
          our community. We have been serving the health needs of our customers
          for over a decade.
        </p>
        <p>
          At Azithro Pharmacy, we pride ourselves on our commitment to customer
          satisfaction, professionalism, and a wide range of pharmaceutical
          products. Our experienced team of pharmacists is always available to
          assist you with your healthcare needs.
        </p>
        <p>
          Whether you're looking for prescription medications, over-the-counter
          products, health advice, or personalized care, Azithro Pharmacy is here
          to support you on your journey to better health and wellness.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to improve the health and well-being of our community by
          providing access to high-quality pharmaceuticals, healthcare products,
          and services. We aim to be your trusted healthcare partner, offering
          expert guidance and support for all your healthcare needs.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions, concerns, or would like to learn more about
          Azithro Pharmacy, please don't hesitate to contact us.
        </p>
        <p>
          Phone: (123) 456-7890<br />
          Email: info@azithropharmacy.com<br />
          Address: 123 Pharmacy Street, Your City, State, ZIP Code
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
