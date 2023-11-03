import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8081/expiry_items')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = (product_name) => {
        axios.delete(`http://localhost:8081/expirydelete/${product_name}`)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.log("Error Occurred:", err))
    }

    return (
        <div>
        <div className='d-flex bg-secondary justify-content-center align-items-center'>
          <a href='/sortedexpiry'><button type="button" class="btn btn-danger  m-3 p-3"> sorted order of expiry items</button></a>    

          <a href='/expired_items'><button type="button" class="btn btn-danger  m-3 p-3" > expired items</button></a>  
            </div>
        <div className='d-flex bg-secondary justify-content-center align-items-center'>
            <div>         
                <h2>Expiry Items List</h2>
                <div className='d-flex justify-content-end'>
                    <Link to="/expiryadd" className='btn btn-success'>New Expiry Item +</Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Expiry Date</th>
                            <th>Expires In</th>
                            <th>Is Branded</th>
                            <th>Profit Percentage</th>
                            <th>Action</th>
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
                                    <td>
                                        <Link to={`/expiryedit/${item.product_name}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                        <button onClick={() => handleDelete(item.product_name)} className='btn btn-sm btn-danger'>Delete</button>
                                    </td>
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
