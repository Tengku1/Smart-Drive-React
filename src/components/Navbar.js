import Button from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayNavigationBar from '@clayui/navigation-bar';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  // const masterMenus = [
  //   {
  //     id: "1",
  //     href: '/',
  //     label: "Home",
  //   },
  //   {
  //     id: "2",
  //     items: [
  //       {
  //         id: "3",
  //         href: '/master/car-brands',
  //         label: 'Car Brands'
  //       },
  //       {
  //         id: "4",
  //         href: '/master/car-models',
  //         label: 'Car Models'
  //       }
  //     ],
  //     label: "Master"
  //   }
  // ];
  
  const btnStyle = {
    padding: "9px 20px",
    borderColor: "var(--indigo)"
  };

  return (
    <ClayNavigationBar triggerLabel="Navbar">
      <ClayNavigationBar.Item active={window.location.pathname === '/'}>
        <Link to="/" className='btn bg-transparent text-dark border-0' style={btnStyle} type="button">
          Home
        </Link>
      </ClayNavigationBar.Item>
      <ClayNavigationBar.Item active={window.location.pathname === '/master'}>
        <ClayDropDown trigger={
        <Button className='btn bg-transparent text-dark border-0'>Master</Button>
        }>
          <ClayDropDown.ItemList>
            <ClayDropDown.Item
                key='car-brands'
              >
                <Link to="/master/car-brands" className='btn bg-transparent text-dark border-0 p-0 m-0 w-100 text-left' style={btnStyle} type="button">
                  Car Brands
                </Link>
            </ClayDropDown.Item>
            <ClayDropDown.Item
                  key='car-models'
                >
                  <Link to="/master/car-models" className='btn bg-transparent text-dark border-0 p-0 m-0 w-100 text-left' style={btnStyle} type="button">
                    Car Models
                  </Link>
            </ClayDropDown.Item>
          </ClayDropDown.ItemList>
        </ClayDropDown>
      </ClayNavigationBar.Item>
      <ClayNavigationBar.Item active={window.location.pathname === '/users'}>
        <ClayDropDown trigger={
          <Button className='btn bg-transparent text-dark border-0'>Users</Button>
          }>
          <ClayDropDown.ItemList>
            <ClayDropDown.Item
                  key='car-models'
                >
                  <Link to="/master/car-moels" className='btn bg-transparent text-dark border-0 px-0' style={btnStyle} type="button">
                    Car Models
                  </Link>
            </ClayDropDown.Item>
          </ClayDropDown.ItemList>
        </ClayDropDown>
      </ClayNavigationBar.Item>
    </ClayNavigationBar>
  )
}
