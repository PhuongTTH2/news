import React, { useEffect, useState } from "react";
import RoutesList from "routes/RoutesList";
import { useAppDispatch } from "app/hooks";
import { getAccountScopes } from "slices";
import { isAuthSelector} from "selectors/authSelector";
import { useSelector } from "react-redux";
import {isEmpty} from 'lodash'
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const auth = useSelector(isAuthSelector);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    (async () => {
      if (isEmpty(auth.current.currentUser)) return
      try {
        setIsLoading(true)
        await dispatch(getAccountScopes(auth.current?.currentUser));
      } catch (error) {
        console.log("Failed to fetch account scopes");
      }
      setIsLoading(false)
    })();
  }, [auth.current.currentUser]);
  if (isLoading) return null
  return <RoutesList />;
};

export default App;
