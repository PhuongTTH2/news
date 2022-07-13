import React, { useEffect } from "react";
import RoutesList from "routes/RoutesList";
import { useAppDispatch } from "app/hooks";
import { useDispatch } from "react-redux";
import { getAccountScopes } from "slices";
import { isAdminSelector } from "selectors/authSelector";
import { useSelector } from "react-redux";
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      try {
        dispatch(getAccountScopes());
      } catch (error) {
        console.log("Failed to fetch account scopes");
      }
    })();
  }, []);

  return <RoutesList />;
};

export default App;
