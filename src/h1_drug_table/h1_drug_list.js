import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import  './h1_drug.css'

export default function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8081/h1drug')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = (customer_name) => {
        axios.delete(`http://localhost:8081/h1drugdelete/${customer_name}`)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.log("Error Occurred:", err))
    }

    return (
         <div className='H1'>
            <div className='H2'>
                <h2>h1 drug table</h2>
                <div className='d-flex justify-content-end'>
                    <Link to="/h1drugadd" className='btn btn-success'> add new h1 medicines table +</Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>customer_name</th>
                            <th>customer_add</th>
                            <th>h1_drug_name</th>
                            <th>quantity</th>
                            <th>dr_name</th>
                            <th>dr_working_clinic</th>
                            <th>date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((h1_drug, index) => {
                            return (
                                <tr key={index}>
                                    <td>{h1_drug.customer_name}</td>
                                    <td>{h1_drug.customer_add}</td>
                                    <td>{h1_drug.h1_drug_name}</td>
                                    <td>{h1_drug.quantity}</td>
                                    <td>{h1_drug.dr_name}</td>
                                    <td>{h1_drug.dr_working_clinic}</td>
                                    <td>{h1_drug.date}</td>
                                    <td>
                                        <Link to={`/h1drugedit/${h1_drug.customer_name}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                        <button onClick={() => handleDelete(h1_drug.customer_name)} className='btn btn-sm btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
