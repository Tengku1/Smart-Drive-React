import React from 'react'
import { Route, Routes} from 'react-router-dom'
import MasterLayout from '../layouts/MasterLayout'
import MainLayout from '../layouts/MainLayout'
import CarBrandLayout from '../pages/master/car-brands/CarBrandLayout'
import CarModelLayout from '../pages/master/car-models/CarModelLayout'
import CarBrandEditLayout from '../pages/master/car-brands/CarBrandAddEditLayout'

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path='/' element=<MainLayout/> >
          <Route path="/master" element=<MasterLayout/> />
          <Route path="/car-brands" element=<CarBrandLayout/> />
          <Route path="/car-brands/add" element=<CarBrandEditLayout/> />
          <Route path="/car-brands/edit/:brandId" element=<CarBrandEditLayout/> />
          <Route path="/car-models" element=<CarModelLayout/> />
        </Route>
      </Routes>
    </>
  )
}
