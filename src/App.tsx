import React, { useEffect } from "react";
import RoutesList from "routes/RoutesList";
import { useAppDispatch } from "app/hooks";
import { useDispatch } from "react-redux";
import { getAccountScopes } from "slices";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    (() => {
      try {
        dispatch(getAccountScopes("1"));
      } catch (error) {
        console.log("Failed to fetch account scopes");
      }
    })();
  }, []);

  return <RoutesList />;
};

export default App;
