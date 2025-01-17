import {Outlet} from 'react-router-dom'
import Footer from '../Component/Footer'
import NavBar from './NavBar'
const LayOut = () => {
  return (
    <>
      <NavBar />
        <main>
            <Outlet />
        </main>
      <Footer/>
    </>
  )
}

export default LayOut