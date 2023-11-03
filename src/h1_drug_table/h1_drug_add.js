import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [values, setValues] = useState({
        customer_name: '',
        customer_add: '',
        h1_drug_name: '',
        quantity: '',
        dr_name: '',
        dr_working_clinic: '',
        date: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/h1drugadd', values) // Updated endpoint to match your table name
            .then(res => {
                console.log(res);
                navigate('/h1drug'); // Updated route to match your table name
            })
            .catch(err => console.log(err));
    }

    return (
        <div style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)'}}>
        <div className='d-flex vh-75 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>New Entry</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Customer Name</label>
                        <input type='text' placeholder='Enter customer name' className='form-control' onChange={e => setValues({ ...values, customer_name: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Customer Address</label>
                        <input type='text' placeholder='Enter customer address' className='form-control' onChange={e => setValues({ ...values, customer_add: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>H1 Drug Name</label>
                        <input type='text' placeholder='Enter H1 drug name' className='form-control' onChange={e => setValues({ ...values, h1_drug_name: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor=''>Quantity</label>
                        <input type='text' placeholder='Enter quantity' className='form-control' onChange={e => setValues({ ...values, quantity: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor=''>Doctor Name</label>
                        <input type='text' placeholder='Enter doctor name' className='form-control' onChange={e => setValues({ ...values, dr_name: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor=''>Doctor Working Clinic</label>
                        <input type='text' placeholder='Enter doctors working clinic' className='form-control' onChange={e => setValues({ ...values, dr_working_clinic: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor=''>Date</label>
                        <input type='text' placeholder='Enter date' className='form-control' onChange={e => setValues({ ...values, date: e.target.value })} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
        </div>

    )
}

export default Create;
