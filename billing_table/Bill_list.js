import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './custbill.css'

export default function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8081/billing')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = (batch_no) => {
        axios.delete(`http://localhost:8081/billdelete/${batch_no}`)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.log("Error Occurred:", err))
    }

    return (
        <div className='d-flex bg-secondary justify-content-center align-items-center'>
            <div>
                <h2>Billing List</h2>
                <button type="button" class="btn btn-light"><a href='/custbill'>generate bills for customer</a></button>        
                <div className='d-flex justify-content-end'>
                    <Link to="/billingadd" className='btn btn-success'>New Billing +</Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Batch No</th>
                            <th>Product Name</th>
                            <th>Quantity Purchased</th>
                            <th>Customer Name</th>
                            <th>MRP</th>
                            <th>Doctor Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((billing, index) => {
                            return (
                                <tr key={index}>
                                    <td>{billing.batch_no}</td>
                                    <td>{billing.product_name}</td>
                                    <td>{billing.quantity_purchased}</td>
                                    <td>{billing.customer_name}</td>
                                    <td>{billing.mrp}</td>
                                    <td>{billing.dr_name}</td>
                                    <td>
                                        <Link to={`/billedit/${billing.batch_no}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                        <button onClick={() => handleDelete(billing.batch_no)} className='btn btn-sm btn-danger'>Delete</button>
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
