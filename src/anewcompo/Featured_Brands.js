import React from 'react'
import FB1 from './fb_img/fb1.webp'
import FB2 from './fb_img/fb2.webp'
import FB3 from './fb_img/fb3.webp'
import FB4 from './fb_img/fb4.webp'


export default function Featured_Brands() {

    const fb1 = {
        textAlign: 'center',
        marginTop: '20px',
        height: '30px',
    }

    const fb2 = {
        transform: 'scale(1.1)',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        margin: '40px'
    }

    return (
        <div>
            <div style={{ backgroundColor: '#c3c1b2', paddingTop: '1px', marginTop: '30px', width: '1340px', borderRadius: '5px', marginLeft: '5px' }}>
                <h5 style={fb1}>Featured Brands</h5>

            </div>
            <a href='/Zandu' style={fb2}><img src={FB1}></img></a>
            <a href='' style={{ margin: '40px' }}><img src={FB3}></img></a>
            <a href='' style={{ margin: '40px' }}><img src={FB2}></img></a>
            <a href='' style={{ margin: '40px' }}><img src={FB4}></img></a>
            <div>

            </div>
            <div style={{ borderTop: '1px solid black', margin: '50px', marginBottom: '0px', padding: '50px' }}>
                <h5>EFFORTLESS ONLINE MEDICINE ORDERS AT AZITHRO PHARMACY</h5>
                <p>Because ordering medicines online need not be complicated but rather a cakewalk. And at Azithro Pharmacy we ensure that. All you need to do is</p>
                <ul>
                    <li>Browse through our wide variety of products</li>
                    <li>Add products to your cart and place order  and get order at your home</li>
                    <li>Your order will be on its way to you.</li>
                </ul>
                <p>Azithro is your go-to online pharmacy store for all your medicine needs. We also have a range of products in the personal care, baby care, health and nutrition, wellness, and lifestyle categories. Come explore ‘everything under the sun’ related to healthcare at Azithro. Wherever Azithro is there...</p>
            </div>
            <div style={{ marginTop: '5px' }}>
                <h4 style={{ marginLeft: '90px' }}>Reasons To Buy Medicine From Azithro Pharmacy</h4>
                <ul style={{ marginLeft: '95px' }}>
                    <li>Super-fast deliveries.</li>
                    <li>Only genuine and top-quality products delivered</li>
                    <li>Wide range of healthcare products to choose from</li>
                    <li>Attractive deals on medicines</li>
                </ul>
            </div>
        </div>
    )
}
