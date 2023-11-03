import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
    const [values, setValues] = useState({
        batch_no: '',
        product_name: '',
        quantity_purchased: '',
        customer_name: '',
        mrp: '',
        dr_name: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/billing', values) 
            .then(res => {
                console.log(res);
                navigate('/billing');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>New Billing</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Batch No</label>
                        <input type='text' placeholder='Enter Batch No' className='form-control' onChange={e => setValues({ ...values, batch_no: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Product Name</label>
                        <input type='text' placeholder='Enter Product Name' className='form-control' onChange={e => setValues({ ...values, product_name: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Quantity Purchased</label>
                        <input type='text' placeholder='Enter Quantity Purchased' className='form-control' onChange={e => setValues({ ...values, quantity_purchased: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Customer Name</label>
                        <input type='text' placeholder='Enter Customer Name' className='form-control' onChange={e => setValues({ ...values, customer_name: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>MRP</label>
                        <input type='text' placeholder='Enter MRP' className='form-control' onChange={e => setValues({ ...values, mrp: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Dr. Name</label>
                        <input type='text' placeholder='Enter Dr. Name' className='form-control' onChange={e => setValues({ ...values, dr_name: e.target.value })} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create;
