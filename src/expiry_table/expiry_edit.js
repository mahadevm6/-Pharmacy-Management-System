import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const { product_name } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8081/expiryedit/${product_name}`)
          .then(res => {
            console.log(res)
            setValues({
                ...values,
                product_name: res.data[0].product_name,
                expiry_date: res.data[0].expiry_date,
                expires_in: res.data[0].expires_in,
                is_branded: res.data[0].is_branded,
                profit_percentage: res.data[0].profit_percentage
            });
          })
          .catch(err => console.log("There is an error: " + err))
    }, [product_name])

    const [values, setValues] = useState({
        product_name: '',
        expiry_date: '',
        expires_in: '',
        is_branded: '',
        profit_percentage: ''
    });
      
    const navigate = useNavigate();

    const handleUpdate = (event) => {
      event.preventDefault();
      console.log(values)
      axios.put(`http://localhost:8081/expiryupdate/${product_name}`, values)
          .then(res => {
            navigate('/expiry');
          })
          .catch(err => {
            console.log("Error found", err)
          })
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h2>Update Expiry Item Details</h2>
                     
                    <div className='mb-2'>
                        <label htmlFor=''>Product Name</label>
                        <input type='text' placeholder='Enter product name' className='form-control' onChange={e => setValues({...values, product_name: e.target.value})} value={values.product_name}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Expiry Date</label>
                        <input type='date' placeholder='Enter expiry date' className='form-control' onChange={e => setValues({...values, expiry_date: e.target.value})} value={values.expiry_date}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Expires In</label>
                        <input type='text' placeholder='Enter expires in' className='form-control' onChange={e => setValues({...values, expires_in: e.target.value})} value={values.expires_in}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Is Branded</label>
                        <input type='text' placeholder='Enter is branded' className='form-control' onChange={e => setValues({...values, is_branded: e.target.value})} value={values.is_branded}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Profit Percentage</label>
                        <input type='number' placeholder='Enter profit percentage' className='form-control' onChange={e => setValues({...values, profit_percentage: e.target.value})} value={values.profit_percentage}/>
                    </div>
                     <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update;
