import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8081/expiry_items_sorted')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <div className='d-flex bg-secondary justify-content-center align-items-center'>
                <div>         
                    <h2>Sorted Expiry Items </h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Expiry Date</th>
                                <th>Expires In</th>
                                <th>Is Branded</th>
                                <th>Profit Percentage</th>
                                <th>Days Until Expiry</th> {/* Add this column */}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.product_name}</td>
                                        <td>{item.expiry_date}</td>
                                        <td>{item.expires_in}</td>
                                        <td>{item.is_branded}</td>
                                        <td>{item.profit_percentage}</td>
                                        <td>{item.days_until_expiry}</td> {/* Display days_until_expiry */}
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
