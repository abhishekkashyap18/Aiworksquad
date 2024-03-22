// import Header from './components/Header.jsx'
import './App.css'
// import Sidebar from './components/Sidebar.jsx'
// import Main from './components/Main.jsx'
// import Login from './components/Login.jsx'
import { Outlet } from 'react-router-dom';

function App() {
  

  return (
    <>
      {/* <Header/>
      <div className='grid grid-flow-col gap-4 my-2 h-screen border'>
        <Sidebar/>
        <Main/>
      </div> */}
      {/* <Login/> */}
      {/* <LoginComponent/> */}
      <Outlet />
    </>
  )
}

export default App
