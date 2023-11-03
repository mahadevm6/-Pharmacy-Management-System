import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
    const [values, setValues] = useState({
        product_name: '',
        quantity: '',
        mrp: '',
        amount: '',
        seller_name: '',
        returned_date: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/expiryradd', values) // Assuming 'expiry_return' is your endpoint
            .then(res => {
                console.log(res);
                navigate('/expiryreturn'); // Redirect to the appropriate page
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>New Expiry Return</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Product Name</label>
                        <input type='text' placeholder='Enter Product Name' className='form-control' onChange={e => setValues({ ...values, product_name: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Quantity</label>
                        <input type='text' placeholder='Enter Quantity' className='form-control' onChange={e => setValues({ ...values, quantity: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>MRP</label>
                        <input type='text' placeholder='Enter MRP' className='form-control' onChange={e => setValues({ ...values, mrp: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Amount</label>
                        <input type='text' placeholder='Enter Amount' className='form-control' onChange={e => setValues({ ...values, amount: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Seller Name</label>
                        <input type='text' placeholder='Enter Seller Name' className='form-control' onChange={e => setValues({ ...values, seller_name: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Returned Date</label>
                        <input type='text' placeholder='Enter Returned Date' className='form-control' onChange={e => setValues({ ...values, returned_date: e.target.value })} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create;
