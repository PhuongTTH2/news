import { useState, useEffect } from 'react'
import { useNavigate } from "react-router";
import { pathName } from "constants/index";
import { isAuthSelector } from "selectors/authSelector";
import { useSelector } from "react-redux";
import {isEmpty} from 'lodash'

/**
 * Only access if logged in.
 * Redirect to login page if not logged in by default.
 */
export const AuthGuard = ({ children }) => {
    const navigate = useNavigate();
    const auth = useSelector(isAuthSelector);
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    // console.log(auth.current.currentUser.AccessToken)
    // console.log('auth.current.currentUser.AccessToken')
    useEffect(() => {
        ;(() => {
            if (!isEmpty(auth.current.currentUser.AccessToken)) {
                setIsAuthenticated(true)
            } else {
                navigate(pathName.FORBIDDEN);
            }
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!isAuthenticated) return null

    return <>{children}</>
}
