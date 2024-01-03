import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <>
      <h1>Master Data</h1>
      <Outlet/>
    </>
  )
}
