import Button from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayNavigationBar from '@clayui/navigation-bar';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const btnStyle = {
    padding: "9px 20px",
    borderColor: "var(--indigo)"
  };
  const toLeftItem = {
    marginLeft: "auto"
  }

  return (
    <ClayNavigationBar triggerLabel="Navbar" className="justify-content-between">
      <ClayNavigationBar.Item>
        <Link to="/" className='btn bg-transparent text-dark border-0' style={btnStyle} type="button">
          <h3 className='pt-1 mr-4 ml-3'>Smart Drive</h3>
        </Link>
      </ClayNavigationBar.Item>
      <ClayNavigationBar.Item>
        <Link to="/" className='btn bg-transparent text-dark border-0' style={btnStyle} type="button">
          Home
        </Link>
      </ClayNavigationBar.Item>
      <ClayNavigationBar.Item>
        <ClayDropDown trigger={
        <Button className='btn bg-transparent text-dark border-0'>Car</Button>
        }>
          <ClayDropDown.ItemList>
            <ClayDropDown.Item
                key='car-brands'
              >
                <Link to="/car-brands" className='btn bg-transparent text-dark border-0 p-0 m-0 w-100 text-left' style={btnStyle} type="button">
                  Car Brands
                </Link>
            </ClayDropDown.Item>
            <ClayDropDown.Item
                  key='car-models'
                >
                  <Link to="/car-models" className='btn bg-transparent text-dark border-0 p-0 m-0 w-100 text-left' style={btnStyle} type="button">
                    Car Models
                  </Link>
            </ClayDropDown.Item>
            <ClayDropDown.Item
                  key='car-series'
                >
                  <Link to="/car-series" className='btn bg-transparent text-dark border-0 p-0 m-0 w-100 text-left' style={btnStyle} type="button">
                    Car Series
                  </Link>
            </ClayDropDown.Item>
          </ClayDropDown.ItemList>
        </ClayDropDown>
      </ClayNavigationBar.Item>
      <ClayNavigationBar.Item>
        <Link to="/insurance-type" className='btn bg-transparent text-dark border-0' style={btnStyle} type="button">
          Insurance
        </Link>
      </ClayNavigationBar.Item>
      <ClayNavigationBar.Item>
        <Link to="/categories" className='btn bg-transparent text-dark border-0' style={btnStyle} type="button">
          Categories
        </Link>
      </ClayNavigationBar.Item>
      <ClayNavigationBar.Item>
        <ClayDropDown trigger={
          <Button className='btn bg-transparent text-dark border-0'>Area</Button>
          }>
          <ClayDropDown.ItemList>
            <ClayDropDown.Item
                  key='zones'
                >
                  <Link to="/zones" className='btn bg-transparent text-dark border-0 px-0' style={btnStyle} type="button">
                    Zones
                  </Link>
            </ClayDropDown.Item>
            <ClayDropDown.Item
                  key='province'
                >
                  <Link to="/province" className='btn bg-transparent text-dark border-0 px-0' style={btnStyle} type="button">
                    Province
                  </Link>
            </ClayDropDown.Item>
            <ClayDropDown.Item
                  key='cities'
                >
                  <Link to="/cities" className='btn bg-transparent text-dark border-0 px-0' style={btnStyle} type="button">
                    Cities
                  </Link>
            </ClayDropDown.Item>
            <ClayDropDown.Item
                  key='region-plat'
                >
                  <Link to="/region-plat" className='btn bg-transparent text-dark border-0 px-0' style={btnStyle} type="button">
                    Region Plat
                  </Link>
            </ClayDropDown.Item>
            <ClayDropDown.Item
                  key='area-work-group'
                >
                  <Link to="/area-work-group" className='btn bg-transparent text-dark border-0 px-0' style={btnStyle} type="button">
                    Area Work Group
                  </Link>
            </ClayDropDown.Item>
          </ClayDropDown.ItemList>
        </ClayDropDown>
      </ClayNavigationBar.Item>
      <ClayNavigationBar.Item>
        <ClayDropDown trigger={
          <Button className='btn bg-transparent text-dark border-0'>Templates</Button>
          }>
          <ClayDropDown.ItemList>
            <ClayDropDown.Item
                  key='template-type'
                >
                  <Link to="/template-type" className='btn bg-transparent text-dark border-0 px-0' style={btnStyle} type="button">
                    Template Type
                  </Link>
            </ClayDropDown.Item>
            <ClayDropDown.Item
                  key='template-service-task'
                >
                  <Link to="/template-type" className='btn bg-transparent text-dark border-0 px-0' style={btnStyle} type="button">
                    Template Task
                  </Link>
            </ClayDropDown.Item>
            <ClayDropDown.Item
                  key='template-task-workorder'
                >
                  <Link to="/template-type" className='btn bg-transparent text-dark border-0 px-0' style={btnStyle} type="button">
                    Template Task Work Order
                  </Link>
            </ClayDropDown.Item>
            <ClayDropDown.Item
                  key='template-task-workorder'
                >
                  <Link to="/template-type" className='btn bg-transparent text-dark border-0 px-0' style={btnStyle} type="button">
                    Template Insurance Premi
                  </Link>
            </ClayDropDown.Item>
          </ClayDropDown.ItemList>
        </ClayDropDown>
      </ClayNavigationBar.Item>
    </ClayNavigationBar>
  )
}
