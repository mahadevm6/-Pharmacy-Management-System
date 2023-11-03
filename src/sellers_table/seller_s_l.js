import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8081/seller')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8081/sellerdelete/${id}`)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.log("Error Occurred:", err))
    }

    return (
        <div>
         <div className='d-flex bg-secondary justify-content-center align-items-center'>
        <button type="button" class="btn btn-info col-6 m-2"> <Link to="/higherprofit">more Profittable products</Link></button>
        </div>
        <div className='d-flex bg-secondary justify-content-center align-items-center'>
           <div >         
       <h2>sellers List</h2>
                <div className='d-flex justify-content-end'>
                    <Link to="/selleradd" className='btn btn-success'>new seller +</Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Composition</th>
                            <th>Seller Name</th>
                            <th>MRP</th>
                            <th>Net Price</th>
                            <th>Profit Percentage</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{product.product_id}</td>
                                    <td>{product.composition}</td>
                                    <td>{product.seller_name}</td>
                                    <td>{product.mrp}</td>
                                    <td>{product.net_price}</td>
                                    <td>{product.profit_percentage}</td>
                                    <td>
                                        <Link to={`/selleredit/${product.product_id}`} className='btn btn-sm btn-primary mx-2 m-2 p-2'>Edit</Link>
                                        <button onClick={() => handleDelete(product.product_id)} className='btn btn-sm btn-danger'>Delete</button>
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
