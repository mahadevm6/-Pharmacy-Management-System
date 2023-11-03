import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8081/customersdata')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = (customer_id) => {
        axios.delete(`http://localhost:8081/customerdelete/${customer_id}`)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.log("Error Occurred:", err))
    }

    return (
        <div className='d-flex bg-secondary justify-content-center align-items-center'>
            <div>
                <h2>Customer List</h2>
                <div className='d-flex justify-content-end'>
                    <Link to="/customeradd" className='btn btn-success'>New Customer +</Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Customer Name</th>
                            <th>Mobile Number</th>
                            <th>Total Amount</th>
                            <th>Suggestion Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((customer, index) => {
                            return (
                                <tr key={index}>
                                    <td>{customer.customer_id}</td>
                                    <td>{customer.customer_name}</td>
                                    <td>{customer.mobile_number}</td>
                                    <td>{customer.total_amount}</td>
                                    <td>{customer.suggestion_link}</td>
                                    <td>
                                        <Link to={`/customeradd/${customer.customer_id}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                        <button onClick={() => handleDelete(customer.customer_id)} className='btn btn-sm btn-danger'>Delete</button>
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
