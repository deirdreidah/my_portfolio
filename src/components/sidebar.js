import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
      <div>
         <div className="bg-info text-white vh-100 p-3" style={{ width: '250px' }}>
           <h3 className=" mb-4  mt-4">Admin Dashboard</h3>
           <Nav defaultActiveKey="/dashboard" className="flex-column">
              <Nav.Link as={Link} to="/home" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/services" className="text-white">Services</Nav.Link>
              <Nav.Link as={Link} to="/projects" className="text-white">Projects</Nav.Link>
              <Nav.Link as={Link} to="/inquiries" className="text-white">Inquiries</Nav.Link>
           </Nav>
         </div>
       </div>  
  )
}

export default SideBar