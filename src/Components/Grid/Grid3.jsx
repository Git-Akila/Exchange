// src/components/Grid3.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData1 } from '../../feature/userSlice2';

function Grid3() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.user) || { data: null, status: 'idle', error: '' };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserData1());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='flex flex-col p-6 bg-blue-200 rounded-lg'>
      {data && data.TotalAmount && data.TotalAmount.map((e, index) => (
        <div key={index} className='mb-4'>
          <p>Total Subscription:</p>
          <h3>{e.Total}</h3>
        </div>
      ))}
      {data && data.data && data.data.map((e) => (
        <div key={e._id} className='mb-4'>
          <p>Level ID: {e._id}</p>
          <p>Sum: {e.sum}</p>
        </div>
      ))}
    </div>
  );
}

export default Grid3;
