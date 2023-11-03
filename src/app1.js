import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import APP from './App'
import Stock from './abc'
import Tablelist from './components/tablelist'
import Edit from './components/edit'
import Add from './components/add'
import Sellersl from './sellers_table/seller_s_l'
import SellerAdd from './sellers_table/seller_add'
import SellerEdit from './sellers_table/seller_edit'
import Expiry from './expiry_table/expiry_list'
import ExpiryAdd from './expiry_table/Expiry_add'
import ExpiryEdit from './expiry_table/expiry_edit'
import Billing from './billing_table/Bill_list'
import BillingAdd from './billing_table/Bill_add'
import BillEdit from './billing_table/Bill_edit'
import Customer from './customer_table/custo_list'
import CustomerAdd from './customer_table/custo_add'
import CustomerEdd from './customer_table/custo_edit'
import ExpiryReturn from './expiry_return/expiry_rlist'
import ExpiryReturnAdd from './expiry_return/expiryr_add'
import ExpiryReturnEdd from './expiry_return/expiryr_edit'

import H1Drug from './h1_drug_table/h1_drug_list'
import H1DrugAdd from './h1_drug_table/h1_drug_add'
import H1DrugEdit from './h1_drug_table/h1_drugEdit'

import CustBill from './billing_table/custbill'
import SortedExpiry from './expiry_table/SortedExpiry'
import Expired_items from './expiry_table/Expired_items'
import OutOstock from './components/outofstock'
import HigherProfit from './customer_table/highprofite'

import Reports from './components/reports'

//navbar 
import About from './navbar/About' 
import Contact from './navbar/contact' 

import LOGIN from './loginpage'

//updated one files
import Zandu from './anewcompo/Zandu';
import  Services from './navbar/services'
//updated one files ends here

export default function studentn() {
  return (
    <div>
    <BrowserRouter>
      <Routes>

      {/* //updated one files */}
      <Route path='/Zandu' element={<Zandu/>}></Route>
      <Route path='/Services' element={<Services/>}></Route>
      {/* //updated one files ends here */}
        <Route path='/app' element={<APP/>}></Route>

        <Route path='/' element={<LOGIN/>}></Route>

        <Route path='/Stock_List' element={<Stock/>}></Route>
        <Route path='/outostock' element={<OutOstock/>}></Route>


        <Route path='/tablelist' element={<Tablelist/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        <Route path='/addstock' element={<Add/>}></Route>
        <Route path='/sellersl' element={<Sellersl/>}></Route>
        <Route path='/selleradd' element={<SellerAdd/>}></Route>
        <Route path='/selleredit/:id' element={<SellerEdit/>}></Route>
        <Route path='/expiry' element={<Expiry/>}></Route>
        <Route path='/expiryadd' element={<ExpiryAdd/>}></Route>
        <Route path='/expiryedit/:product_name' element={<ExpiryEdit/>}></Route>
        <Route path='/billing' element={<Billing/>}></Route>
        <Route path='/billingadd' element={<BillingAdd/>}></Route>
        <Route path='/billedit/:batch_no' element={<BillEdit/>}></Route>
        <Route path='/customer' element={<Customer/>}></Route>
        <Route path='/higherprofit' element={<HigherProfit/>}></Route>


        <Route path='/customeradd' element={<CustomerAdd/>}></Route>
        <Route path='/customeradd/:customer_id' element={<CustomerEdd/>}></Route>
        <Route path='/expiryreturn' element={<ExpiryReturn/>}></Route>
        <Route path='/expiryreturnadd' element={<ExpiryReturnAdd/>}></Route>
        <Route path='/expiryreturnedd/:product_name' element={<ExpiryReturnEdd/>}></Route>
        <Route path='/h1drug' element={<H1Drug/>}></Route>
        <Route path='/h1drugadd' element={<H1DrugAdd/>}></Route>
        <Route path='/h1drugedit/:customer_name' element={<H1DrugEdit/>}></Route>

        <Route path='/custbill' element={<CustBill/>}></Route>
        <Route path='/sortedexpiry' element={<SortedExpiry/>}></Route>
        <Route path='/expired_items' element={<Expired_items/>}></Route>

        {/* //navbar */}
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>


        <Route path='/reports' element={<Reports/>}></Route>


      </Routes>
    </BrowserRouter>
    </div>
  )
}
