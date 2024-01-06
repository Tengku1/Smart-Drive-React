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
import InsuranceTypeLayout from '../pages/master/insurance-type/InsuranceTypeLayout.'
import InsuranceTypeEditLayout from '../pages/master/insurance-type/InsuranceTypeEditLayout'
import InsuranceTypeAdLayout from '../pages/master/insurance-type/InsuranceTypeAddLayout'
import CitiesLayout from '../pages/master/cities/CitiesLayout'
import CitiesAddLayout from '../pages/master/cities/CitiesAddLayout'
import CitiesEditLayout from '../pages/master/cities/CitiesEditLayout'
import ProvinceLayout from '../pages/master/province/ProvinceLayout'
import ProvinceAddLayout from '../pages/master/province/ProvinceAddLayout'
import ProvinceEditLayout from '../pages/master/province/ProvinceEditLayout'

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
          <Route path="/insurance-type" element=<InsuranceTypeLayout/> />
          <Route path="/insurance-type/add" element=<InsuranceTypeAdLayout/> />
          <Route path="/insurance-type/edit/:intyName" element=<InsuranceTypeEditLayout/> />
          <Route path="/cities" element=<CitiesLayout/> />
          <Route path="/cities/add" element=<CitiesAddLayout/> />
          <Route path="/cities/edit/:cityID" element=<CitiesEditLayout/> />
          <Route path="/province" element=<ProvinceLayout/> />
          <Route path="/province/add" element=<ProvinceAddLayout/> />
          <Route path="/province/edit/:provID" element=<ProvinceEditLayout/> />
        </Route>
      </Routes>
    </>
  )
}
