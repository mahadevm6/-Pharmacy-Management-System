import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8081/outoforder')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
        <div className='d-flex bg-secondary
        justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{product.product_name}</td>
                                    <td>{product.seller_name}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}
