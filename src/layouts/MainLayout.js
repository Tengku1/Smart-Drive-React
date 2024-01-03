import ClayLayout from '@clayui/layout'
import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const colStyles = {
  backgroundColor: "#E7E7ED",
  border: "1px solid #CDCED9",
  paddingBottom: ".75rem",
  paddingTop: ".75rem"
};

export default function MainLayout() {
  return (
    <>
      <ClayLayout.ContainerFluid>
        <ClayLayout.Row>
          <ClayLayout.Col size={12} style={colStyles}>
            <Navbar/>
          </ClayLayout.Col>
          <div className='col-12 jumbotron rounded-0'>
            <Outlet />
          </div>
        </ClayLayout.Row>
      </ClayLayout.ContainerFluid>
    </>
  )
}
