import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HraCalculator from './HraCalculator'
// import Calculator1 from './AdvanceTax'
import AdvanceTax from './AdvanceTax'

const AllRouter = () => {
  return (
    <Routes>
        <Route path='/'  element={<HraCalculator  />} />
        <Route path='/atc' element={<AdvanceTax  />} />
    </Routes>
  )
}

export default AllRouter