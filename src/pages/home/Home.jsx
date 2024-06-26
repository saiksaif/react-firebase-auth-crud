import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'

const Home = () => {
  return (
    <div className='home'>
        {/* <Sidebar /> */}
        <div className="homeContainer">
            <Navbar />
            <Datatable />
        </div>
    </div>
  )
}

export default Home