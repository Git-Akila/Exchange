// src/components/Grid1.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, setFilter, setEmailFilter, applyFilters } from '../../feature/userSlice';

function Grid1() {
  const dispatch = useDispatch();
  const { originalData, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserData());
    }
  }, [dispatch, status]);

  const totalUsers = originalData.length;
  const isActive = originalData.filter(user => user.isActive).length;
  const inActive = originalData.filter(user => !user.isActive).length;
  const verified = originalData.filter(user => user.emailVerified).length;
  const notVeri = originalData.filter(user => !user.emailVerified).length;

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
    dispatch(applyFilters());
  };

  const handleEmailFilterChange = (emailFilter) => {
    dispatch(setEmailFilter(emailFilter));
    dispatch(applyFilters());
  };

  return (
    <>
      <div className="bg-blue-300 p-6 flex flex-col  rounded-lg">
        <p>Total Users: {totalUsers}</p>
        {status === 'loading' && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 gap-2">
          <div className="flex flex-col py-2 ">
            <p>Active Users</p>
            <h2 onClick={() => handleFilterChange('active')} className="cursor-pointer">{isActive}</h2>
          </div>
          <div className="flex flex-col py-2 text-center">
            <p>Inactive Users</p>
            <h2 onClick={() => handleFilterChange('inactive')} className="cursor-pointer">{inActive}</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-slate-50 p-6 rounded-lg ">
        <p>Email Verification:</p>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="flex flex-col py-2">
            <p>Verified</p>
            <h3 onClick={() => handleEmailFilterChange('verified')} className="cursor-pointer">{verified}</h3>
          </div>
          <div className="flex flex-col py-2 text-center">
            <p>Not Verified</p>
            <h3 onClick={() => handleEmailFilterChange('notverified')} className="cursor-pointer">{notVeri}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid1;
