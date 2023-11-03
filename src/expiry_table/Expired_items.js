import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8081/expired_items')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <div className='d-flex bg-secondary justify-content-center align-items-center'>
                <div>         
                    <h2> Expired Items </h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.product_name}</td>
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
