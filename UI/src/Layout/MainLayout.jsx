import React from 'react'
import Nevbar from '../components/Nevbar'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <>
    <Nevbar />
    <Outlet />

    </>
  )
}

export default MainLayout