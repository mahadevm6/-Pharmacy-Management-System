import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import Mannager from './mannager'
import mannager from './mannager';
import './tablelist.css'

import CartImage from './cart.png'

export default function navbar() {
    return (
        
        <nav className='NAVA'>
       <div className='navbar-List'>
                <div className='NAVC'>
                <h1 style={{ padding: '5px' }}>Azitho Pharma <a href=''> <img src={CartImage} style={{height:'20px',width:'20px', marginLeft:'1020px'}}></img></a></h1>       
                <div className='NAVB'>
                    <a href='#' style={{ padding: '5px' }}>Home</a>
                    <a href='/about' style={{ padding: '5px' }}>About</a>
                    <a href='/Services' style={{ padding: '2px' }}>Services</a>
                    <a href='/contact' style={{ padding: '5px' }}>Contact</a>
                    <a href='/tablelist' style={{ padding: '5px' }}>mannager</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
