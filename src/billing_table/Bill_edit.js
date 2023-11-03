import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const { batch_no } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8081/billingedit/${batch_no}`)
          .then(res => {
            console.log(res)
            setValues({
                ...values,
                batch_no: res.data[0].batch_no,
                product_name: res.data[0].product_name,
                quantity_purchased: res.data[0].quantity_purchased,
                customer_name: res.data[0].customer_name,
                mrp: res.data[0].mrp,
                dr_name: res.data[0].dr_name
            });
          })
          .catch(err => console.log("There is an error: " + err))
    }, [batch_no])

    const [values, setValues] = useState({
        batch_no: '',
        product_name: '',
        quantity_purchased: '',
        customer_name: '',
        mrp: '',
        dr_name: ''
    });
      
    const navigate = useNavigate();

    const handleUpdate = (event) => {
      event.preventDefault();
      console.log(values)
      axios.put(`http://localhost:8081/billingedit/${batch_no}`, values)
          .then(res => {
            navigate('/billing');
          })
          .catch(err => {
            console.log("Error found", err)
          })
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h2>Update Billing Item Details</h2>
                     
                    <div className='mb-2'>
                        <label htmlFor=''>Batch Number</label>
                        <input type='text' placeholder='Enter batch number' className='form-control' onChange={e => setValues({...values, batch_no: e.target.value})} value={values.batch_no}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Product Name</label>
                        <input type='text' placeholder='Enter product name' className='form control' onChange={e => setValues({...values, product_name: e.target.value})} value={values.product_name}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Quantity Purchased</label>
                        <input type='text' placeholder='Enter quantity purchased' className='form-control' onChange={e => setValues({...values, quantity_purchased: e.target.value})} value={values.quantity_purchased}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Customer Name</label>
                        <input type='text' placeholder='Enter customer name' className='form-control' onChange={e => setValues({...values, customer_name: e.target.value})} value={values.customer_name}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>MRP</label>
                        <input type='text' placeholder='Enter MRP' className='form-control' onChange={e => setValues({...values, mrp: e.target.value})} value={values.mrp}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Doctor Name</label>
                        <input type='text' placeholder='Enter doctor name' className='form-control' onChange={e => setValues({...values, dr_name: e.target.value})} value={values.dr_name}/>
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update;
