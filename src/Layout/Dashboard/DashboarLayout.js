
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Navbar from '../Main/NavBar';


const DashboardLayout = () => {
    return (
       <div>
            <Navbar/>
          <div className=' flex gap-3  border '>
             <div className=' min-h-screen bg-[#ECF0F4] p-5'>
             <SideBar/>
             </div>
             <div className='flex-1'>
             <Outlet/>
             </div>
             
        </div>
       </div>
    );
};

export default DashboardLayout;