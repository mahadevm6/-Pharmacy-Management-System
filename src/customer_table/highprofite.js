import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8081/higherprophite')
            .then(res => setData(res.data))
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    return (
        <div className='d-flex bg-secondary justify-content-center align-items-center'>
            <div>         
                <h2>High Profit Products</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Composition</th>
                            <th>Seller Name</th>
                            <th>Profit Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data) && data.length > 0 ? (
                            data.map(product => (
                               <tr key={product.product_id}>
                                   <td>{product.composition}</td>
                                   <td>{product.seller_name}</td>
                                   <td>{product.profit_percentage}</td>
                               </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
