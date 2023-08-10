import { useAuthContext } from "./useAuthContext"
import {useState} from "react"

export const useSignout = () => {
    const [error, setError] = useState("")
    const {dispatch} = useAuthContext()
    const Logout = () => {
        localStorage.removeItem('user')
        setError("User successfully logged out")
        dispatch({type: 'LOGOUT'})
    }
    return {Logout, error}
}
