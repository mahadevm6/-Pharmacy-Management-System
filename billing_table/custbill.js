import axios from 'axios';
import React, { useEffect, useState } from 'react';
import  './custbill.css'

function Update() {
    const [batchNo, setBatchNo] = useState('');
    const [dataList, setDataList] = useState([]); // Store retrieved data in an array

    const [totalAmount, setTotalAmount] = useState(0); // Initialize totalAmount to 0

    const handleSearch = () => {
        // Make a GET request to fetch data based on the entered batch number
        axios.get(`http://localhost:8081/customersbill/${batchNo}`)
            .then(res => {
                // Use the spread operator to add the new data to the existing dataList
                setDataList(prevDataList => [...prevDataList, res.data[0]]);
            })
            .catch(err => {
                console.log("Error found", err);
            });
    };
    

    useEffect(() => {
        const calculateTotalAmount = () => {
            let total = 0;
            for (const data of dataList) {
                total += data.mrp * data.quantity_purchased;
            }
            setTotalAmount(total);
        };

        calculateTotalAmount();
    }, [dataList]);

    return (
        <div>
        <div className='d-flex  bg-primary justify-content-center '>
            <div className=' bg-white rounded p-3'>
                <h2>Search Billing Item</h2>
                <div className='mb-2'>
                    <label htmlFor='batchNo'>Batch Number</label>
                    <div className="d-flex">
                        <input
                            type='text'
                            placeholder='Enter batch number'
                            className='form-control'
                            value={batchNo}
                            onChange={(e) => setBatchNo(e.target.value)}
                        />
                        <button className='btn btn-primary' onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
                <div class="result-row">
    <h2>Results</h2>
    <div>
    <div style={{display:"flex",width:"700px"}}>
        <div class="label">Bill Number : </div>&nbsp;&nbsp;&nbsp;
        <input type="text" style={{width:"200px"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="label">Date :</div>&nbsp;&nbsp;&nbsp;
        <input type="Date" /><br/>
    </div>
    <div style={{display:"flex",width:"700px"}}>
        <div class="label">Customer Name :</div>&nbsp;&nbsp;&nbsp;
        <input type="text" style={{width:"200px"}}/>&nbsp;&nbsp;&nbsp;
        <div class="label" >Dr Name :</div>&nbsp;&nbsp;&nbsp;
        <input type="text" style={{width:"200px"}}/>&nbsp;&nbsp;&nbsp;
    </div>
</div>
                    {dataList.length === 0 ? (
                        <p>No results to display.</p>
                    ) : (
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Batch Number</th>
                                    <th>Product Name</th>
                                    <th>Quantity Purchased</th>
                                    <th>MRP</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataList.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.batch_no}</td>
                                        <td>{data.product_name}</td>
                                        <td>{data.quantity_purchased}</td>
                                        <td>{data.mrp}</td>
                                        <td>{data.mrp*data.quantity_purchased}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        
                    )}

                  <p>Total Amount: {totalAmount}</p>
                  <button type="button" className="btn btn-success">print bill</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Update;
