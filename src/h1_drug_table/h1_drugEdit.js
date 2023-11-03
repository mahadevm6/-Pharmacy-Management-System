import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Update() {

    const { customer_name } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8081/h1drugedit/' +customer_name) // Update the URL to match your table name
          .then(res => {
            console.log(res);
            setValues({
              ...values,
              customer_name: res.data[0].customer_name,
              customer_add: res.data[0].customer_add,
              h1_drug_name: res.data[0].h1_drug_name,
              quantity: res.data[0].quantity,
              dr_name: res.data[0].dr_name,
              dr_working_clinic: res.data[0].dr_working_clinic,
              date: res.data[0].date,
            });
          })
          .catch(err => console.log("There is an error: " + err))
      }, [customer_name]);
      
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


    const handleUpadate = (event) => {
      event.preventDefault();
      console.log(values)
      axios.put('http://localhost:8081/h1drugedit/' + customer_name, values)
          .then(res => {
      console.log(res)
            navigate('/h1drug')
          })
          .catch(err => {
            console.log("Error found", err)

          })

    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
          <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleUpadate}>
              <h2>Update Drug Details</h2>
      
              <div className='mb-2'>
                <label htmlFor='customer_name'>Customer Name</label>
                <input
                  type='text'
                  placeholder='Enter customer name'
                  className='form-control'
                  onChange={e => setValues({ ...values, customer_name: e.target.value })}
                  value={values.customer_name}
                />
              </div>
              <div className='mb-2'>
                <label htmlFor='customer_add'>Customer Address</label>
                <input
                  type='text'
                  placeholder='Enter customer address'
                  className='form-control'
                  onChange={e => setValues({ ...values, customer_add: e.target.value })}
                  value={values.customer_add}
                />
              </div>
              <div className='mb-2'>
                <label htmlFor='h1_drug_name'>Drug Name</label>
                <input
                  type='text'
                  placeholder='Enter drug name'
                  className='form-control'
                  onChange={e => setValues({ ...values, h1_drug_name: e.target.value })}
                  value={values.h1_drug_name}
                />
              </div>
              <div className='mb-2'>
                <label htmlFor='quantity'>Quantity</label>
                <input
                  type='number'
                  placeholder='Enter quantity'
                  className='form-control'
                  onChange={e => setValues({ ...values, quantity: e.target.value })}
                  value={values.quantity}
                />
              </div>
              <div className='mb-2'>
                <label htmlFor='dr_name'>Doctor Name</label>
                <input
                  type='text'
                  placeholder='Enter doctor name'
                  className='form-control'
                  onChange={e => setValues({ ...values, dr_name: e.target.value })}
                  value={values.dr_name}
                />
              </div>
              <div className='mb-2'>
                <label htmlFor='dr_working_clinic'>Doctor's Working Clinic</label>
                <input
                  type='text'
                  placeholder="Enter doctor's working clinic"
                  className='form-control'
                  onChange={e => setValues({ ...values, dr_working_clinic: e.target.value })}
                  value={values.dr_working_clinic}
                />
              </div>
              <div className='mb-2'>
                <label htmlFor='date'>Date</label>
                <input
                  type='text'
                  placeholder='Enter date'
                  className='form-control'
                  onChange={e => setValues({ ...values, date: e.target.value })}
                  value={values.date}
                />
              </div>
      
              <button className='btn btn-success'>Update</button>
            </form>
          </div>
        </div>
      )
    }
export default Update;
