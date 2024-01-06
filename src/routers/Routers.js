import React from 'react'
import { Route, Routes} from 'react-router-dom'
import MasterLayout from '../layouts/MasterLayout'
import MainLayout from '../layouts/MainLayout'
import CarBrandLayout from '../pages/master/car-brands/CarBrandLayout'
import CarModelLayout from '../pages/master/car-models/CarModelLayout'
import CarBrandAddLayout from '../pages/master/car-brands/CarBrandAddLayout'
import CarBrandEditLayout from '../pages/master/car-brands/CarBrandEditLayout'
import CarModelEditLayout from '../pages/master/car-models/CarModelEditLayout'
import CarModelAddLayout from '../pages/master/car-models/CarModelAddLayout'
import CarSeriesLayout from '../pages/master/car-series/CarSeriesLayout'
import CarSeriesEditLayout from '../pages/master/car-series/CarSeriesEditLayout'
import CarSeriesAddLayout from '../pages/master/car-series/CarSeriesAddLayout'
import CategoriesLayout from '../pages/master/categories/CategoryLayout'
import CategoryAddLayout from '../pages/master/categories/CategoryAddLayout'
import CategoryEditLayout from '../pages/master/categories/CategoryEditLayout'

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
          <Route path="/car-models/edit/:modelID" element=<CarModelEditLayout/> />
          <Route path="/car-models/add" element=<CarModelAddLayout/> />
          <Route path="/car-series" element=<CarSeriesLayout/> />
          <Route path="/car-series/add" element=<CarSeriesAddLayout/> />
          <Route path="/car-series/edit/:seriesID" element=<CarSeriesEditLayout/> />
          <Route path="/categories" element=<CategoriesLayout/> />
          <Route path="/categories/add" element=<CategoryAddLayout/> />
          <Route path="/categories/edit/:cateID" element=<CategoryEditLayout/> />
        </Route>
      </Routes>
    </>
  )
}
