// useFilteredData.js
import { useMemo } from 'react';

const useFilteredData = (data, filter, emailFilter) => {
  return useMemo(() => {
    return data.filter((user) => {
      const isActiveMatch = filter === 'all' || (filter === 'active' ? user.isActive : !user.isActive);
      const isEmailVerifiedMatch = emailFilter === 'all' || (emailFilter === 'verified' ? user.emailVerified : !user.emailVerified);
      return isActiveMatch && isEmailVerifiedMatch;
    });
  }, [data, filter, emailFilter]);
};

export default useFilteredData;
