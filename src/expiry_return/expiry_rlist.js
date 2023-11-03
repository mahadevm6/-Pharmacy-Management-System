import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/expiredreturn')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = (product_name) => {
        axios.delete(`http://localhost:8081/expiryrdelete/${product_name}`)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.log("Error Occurred:", err))
    }

    return (
        <div className='d-flex bg-secondary justify-content-center align-items-center'>
            <div>
                <h2>Expiry Return List</h2>
                <div className='d-flex justify-content-end'>
                    <Link to="/expiryreturnadd" className='btn btn-success'>New Expiry Return +</Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>MRP</th>
                            <th>Amount</th>
                            <th>Seller Name</th>
                            <th>Returned Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.product_name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.mrp}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.seller_name}</td>
                                    <td>{item.returned_date}</td>
                                    <td>
                                        <Link to={`/expiryreturnedd/${item.product_name}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                        <button onClick={() => handleDelete(item.product_name)} className='btn btn-sm btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
