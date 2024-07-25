import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../feature/userSlice';
import StackTable from '../../Pages/Table/StackTable';
import useFilteredData from './useFilteredData'; // Import custom hook

function Grid1({ setFilter, filter, emailFilter, setEmailFilter }) {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.users || {data: [], status: 'idle', error: ''});
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserData());
    }
  }, [dispatch, status]);

  const filteredData = useFilteredData(data, filter, emailFilter);

  return (
    <>
      {/* Your Grid1 component implementation */}
      <StackTable data={filteredData} />
    </>
  );
}

export default Grid1;
