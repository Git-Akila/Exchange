import React,{useState} from 'react'
import Navbar from './Header/Navbar';
import Grid1 from '../src/Components/Grid/Grid1';
import Grid3 from '../src/Components/Grid/Grid3';
import Grid4 from '../src/Components/Grid/Grid4';
import StackTable from './Pages/Table/StackTable';

function MainComponent() {
    const [filter, setFilter] = useState('all');
    const [emailFilter, setEmailFilter] = useState('all');
  return (
   <div className='flex'>
    <div className=''>
    <Navbar/>

    </div>
    <div className='flex flex-col'>
    <div className="grid grid-cols-1 xs:grid-cols-4 md:grid-cols-4 gap-4 ">
          <Grid1 filter={filter} setFilter={setFilter} emailFilter={emailFilter} setEmailFilter={setEmailFilter} />
          {/* <Grid2 /> */}
          <Grid3 />
          <Grid4 />
        </div>
        <div className="overflow-x-clip">
          {/* <RegisteredUserChart /> */}
          <StackTable  filter={filter} emailFilter={emailFilter} />
        </div>
    </div>
   


   </div>
  )
}

export default MainComponent