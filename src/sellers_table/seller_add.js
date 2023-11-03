import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
    const [values, setValues] = useState({
        product_id: '',
        composition: '',
        seller_name: '',
        mrp: '',
        net_price: '',
        profit_percentage: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/Sellersl', values)
            .then(res => {
                console.log(res);
                navigate('/Sellersl');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>new seller</h2>
<div className='mb-2'>
    <label htmlFor=''>Product ID</label>
    <input type='text' placeholder='Enter product ID' className='form-control' onChange={e => setValues({ ...values, product_id: e.target.value })} />
</div>
<div className='mb-2'>
    <label htmlFor=''>Composition</label>
    <input type='text' placeholder='Enter composition' className='form-control' onChange={e => setValues({ ...values, composition: e.target.value })} />
</div>
<div className='mb-2'>
    <label htmlFor=''>Seller Name</label>
    <input type='text' placeholder='Enter seller name' className='form-control' onChange={e => setValues({ ...values, seller_name: e.target.value })} />
</div>
<div className='mb-2'>
    <label htmlFor=''>MRP</label>
    <input type='text' placeholder='Enter MRP' className='form-control' onChange={e => setValues({ ...values, mrp: e.target.value })} />
</div>
<div className='mb-2'>
    <label htmlFor=''>Net Price</label>
    <input type='text' placeholder='Enter net price' className='form-control' onChange={e => setValues({ ...values, net_price: e.target.value })} />
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
