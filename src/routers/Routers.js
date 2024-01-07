import React from 'react'
import { Route, Routes} from 'react-router-dom'
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
import ZonesLayout from '../pages/master/zones/ZonesLayout'
import ZonesAddLayout from '../pages/master/zones/ZonesAddLayout'
import ZonesEditLayout from '../pages/master/zones/ZonesEditLayout'
import RegionPlatLayout from '../pages/master/region-plat/RegionPlatLayout'
import RegionPlatAddLayout from '../pages/master/region-plat/RegionPlatAddLayout'
import RegionPlatEditLayout from '../pages/master/region-plat/RegionPlatEditLayout'
import AreaWorkGroupLayout from '../pages/master/area-work-groups/AreaWorkGroupLayout'
import AreaWorkGroupAddLayout from '../pages/master/area-work-groups/AreaWorkGroupAddLayout'
import AreaWorkGroupEditLayout from '../pages/master/area-work-groups/AreaWorkGroupEditLayout'
import TemplateTypeLayout from '../pages/master/template-type/TemplateTypeLayout'
import TemplateTypeAddLayout from '../pages/master/template-type/TemplateTypeAddLayout'
import TemplateTypeEditLayout from '../pages/master/template-type/TemplateTypeEditLayout'
import WorkOrderLayout from '../pages/master/template-work-orders/WorkOrderLayout'
import WorkOrderAddLayout from '../pages/master/template-work-orders/WorkOrderAddLayout'
import WorkOrderEditLayout from '../pages/master/template-work-orders/WorkOrderEditLayout'
import TemplateInsurancePremiEditLayout from '../pages/master/template-insurance-premi/TemplateInsurancePremiEditLayout'
import TemplateInsurancePremiLayout from '../pages/master/template-insurance-premi/TemplateInsurancePremiLayout'
import TemplateInsurancePremiAddLayout from '../pages/master/template-insurance-premi/TemplateInsurancePremiAddLayout'
import TemplateTaskLayout from '../pages/master/template-task/TemplateTaskLayout'
import TemplateTaskAddLayout from '../pages/master/template-task/TemplateTaskAddLayout'
import TemplateTaskEditLayout from '../pages/master/template-task/TemplateTaskEditLayout'

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path='/' element=<MainLayout/> >
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
          <Route path="/zones" element=<ZonesLayout/> />
          <Route path="/zones/add" element=<ZonesAddLayout/> />
          <Route path="/zones/edit/:zoneID" element=<ZonesEditLayout/> />
          <Route path="/region-plat" element=<RegionPlatLayout/> />
          <Route path="/region-plat/add" element=<RegionPlatAddLayout/> />
          <Route path="/region-plat/edit/:regpID" element=<RegionPlatEditLayout/> />
          <Route path="/area-work-group" element=<AreaWorkGroupLayout/> />
          <Route path="/area-work-group/add" element=<AreaWorkGroupAddLayout/> />
          <Route path="/area-work-group/edit/:arwgCode" element=<AreaWorkGroupEditLayout/> />
          <Route path="/template-type" element=<TemplateTypeLayout/> />
          <Route path="/template-type/add" element=<TemplateTypeAddLayout/> />
          <Route path="/template-type/edit/:tetyID" element=<TemplateTypeEditLayout/> />
          <Route path="/work-order" element=<WorkOrderLayout/> />
          <Route path="/work-order/add" element=<WorkOrderAddLayout/> />
          <Route path="/work-order/edit/:tewoID" element=<WorkOrderEditLayout/> />
          <Route path="/template-task" element=<TemplateTaskLayout/> />
          <Route path="/template-task/add" element=<TemplateTaskAddLayout/> />
          <Route path="/template-task/edit/:taskID" element=<TemplateTaskEditLayout/> />
          <Route path="/insurance-premi" element=<TemplateInsurancePremiLayout/> />
          <Route path="/insurance-premi/add" element=<TemplateInsurancePremiAddLayout/> />
          <Route path="/insurance-premi/edit/:temiID" element=<TemplateInsurancePremiEditLayout/> />
        </Route>
      </Routes>
    </>
  )
}
