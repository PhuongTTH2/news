import React, { useEffect, useState } from "react";
import RoutesList from "routes/RoutesList";
import { useAppDispatch } from "app/hooks";
import { getAccountScopes } from "slices";
import {isEmpty} from 'lodash'
import { STORAGE_KEY } from 'constants/index'
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    (async () => {
      if(isEmpty(localStorage.getItem(STORAGE_KEY.IS_LOGIN))) return
      try {
        setIsLoading(true)
        await dispatch(getAccountScopes(isLoading));

      } catch (error) {
        console.log("Failed to fetch account scopes");
      }
      setIsLoading(false)
    })();
  }, []);
  // if (isLoading) return <p>Loading...</p>
  return <RoutesList />;
};

export default App;
