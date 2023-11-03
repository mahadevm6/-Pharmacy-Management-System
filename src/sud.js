import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ABC from './abc'

export default function studentn() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ABC/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
