import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchUserData2 } from '../../feature/userSlice3';

function Grid4() {
 const   dispatch=useDispatch();
    const {data,status,error}=useSelector((state)=>state.user1) || {data:[],status:'idle',error:''};
    useEffect(()=>{
        if(status==='idle'){
            dispatch(fetchUserData2());
             }
    },[dispatch,status]);
    console.log("The Data",data.TotalAmount.map(e=>e.Total));
    if(status==='loading'){
      return <div>Loading...</div>
     
    }
    if(status==='failed'){
      return <div>Error:{error}</div>
    }

  return (
    <div className='flex flex-col p-6 bg-slate-100'>
        <p>Royalists Amt</p>
        {data.TotalAmount.map(e=><h2>Total:{e.Total}</h2>)}
        {/* {data.data.map(e=><p>Amount Received:{e.}</p>)} */}
        </div>
  )
}

export default Grid4