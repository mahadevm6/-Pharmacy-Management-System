import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Update() {

    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8081/sellerread/' + id)
          .then(res => {
            console.log(res)
            setValues({
                ...values,
                product_id: res.data[0].product_id,
                composition: res.data[0].composition,
                seller_name: res.data[0].seller_name,
                mrp: res.data[0].mrp,
                net_price: res.data[0].net_price,
                profit_percentage: res.data[0].profit_percentage
              });
                        })
          .catch(err => console.log("There is error: " + err))
    },[id])

    const [values, setValues] = useState({
        product_id: '',
        composition: '',
        seller_name: '',
        mrp: '',
        net_price: '',
        profit_percentage: ''
      });
      
    const navigate = useNavigate();


    const handleUpadate = (event) => {
      event.preventDefault();
      console.log(values)
      axios.put('http://localhost:8081/sellerupdate/' + id, values)
          .then(res => {

            navigate('/Sellersl')
          })
          .catch(err => {
            console.log("Error found", err)

          })

    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleUpadate}>
                <h2>Update seller Details</h2>
                 
                <div className='mb-2'>
    <label htmlFor=''>Product ID</label>
    <input type='text' placeholder='Enter product ID' className='form-control' onChange={e => setValues({...values, product_id: e.target.value})} value={values.product_id}/>
</div>
<div className='mb-2'>
    <label htmlFor=''>Composition</label>
    <input type='text' placeholder='Enter composition' className='form-control'  onChange={e => setValues({...values, composition: e.target.value})} value={values.composition}/>
</div>
<div className='mb-2'>
    <label htmlFor=''>Seller Name</label>
    <input type='text' placeholder='Enter seller name' className='form-control'  onChange={e => setValues({...values, seller_name: e.target.value})} value={values.seller_name}/>
</div>
<div className='mb-2'>
    <label htmlFor=''>MRP</label>
    <input type='number' placeholder='Enter MRP' className='form-control'  onChange={e => setValues({...values, mrp: e.target.value})} value={values.mrp}/>
</div>
<div className='mb-2'>
    <label htmlFor=''>Net Price</label>
    <input type='number' placeholder='Enter net price' className='form-control'  onChange={e => setValues({...values, net_price: e.target.value})} value={values.net_price}/>
</div>
<div className='mb-2'>
    <label htmlFor=''>Profit Percentage</label>
    <input type='number' placeholder='Enter profit percentage' className='form-control'  onChange={e => setValues({...values, profit_percentage: e.target.value})} value={values.profit_percentage}/>
</div>
                 <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update;
