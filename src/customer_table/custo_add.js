import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [values, setValues] = useState({
    customer_name: '',
    mobile_number: '',
    total_amount: '',
    suggestion_link: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8081/customeradd', values)
      .then((res) => {
        console.log(res);
        navigate('/customer');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>New Customer</h2>
          <div className='mb-2'>
            <label htmlFor=''>Customer Name</label>
            <input
              type='text'
              placeholder='Enter Customer Name'
              className='form-control'
              onChange={(e) =>
                setValues({ ...values, customer_name: e.target.value })
              }
            />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Mobile Number</label>
            <input
              type='text'
              placeholder='Enter Mobile Number'
              className='form-control'
              onChange={(e) =>
                setValues({ ...values, mobile_number: e.target.value })
              }
            />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Total Amount</label>
            <input
              type='text'
              placeholder='Enter Total Amount'
              className='form-control'
              onChange={(e) =>
                setValues({ ...values, total_amount: e.target.value })
              }
            />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Suggestion Link</label>
            <input
              type='text'
              placeholder='Enter Suggestion Link'
              className='form-control'
              onChange={(e) =>
                setValues({ ...values, suggestion_link: e.target.value })
              }
            />
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
