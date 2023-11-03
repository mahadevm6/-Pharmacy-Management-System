import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const { customer_id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8081/customeredit/${customer_id}`)
            .then(res => {
                console.log(res);
                setValues({
                    ...values,
                    customer_id: res.data[0].customer_id,
                    customer_name: res.data[0].customer_name,
                    mobile_number: res.data[0].mobile_number,
                    total_amount: res.data[0].total_amount,
                    suggestion_link: res.data[0].suggestion_link
                });
            })
            .catch(err => console.log("There is an error: " + err));
    }, [customer_id]);

    const [values, setValues] = useState({
        customer_id: '',
        customer_name: '',
        mobile_number: '',
        total_amount: '',
        suggestion_link: ''
    });

    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        console.log(values);
        axios.put(`http://localhost:8081/customeredit/${customer_id}`, values)
            .then(res => {
                navigate('/customer');
            })
            .catch(err => {
                console.log("Error found", err);
            });
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h2>Update Customer Details</h2>

                    <div className='mb-2'>
                        <label htmlFor=''>Customer ID</label>
                        <input type='text' placeholder='Enter customer ID' className='form-control' onChange={e => setValues({ ...values, customer_id: e.target.value })} value={values.customer_id} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Customer Name</label>
                        <input type='text' placeholder='Enter customer name' className='form-control' onChange={e => setValues({ ...values, customer_name: e.target.value })} value={values.customer_name} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Mobile Number</label>
                        <input type='text' placeholder='Enter mobile number' className='form-control' onChange={e => setValues({ ...values, mobile_number: e.target.value })} value={values.mobile_number} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Total Amount</label>
                        <input type='text' placeholder='Enter total amount' className='form-control' onChange={e => setValues({ ...values, total_amount: e.target.value })} value={values.total_amount} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Suggestion Link</label>
                        <input type='text' placeholder='Enter suggestion link' className='form-control' onChange={e => setValues({ ...values, suggestion_link: e.target.value })} value={values.suggestion_link} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update;
