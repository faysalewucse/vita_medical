import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"

const PrimaryLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet />
    </div>
  )
}

export default PrimaryLayout