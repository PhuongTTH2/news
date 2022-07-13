import { useState, useEffect, FC } from 'react'
// import { useHistory } from 'react-router-dom'
import { useNavigate } from "react-router";
import { pathName } from "constants/index";


/**
 * Only access if logged in.
 * Redirect to login page if not logged in by default.
 */
export const AuthGuard = ({ children }) => {
    // const history = useHistory()
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        ;(async () => {
            const currentUser = false
            if (currentUser) {
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
