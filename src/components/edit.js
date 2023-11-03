import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Update() {

    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8081/read/' + id)
          .then(res => {
            
            setValues({
              ...values,
              product_name: res.data[0].product_name,
              quantity: res.data[0].quantity,
              seller_name: res.data[0].seller_name
            });
          })
          .catch(err => console.log("There is error: " + err))
    },[id])

    const [values, setValues] = useState({
      product_name: '',
      quantity: '',
      seller_name: ''
    });

    const navigate = useNavigate();


    const handleUpadate = (event) => {
      event.preventDefault();
      console.log(values)
      axios.put('http://localhost:8081/update/' + id, values)
          .then(res => {
            navigate('/Stock_List')
          })
          .catch(err => {
            console.log("Error found", err)

          })

    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleUpadate}>
                <h2>Update Product Details</h2>
                
                <div className='mb-2'>
                    <label htmlFor=''>Product Name</label>
                    <input type='text' placeholder='Enter product name' className='form-control' onChange={e => setValues({...values, product_name: e.target.value})} value={values.product_name}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Quantity</label>
                    <input type='number' placeholder='Enter quantity' className='form-control'  onChange={e => setValues({...values, quantity: e.target.value})} value={values.quantity}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Seller Name</label>
                    <input type='text' placeholder='Enter seller name' className='form-control'  onChange={e => setValues({...values, seller_name: e.target.value})} value={values.seller_name}/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update;
