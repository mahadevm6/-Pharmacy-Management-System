import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const { product_name } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8081/expiryredit/${product_name}`)
            .then(res => {
                console.log(res);
                setValues({
                    ...values,
                    product_name: res.data[0].product_name,
                    quantity: res.data[0].quantity,
                    mrp: res.data[0].mrp,
                    amount: res.data[0].amount,
                    seller_name: res.data[0].seller_name,
                    returned_date: res.data[0].returned_date,
                });
            })
            .catch(err => console.log("There is an error: " + err));
    }, [product_name]);

    const [values, setValues] = useState({
        product_name: '',
        quantity: '',
        mrp: '',
        amount: '',
        seller_name: '',
        returned_date: '',
    });

    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        console.log(values);
        axios.put(`http://localhost:8081/expiryedit/${product_name}`, values)
            .then(res => {
                navigate('/expiryreturn');
            })
            .catch(err => {
                console.log("Error found", err);
            });
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h2>Update expiry return data  Details</h2>

                    <div className='mb-2'>
                        <label htmlFor=''>Product Name</label>
                        <input type='text' placeholder='Enter product name' className='form-control' onChange={e => setValues({ ...values, product_name: e.target.value })} value={values.product_name} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Quantity</label>
                        <input type='text' placeholder='Enter quantity' className='form-control' onChange={e => setValues({ ...values, quantity: e.target.value })} value={values.quantity} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>MRP</label>
                        <input type='text' placeholder='Enter MRP' className='form-control' onChange={e => setValues({ ...values, mrp: e.target.value })} value={values.mrp} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Amount</label>
                        <input type='text' placeholder='Enter amount' className='form-control' onChange={e => setValues({ ...values, amount: e.target.value })} value={values.amount} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Seller Name</label>
                        <input type='text' placeholder='Enter seller name' className='form-control' onChange={e => setValues({ ...values, seller_name: e.target.value })} value={values.seller_name} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Returned Date</label>
                        <input type='text' placeholder='Enter returned date' className='form-control' onChange={e => setValues({ ...values, returned_date: e.target.value })} value={values.returned_date} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update;
