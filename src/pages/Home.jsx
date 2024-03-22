import React,{useState} from 'react';
import Header from '../components/Header.jsx';
// import {Sidebar as SidebarComponent} from '../components/Sidebar.jsx';
// import {Main as MainComponent} from '../components/Main.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Main from '../components/Main.jsx';
function Home() {

  const [selectedDepartment, setSelectedDepartment] = useState('Marketing');

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };


  return (
    <div>
      <Header name={selectedDepartment} handleDepartmentChange={handleDepartmentChange}/>
      <div className='grid grid-flow-col gap-4 my-2 h-screen'>
        {/* <SidebarComponent/>
        <MainComponent/> */}
        <Sidebar/>
        <Main name={selectedDepartment}/>
      </div> 
    </div>
  );
}

export default Home;
