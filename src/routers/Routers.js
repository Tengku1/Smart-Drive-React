import React from 'react'
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom'
import MasterLayout from '../layouts/MasterLayout'
import UserLayout from '../layouts/UserLayout'
import MainLayout from '../layouts/MainLayout'
import CarBrandLayout from '../pages/master/CarBrandLayout'
import CarModelLayout from '../pages/master/CarModelLayout'
import CarBrandEditLayout from '../pages/master/car-brands/CarBrandEditLayout'

export default function Routers() {
  // return useRoutes([
  //   {
  //     path: '/',
  //     element: <MainLayout/>,
  //     children: [
  //       {
  //         path: 'master',
  //         element: <MasterLayout />,
  //         children: [
  //           {
  //             path: 'car-brands',
  //             element: <CarBrandLayout/>
  //           },
  //           {
  //             path: 'car-brands/:id',
  //             element: <CarBrandEditLayout/>
  //           },
  //           {
  //             path: 'car-models',
  //             element: <CarModelLayout/>
  //           },
  //         ]
  //       },
  //       {
  //         path: 'users',
  //         element: <UserLayout />
  //       }
  //     ]
  //   }
  // ])
  return (
    <>
      <Routes>
        <Route path='/' element=<MainLayout/> >
          <Route path="/master" element=<MasterLayout/> />
          <Route path="/master/car-brands" element=<CarBrandLayout/> />
          <Route path="/master/car-brands/:brandId" element=<CarBrandEditLayout/> />
          <Route path="/master/car-models" element=<CarModelLayout/> />
        </Route>
      </Routes>
    </>
  )
}
