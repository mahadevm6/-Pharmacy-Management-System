import React, { Component } from 'react'
import Imagese from '../images/search.png'

export default class line2 extends Component {
  render() {

    const mystyle={
        paddingLeft: '20px',
        paddingRight: '20px',
        color: 'white'
    }

    const style2={
        height: '30px',
        backgroundColor: 'green',
       
    }

    return (
      <div style={style2}>
        <a href='' style={mystyle}>ayurveda</a>
        <a href='' style={mystyle}>health drinks</a>
        <a href='' style={mystyle}>supliments</a>
        <a href='' style={mystyle}>health conditions</a>
        <a href='' style={mystyle}>Baby Care Essentials</a>
        <a href='' style={mystyle}>home Essentials</a>
        <a href='' style={mystyle}>Health Devices</a>
        <a href='' style={mystyle}>Skin Care</a>
        <a href='' style={mystyle}>Oral Care</a>
        <a href='' style={mystyle}>Vitamins</a>
        <a href='' style={mystyle}></a>
        <div className='LINE1'>
      <div style={{textAlign:'center',}}>
        <h3 style={{marginTop:'10px'}}>Buy Medicines and Essentials</h3>
        <input type='text' placeholder='search medicines here' style={{width:'600px'}} />
        <a href=''><img src={Imagese} style={{height:'30px',width:'30px'}}/></a>
      </div>
      </div>
      </div>
    )
  }
}
