import React from 'react'
import IMG1 from './fb_img/zandu1.webp'
import IMG2 from './fb_img/zandu2.webp'
import IMG3 from './fb_img/zandu3.webp'
import IMG4 from './fb_img/zandu4.webp'

import '../components/tablelist.css'


export default function Zandu() {

    const zandu1 = {
        padding: '20px',
        backgroundColor: 'white',
        height: '300px',
        borderColor: 'black',
        margin: '50px',
        marginBottom:'0px',
        marginTop:'100px',
        width:'200px',
        //marginLeft:'70px'  
    }

    return (
        <div style={{ backgroundColor: '#ededed',display:'flex'}}>
            <div>
            <img src={IMG1} style={ zandu1 }></img>
            <p style={{backgroundColor:'white',width:'200px',marginLeft: '50px',textAlign:'center'}}> Zandu Pancharishta Ayurvedic <br/> Digestive Tonic Complete<br/> Digestive Care <br/> MRP 234</p>
            </div>
            <div>
            <img src={IMG2} style={zandu1}></img>
            <p style={{backgroundColor:'white',width:'200px',marginLeft: '50px',textAlign:'center'}}> Zandu Chyavanprash Avaleha Jaggery <br/> MRP  <br/> ₹ 189</p>
            </div>
            <div>
            <img src={IMG3} style={zandu1}></img>
            <p style={{backgroundColor:'white',width:'200px',marginLeft: '50px',textAlign:'center'}}>Zandu Nityam Tablet <br/> MRP 100 </p>
            </div>
            <div>
            <img src={IMG4} style={zandu1}></img>
            <p style={{backgroundColor:'white',width:'200px',marginLeft: '50px',textAlign:'center'}}>Zandu Balm Ultra Power <br/> MRP 40</p>
            </div>

        </div>
    )
}
