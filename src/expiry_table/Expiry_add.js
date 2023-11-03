import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
    const [values, setValues] = useState({
        product_name: '',
        expiry_date: '',
        expires_in: '',
        is_branded: '',
        profit_percentage: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/expiryadd', values)
            .then(res => {
                console.log(res);
                navigate('/expiry');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>New Expiry Item</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Product Name</label>
                        <input type='text' placeholder='Enter product name' className='form-control' onChange={e => setValues({ ...values, product_name: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Expiry Date</label>
                        <input type='text' placeholder='Enter expiry date' className='form-control' onChange={e => setValues({ ...values, expiry_date: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Expires In</label>
                        <input type='text' placeholder='Enter expires in' className='form-control' onChange={e => setValues({ ...values, expires_in: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Is Branded</label>
                        <input type='text' placeholder='Enter is branded' className='form-control' onChange={e => setValues({ ...values, is_branded: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Profit Percentage</label>
                        <input type='text' placeholder='Enter profit percentage' className='form-control' onChange={e => setValues({ ...values, profit_percentage: e.target.value })} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create;
