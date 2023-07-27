import React from 'react'
import Sidebar from '../Components/Sidebar'
import { SideBarHOC } from '../Components/SideBarHOC'

function Dashboard() {
  return (
    <>
        <div>Dashboard</div>
    </>
  )
}

export default SideBarHOC(Dashboard)