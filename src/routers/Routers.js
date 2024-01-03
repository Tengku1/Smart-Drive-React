import React from 'react'
import { Route, Routes} from 'react-router-dom'
import MasterLayout from '../layouts/MasterLayout'
import MainLayout from '../layouts/MainLayout'
import CarBrandLayout from '../pages/master/car-brands/CarBrandLayout'
import CarModelLayout from '../pages/master/car-models/CarModelLayout'
import CarBrandAddLayout from '../pages/master/car-brands/CarBrandAddLayout'
import CarBrandEditLayout from '../pages/master/car-brands/CarBrandEditLayout'

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path='/' element=<MainLayout/> >
          <Route path="/master" element=<MasterLayout/> />
          <Route path="/car-brands" element=<CarBrandLayout/> />
          <Route path="/car-brands/add" element=<CarBrandAddLayout/> />
          <Route path="/car-brands/edit/:brandId" element=<CarBrandEditLayout/> />
          <Route path="/car-models" element=<CarModelLayout/> />
        </Route>
      </Routes>
    </>
  )
}
