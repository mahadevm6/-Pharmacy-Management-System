import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8081/delete/${id}`)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.log("Error Occurred:", err))
    }

    return (
        <div>
        <div className='d-flex bg-secondary justify-content-center align-items-center'>
          <a href='/outostock'><button type="button" class="btn btn-danger  m-3 p-3">out of stock items</button></a>    
            </div>
        <div className='d-flex bg-secondary
        justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Product List</h2>
                <div className='d-flex justify-content-end'>
                    <Link to="/addstock" className='btn btn-success'>Add Product +</Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Seller Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{product.product_id}</td>
                                    <td>{product.product_name}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.seller_name}</td>
                                    <td>
                                        {/*<Link to={`/read/${product.product_id}`} className='btn btn-sm btn-info'>Read</Link> */}
                                        <Link to={`/edit/${product.product_id}`} className='btn btn-sm btn-primary mx-2 p-2 m-2'>Edit</Link>
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
