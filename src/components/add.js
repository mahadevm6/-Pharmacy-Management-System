import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
    const [values, setValues] = useState({
        product_name: '',
        quantity: '',
        seller_name: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/addstock', values)
            .then(res => {
                console.log(res);
                navigate('/Stock_List');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Stock</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Product Name</label>
                        <input type='text' placeholder='Enter product name' className='form-control' onChange={e => setValues({ ...values, product_name: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Quantity</label>
                        <input type='number' placeholder='Enter quantity' className='form-control' onChange={e => setValues({ ...values, quantity: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Seller Name</label>
                        <input type='text' placeholder='Enter seller name' className='form-control' onChange={e => setValues({ ...values, seller_name: e.target.value })} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create;
