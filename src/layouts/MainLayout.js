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
      <ClayLayout.ContainerFluid className='margin-0 p-0 h-100'>
        <ClayLayout.Row>
          <ClayLayout.Col size={12} style={colStyles} className='p-0 border-0'>
            <Navbar/>
          </ClayLayout.Col>
          <ClayLayout.Col size={12} style={colStyles} className='px-5 py-5'>
            <Outlet />
          </ClayLayout.Col>
        </ClayLayout.Row>
      </ClayLayout.ContainerFluid>
    </>
  )
}
