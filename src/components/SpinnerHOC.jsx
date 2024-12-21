import React, { useEffect, useState } from 'react';

const SpinnerHOC = (WrappedComponent, fetchData) => {
  return function WrappedWithSpinner(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const loadData = async () => {
        await fetchData();
        setLoading(false);
      };

      loadData();
    }, [fetchData]);

    if (loading) {
      return <div>Loading...</div>; // A simple spinner
    }

    return <WrappedComponent {...props} />;
  };
};

export default SpinnerHOC;
