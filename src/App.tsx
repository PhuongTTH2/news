import React, { useEffect, useState } from "react";
import RoutesList from "routes/RoutesList";
import { useAppDispatch } from "app/hooks";
import { getAccountScopes, refreshTokenSuccess } from "slices";
import { isAuthSelector} from "selectors/authSelector";
import { useSelector } from "react-redux";
import {isEmpty} from 'lodash'
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const auth = useSelector(isAuthSelector);
  // console.log('first')
  // console.log(auth)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    (async () => {
      if (isEmpty(auth.current.currentUser.AccessToken)) return
      try {
        setIsLoading(true)
        if(localStorage.getItem('AccessToken')){
          dispatch(refreshTokenSuccess(localStorage.getItem('AccessToken')))
          localStorage.removeItem("AccessToken")
        }
        dispatch(getAccountScopes(auth.current?.currentUser));

      } catch (error) {
        console.log("Failed to fetch account scopes");
      }
      setIsLoading(false)
    })();
  }, [auth.current.currentUser.AccessToken]);
  if (isLoading) return null
  return <RoutesList />;
};

export default App;
