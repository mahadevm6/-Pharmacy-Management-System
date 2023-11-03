import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8081/complexqueri')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    const [val, setVal] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8081/profitofeachp')
            .then(res => setVal(res.data))
            .catch(err => console.log(err))
    }, []);



    return (
        <div className='d-flex bg-secondary justify-content-center align-items-center'>
            <div>
              <div><h5>customer names with specific product purchased and the total amount spent by each customer on those products</h5></div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>customer name</th>
                            <th>quantity purchased</th>
                            <th>total amount</th>
                            <th>product name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((cq, index) => {
                            return (
                                <tr key={index}>
                                    <td>{cq.customer_name}</td>
                                    <td>{cq.quantity_purchased}</td>
                                    <td>{cq.total_amount}</td>
                                    <td>{cq.product_name}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
{/* ******************************************************************************************
*************************report 2 profit of each product*********************************
**************************************************************************************** */}


<div><h5>profit of each product </h5></div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>product name</th>
                            <th>total quantity sold </th>
                            <th>total profit </th>
                        </tr>
                    </thead>
                    <tbody>
                        {val.map((cq, index) => {
                            return (
                                <tr key={index}>
                                    <td>{cq.product_name}</td>
                                    <td>{cq.total_quantity_sold}</td>
                                    <td>{cq.total_profit}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>


            </div>
        </div>
    );
}
